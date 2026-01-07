export const translate = async (word, source = 'en', target) => {
    if (Array.isArray(word)) {
        return Promise.all(word.map(w => translate(w, source, target)));
    }


    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${source}|${target}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.responseStatus < 200 || data.responseStatus >= 300) {
            throw new Error('Translation API error');
        }

        return data.responseData.translatedText;
    } catch {
        // Fallback to original word on error
        return word;
    }
};
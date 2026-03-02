import { useContext, useEffect, useId, useState } from 'react'
import { LanguageContext } from '../LanguageContext';
import { translate } from '../utils';
import './ChooseLanguage.css';

export default function ChooseLanguage() {
    const id = useId();
    const { language, setLanguage } = useContext(LanguageContext);

    const [labelText, setLabelText] = useState('Greeting List');
    const [languages, setLanguages] = useState([
        { text: 'English', value: 'en' },
        { text: 'Hebrew', value: 'he' },
        { text: 'French', value: 'fr' }
    ]);

    useEffect(() => {
        translate('choose language', 'en', language).then(setLabelText);
        translate(['English', 'Hebrew', 'French'], 'en', language)
            .then((langs) => setLanguages(langs.map((text, index) => ({ text, value: languages[index].value }))));
    }, [language]);

    return (
        <form className='choose-language'>
            <label htmlFor={`lang${id}`}>{labelText}: </label>
            <select name="lang" id={`lang${id}`} onChange={ev => setLanguage(ev.target.value)}>
                {languages.map(lang => (
                    <option key={lang.value} value={lang.value} selected={lang.value === language}>
                        {lang.text}
                    </option>
                ))}
            </select>
        </form>
    )
}

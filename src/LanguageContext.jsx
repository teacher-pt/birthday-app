import { createContext, useState } from 'react'

export const LanguageContext = createContext({
    language: 'en', // en | he | fr
    setLanguage: (language) => { },
});

export default function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

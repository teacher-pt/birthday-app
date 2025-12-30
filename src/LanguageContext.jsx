import { createContext, useState } from 'react'

export const LanguageContext = createContext({
    value: 'en', // en | he | fr
    setValue: (language) => { },
});

export default function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ value: language, setValue: setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

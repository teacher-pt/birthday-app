import './GreetingCard.css';
import { translate } from '../utils';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function GreetingCard({ greeting }) {
    const { language } = useContext(LanguageContext);
    const [translatedGreeting, setTranslatedGreeting] = useState(greeting);

    useEffect(() => {
        translate(greeting, 'en', language).then(setTranslatedGreeting);
    }, [greeting, language]);

    return (
        <div className="greeting-card">
            {translatedGreeting}
        </div>
    )
}

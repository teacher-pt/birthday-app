import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translate } from '../utils';
import './BirthDate.css';

export default function BirthDate({ birthdate = new Date() }) {
    const { language } = useContext(LanguageContext);

    const [hText, setHText] = useState('');
    const [pText, setPText] = useState('');

    const now = new Date();
    const age = now.getFullYear() - birthdate.getFullYear();

    useEffect(() => {
        translate(`Congratulations! You are ${age} years old`, 'en', language).then(setHText);
    }, [language, age]);

    useEffect(() => {
        translate('Your date of birth:', 'en', language).then(setPText);
    }, [language]);


    return (
        <div className='birth-date'>
            <h1>{hText}</h1>
            <p>{pText} {birthdate.toLocaleDateString(language)}</p>
        </div>
    )
}

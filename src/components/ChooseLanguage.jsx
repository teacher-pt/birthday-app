import { useContext, useEffect, useId, useState } from 'react'
import { LanguageContext } from '../LanguageContext';
import { translate } from '../utils';

export default function ChooseLanguage() {
    const id = useId();
    const { language, setLanguage } = useContext(LanguageContext);

    const [labelText, setLabelText] = useState('Greeting List');

    useEffect(() => {
        translate('choose language', 'en', language).then(setLabelText);
    }, [language]);
    return (
        <form>
            <label htmlFor={`lang${id}`}>{labelText}: </label>
            <select name="lang" id={`lang${id}`} onChange={ev => setLanguage(ev.target.value)}>
                <option value="en">English</option>
                <option value="he">Hebrew</option>
                <option value="fr">French</option>
            </select>
        </form>
    )
}

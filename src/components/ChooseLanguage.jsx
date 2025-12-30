import { useContext, useId } from 'react'
import { LanguageContext } from '../LanguageContext';

export default function ChooseLanguage() {
    const id = useId();
    const { setLanguage } = useContext(LanguageContext);

    return (
        <form>
            <label htmlFor={`lang${id}`}>choose language: </label>
            <select name="lang" id={`lang${id}`} onChange={ev => setLanguage(ev.target.value)}>
                <option value="en">English</option>
                <option value="he">Hebrew</option>
                <option value="fr">French</option>
            </select>
        </form>
    )
}

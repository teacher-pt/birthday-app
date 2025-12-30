import { useContext, useEffect, useState } from "react";
import GreetingCard from "./GreetingCard";
import { LanguageContext } from "../LanguageContext";
import { translate } from "../utils";

export default function GreetingsList({ greetings = [] }) {
    const { language } = useContext(LanguageContext);

    const [hText, setHText] = useState('Greeting List');

    useEffect(() => {
        translate('Greeting List', 'en', language).then(setHText);
    }, [language]);

    return (
        <div>
            <h2>{hText}</h2>
            <div>
                {greetings.map((greeting, index) => (
                    <GreetingCard key={index} greeting={greeting} />
                ))}
            </div>
        </div>
    )
}

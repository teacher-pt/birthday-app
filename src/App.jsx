import './App.css'
import ChooseLanguage from './components/ChooseLanguage'
import BirthDate from './components/BirthDate'
import GreetingsList from './components/GreetingsList'
import { LanguageContext } from './LanguageContext';
import { useContext } from 'react';

function App() {
    const { language } = useContext(LanguageContext);

    const dir = language === 'he' ? 'rtl' : 'ltr';

    return (
        <div dir={dir}>
            <ChooseLanguage />
            <BirthDate birthdate={new Date(2010, 0, 1)} />
            <GreetingsList greetings={[
                "Happy Birthday!",
                "Wishing you a wonderful year ahead.",
                "May all your dreams come true.",
                "Have a fantastic celebration!"
            ]} />
        </div>
    )
}

export default App

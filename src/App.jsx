import './App.css'
import ChooseLanguage from './components/ChooseLanguage'
import BirthDate from './components/BirthDate'
import GreetingsList from './components/GreetingsList'

function App() {
    return (
        <>
            <ChooseLanguage />
            <BirthDate birthdate={new Date(2010, 0, 1)} />
            <GreetingsList greetings={[
                "Happy Birthday!",
                "Wishing you a wonderful year ahead.",
                "May all your dreams come true."
            ]} />
        </>
    )
}

export default App

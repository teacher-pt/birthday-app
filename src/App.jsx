import './App.css'
import ChooseLanguage from './components/ChooseLanguage'
import BirthDate from './components/BirthDate'

function App() {
    return (
        <>
            <ChooseLanguage />
            <BirthDate birthdate={new Date(2010, 0, 1)} />
        </>
    )
}

export default App

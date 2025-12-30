export default function BirthDate({ birthdate = new Date() }) {
    const now = new Date();
    const age = now.getFullYear() - birthdate.getFullYear();

    return (
        <div>
            <h1>Congratulations! You are {age} years old</h1>
            <p>Your date of birth: {birthdate.toDateString()}</p>
        </div>
    )
}

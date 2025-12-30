import GreetingCard from "./GreetingCard";

export default function GreetingsList({ greetings = [] }) {
    return (
        <div>
            {greetings.map((greeting, index) => (
                <GreetingCard key={index} greeting={greeting} />
            ))}
        </div>
    )
}

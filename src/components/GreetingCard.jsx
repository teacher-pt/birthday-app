import './GreetingCard.css';
import { translate } from '../utils';

export default function GreetingCard({ greeting }) {
    
    return (
        <div className="greeting-card">
            {greeting}
        </div>
    )
}

import { brandCard } from "../constants";
const Card = () => {
    return (
        <div>
            {brandCard.map(card => (
                <img src={card.imgSrc} alt={card.title} />
            ))}
        </div>
    )
};

export default Card;
import { brandCard } from "../constants";

const Card = () => {
    return (
        <div>
            {brandCard.map(card => (
                <img key={card.title} src={card.imgSrc} alt={card.title} />
            ))}
        </div>
    )
};

export default Card;
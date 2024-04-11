import { brandCard } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    return (
        <section className="w-full py-2 px-4">
            <h2 className="font-montserrat text-sm text-black font-semibold mb-6">Viewing: 15 Popular</h2>
            <div className="max-container">
                <ul className="grid grid-cols-3 gap-10 justify-stretch">
                    {brandCard.map((cards) => (
                        <div className="w-4/5 max-w-[300px] " key={cards.title}>
                            <li className="p-6 grid grid-cols-1 justify-start items-start gap-6 shadow-lg rounded-lg h-full transition-all hover:cursor-pointer">
                                <div className="w-2/3 h-[50px]">
                                    <img
                                        src={cards.imgSrc}
                                        alt={cards.title}
                                        className="w-[65px] h-full"
                                    />
                                </div>
                                <h3 className="font-semibold text-xl ">{cards.title}</h3>
                                <p className="text-gray-dark leading-relaxed">{cards.description}</p>
                                <a href="#" className="self-end flex justify-start items-center gap-2 mt-4 mb-2">
                                    <span className="text-primary-light text-base font-montserrat font-semibold transition-all border-b-2 border-transparent hover:text-primary hover:border-primary">{cards.spanLink}</span>
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        fontSize={12}
                                    />
                                </a>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default Card;
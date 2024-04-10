import { brandCard } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ZoomLogo } from "../assets/icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    return (
        <section className="w-full py-2 px-4">
            <h2 className="font-montserrat text-sm text-black font-semibold mb-6">Viewing: 15 Popular</h2>
            <div className="max-container">
                <ul className="grid grid-cols-3 gap-10">
                    {
                        brandCard.map((card) => {
                            <div className="w-4/5">
                                <li className="p-6 flex flex-col justify-start items-start gap-6 shadow-3xl rounded-lg">
                                    <div>
                                        <img
                                            src={card.imgSrc}
                                            alt={card.title}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <h3 className="font-semibold text-xl ">{card.title}</h3>
                                    <p className="text-gray-dark leading-relaxed w-4/5">{card.description}</p>
                                    <a href="#" className="flex justify-center items-center gap-2 mt-4 mb-2">
                                        <span className="text-primary-light text-base font-montserrat font-semibold transition-all border-b-2 border-transparent hover:text-primary hover:border-primary">{card.spanLink}</span>
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            fontSize={12}
                                        />
                                    </a>
                                </li>
                            </div>
                        })}
                </ul>
            </div>
        </section>
    )
};

export default Card;
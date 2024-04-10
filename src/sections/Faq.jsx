import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FAQs } from "../constants";

const Faq = () => {
    return (
        <section className="flex flex-col justify-center items-center w-4/5 mx-auto gap-8">
            <h2 className="text-3xl font-extrabold font-montserrat">Frequently Asked Questions</h2>
            <p className="flex flex-col gap-2 justify-center items-center mb-4">
                <span>Not seeing what you are looking for?</span>
                <span>Go to our <a href="#" className="text-primary-light text-base font-montserrat font-bold transition-all border-b-2 border-transparent hover:text-primary hover:border-primary">help center</a></span>
            </p>
            <ul className="w-3/5">
                {
                    FAQs.map((faq) => (
                        <li className="rounded-lg shadow-md py-5 px-5 flex justify-between items-center border border-gray-lightest mb-8">
                            <p className="text-2xl text-black font-semibold font-montserrat leading-relaxed">{faq.ques}</p>
                            <a href="#">
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    color="#236CDE"
                                />
                            </a>
                        </li>
                    ))}
            </ul>
        </section>
    )
};

export default Faq;
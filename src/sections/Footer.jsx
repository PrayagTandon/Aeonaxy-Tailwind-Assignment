import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { brandLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="grid grid-cols-2 gap-16">
            <div className="w-3/5 flex flex-col justify-center gap-8">
                <h2 className="flex flex-col gap-2 justify-center items-start text-3xl font-bold font-montserrat">
                    <span>Easy</span>
                    <span className="text-primary">ahead</span>
                </h2>
                <p className="text-sm font-medium leading-loose text-gray-dark">
                    Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth
                </p>

                <div className="relative mt-2">
                    <select
                        name="language"
                        id="languageSelect"
                        className="py-4 w-full rounded-lg px-4 text-lg shadow-md appearance-none focus:outline-primary"
                    >
                        <option value="">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                    </select>

                    <label
                        for="languageSelect"
                        className="absolute top-3.5 right-4"
                    >
                        <FontAwesomeIcon icon={faAngleDown} />
                    </label>
                </div>

                <ul className="flex justify-start items-center gap-2">
                    {
                        brandLinks.map((links) => (
                            <li key={links.alt}>
                                <a href="#">
                                    <img
                                        src={links.imgSrc}
                                        alt={links.alt}
                                        width={50}
                                        height={50}
                                    />
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </footer>
    )
};

export default Footer;
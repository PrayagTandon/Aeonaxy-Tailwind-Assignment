import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { brandLinks, footerLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="grid grid-cols-footer gap-16">
            {/* Footer Description */}
            <div className="w-4/5 flex flex-col justify-center gap-8">
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

                <ul className="flex justify-start items-center gap-10 mt-6">
                    {brandLinks.map((links) => (
                        <li key={links.alt}>
                            <a href="#">
                                <img
                                    src={links.imgSrc}
                                    alt={links.alt}
                                    width={25}
                                    height={25}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="text-gray-light text-sm font-montserrat mt-6"><a href="#">
                    Copyright Calendly 2022
                </a>
                </p>
            </div>

            {/* Footer Links */}
            <div className="w-full">
                <ul className="grid grid-cols-3 justify-start items-start overflow-hidden gap-6 gap-y-12">
                    {footerLinks.map((fLinks) => (
                        <li key={fLinks.title} className="flex flex-col items-start justify-center gap-4">
                            <h3 className="text-xl font-bold font-montserrat mb-2">{fLinks.title}</h3>
                            {fLinks.items.map((linkItem) => (
                                <a key={linkItem} href="#" className="text-gray-dark font-montserrat text-base font-normal pb border-b border-transparent tracking-wide transition-all hover:text-primary-dark hover:border-b-primary">{linkItem}</a>
                            ))}

                        </li>
                    ))}
                </ul>

                <p className="text-gray-light text-sm font-montserrat mt-6 text-end"><a href="#">
                    Privacy / Terms & Conditions
                </a>
                </p>
            </div>
        </footer>
    )
};

export default Footer;
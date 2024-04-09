import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <section
            id="#"
            className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen py-6 px-4"
        >
            {/* Hero section Text */}
            <div className="relative flex flex-col justify-center items-start w-full gap-10">
                <div>
                    <ul className="flex-1 flex justify-center items-center gap-6">
                        <li className="flex justify-center items-center gap-4">
                            <a
                                href='#' className="text-primary text-lg font-semibold">
                                Home
                            </a>
                            <span> / </span>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                            <a
                                href='#' className="text-primary text-lg font-semibold">
                                Products
                            </a>
                            <span> / </span>
                        </li>
                        <li>
                            <a
                                href='#' className="text-gray-dark text-lg font-semibold">
                                Integrations
                            </a>
                        </li>
                    </ul>
                </div>
                <h3 className="text-sm uppercase tracking-wide font-semibold">Apps & Integrations</h3>
                <h1 className="text-6xl">
                    <p className="inline-block text-4xl text-black font-black font-palanquin">Integrate Calendly,</p>
                    <br />
                    <p className="inline-block text-4xl text-black font-black font-palanquin">boost productivity</p>
                </h1>
                <p className="text-gray-dark w-4/5 text-base leading-loose">Smart scheduling automation will change the way you - and your tools - work.</p>
                <div className="relative w-full">
                    <input
                        type="text"
                        name="search"
                        id="SearchInput"
                        placeholder="Search for an Imagination"
                        className="inline-block p-4 pl-16 rounded-full w-3/4 placeholder:text-gray-light shadow-3xl" />
                    <label htmlFor="SearchInput"> <FontAwesomeIcon
                        icon={faSearch}
                        color="#236CDE"
                        className="absolute top-5 left-6"
                        fontSize={20}
                    /></label>
                </div>
            </div>

            {/* Hero Section Img */}
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui impedit quasi ipsum voluptatum debitis similique, doloremque odit sequi suscipit nostrum quae earum corporis dolore voluptates est! Quaerat suscipit, quibusdam atque unde enim, corrupti velit rem minus et, nemo ad.</div>
        </section>
    )
};

export default Hero;
import { heroNavigation } from '../constants'

const Hero = () => {
    return (
        <section
            id="#"
            className="w-full border-2 border-red-600 flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen pt-6"
        >
            {/* Hero section Text */}
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full">
                <div>
                    <ul className="flex-1 flex justify-center items-center gap-6">
                        <li>
                            <a
                                href='#' className="text-primary text-lg font-semibold">
                                Home
                            </a>
                            <span> / </span>
                        </li>
                        <li>
                            <a
                                href='#' className="text-primary text-lg font-semibold">
                                Products
                            </a>
                            <span> / </span>
                        </li>
                        <li>
                            <a
                                href='#' className="text-primary text-lg font-semibold">
                                Integrations
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Hero Section Img */}
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui impedit quasi ipsum voluptatum debitis similique, doloremque odit sequi suscipit nostrum quae earum corporis dolore voluptates est! Quaerat suscipit, quibusdam atque unde enim, corrupti velit rem minus et, nemo ad.</div>
        </section>
    )
};

export default Hero;
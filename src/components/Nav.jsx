import HeaderLogo from '../assets/images/HeaderLogo.png';
import Hamburger from '../assets/images/Hamburger.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';

const Nav = () => {
    return (
        <header className='padding-x z-10 w-full py-5'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={HeaderLogo} alt="Header Logo" width={130} height={29} />
                </a>
                <ul className='flex justify-center items-center ga-16 max-lg:hidden'>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-12 transition-all hover:text-primary'>Individuals</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-12 transition-all hover:text-primary'>Teams</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-12 transition-all hover:text-primary'>Enterprise</a></li>
                    <li>
                        <a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-12 transition-all hover:text-primary flex justify-center items-center gap-1'>
                            Product
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-12 transition-all hover:text-primary'>Pricing</a></li>
                    <li>
                        <a href="#" className='font-montserrat leading-normal text-md text-black font-semibold flex justify-center items-center gap-1 transition-all hover:text-primary'>
                            Resources
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                </ul>
                <ul className='flex justify-center items-center gap-4 max-lg:hidden'>
                    <button type="submit" className='text-black font-bold bg-white p-4 text-base transition-all rounded-full border-2 border-white hover:border-primary'>Log In</button>
                    <button type="submit" className=' font-bold py-4 px-6 bg-primary text-white text-sm rounded-full text-center transition-all hover:bg-primary-light'>Get Started</button>
                </ul>
                <div className='hidden max-lg:block'>
                    <img
                        src={Hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
};

export default Nav;
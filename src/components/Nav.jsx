import HeaderLogo from '../assets/images/HeaderLogo.png';
import Hamburger from '../assets/images/Hamburger.svg';

const Nav = () => {
    return (
        <header className='padding-x py-8 z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={HeaderLogo} alt="Header Logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center ga-16 max-lg:hidden'>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-16'>Individuals</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-16'>Teams</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-16'>Enterprise</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-16'>Product</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold pr-16'>Pricing</a></li>
                    <li><a href="#" className='font-montserrat leading-normal text-md text-black font-semibold'>Resources</a></li>
                </ul>
                <ul className='flex-1 flex justify-center items-center ga-16 max-lg:hidden'>
                    <button type="submit">Log In</button>
                    <button type="submit">Get Started</button>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;
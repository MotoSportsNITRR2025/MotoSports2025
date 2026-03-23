import React, { useState, useEffect } from 'react';
import logo from '/assets/logos/logoTransparent.png';
import navbarMenu from '/assets/icons/navbarMenu.png';
import HeaderAnchor from './headerAnchor';

function Navbar() {
    const [showPopup, setShowPopup] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }

            if (currentScrollPosition > 125 && currentScrollPosition > lastScrollPosition) {
                setIsScrollingUp(false);
            } else if (currentScrollPosition < lastScrollPosition || currentScrollPosition <= 175) {
                setIsScrollingUp(true);
            }

            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    return (
        <>
            <header className={`bg-dustyWhite flex justify-center items-center sticky top-0 h-20 sm:h-20 z-50 transition-transform duration-300 ${isScrollingUp ? 'transform-none' : '-translate-y-full'} ${hasScrolled ? 'shadow-lg' : ''}`}>
                <div className="w-85vw box-border">
                    <nav className='flex justify-between items-center min-h-32'>
                        <div className='px-2 py-6 xl:px-10 xl:py-10 flex justify-center items-center transition-all'>
                            <a href="/">
                                <img src={logo} alt="MotoSports Logo" className='w-24 mr-3 sm:mr-5' />
                            </a>
                            <a href="/">
                                <h1 className='hidden md:block font-albulaHeavy text-3xl xl:text-4xl font-black text-blackbean'>MOTOSPORTS</h1>
                            </a>
                        </div>

                        <ul className="hidden xl:flex justify-end items-center text-black px-10 py-10 space-x-1">
                            
                            <HeaderAnchor text="Home" to="/" />
                            <HeaderAnchor text="eBaja" to="/eBaja" />
                            <HeaderAnchor text="Formula Bharat" to="/formulaBharat" />
                            <HeaderAnchor text="Merchandise" to="/merchandise" />
                            <HeaderAnchor text="About" to="/about" />
                            <HeaderAnchor text="Contact" to="/contact" />
                            <HeaderAnchor text="Problems" to="/problemStatements" />
                        </ul>

                        <img src={navbarMenu} alt="Navigation Icon" className='cursor-pointer px-2 py-2 w-8 h-8 box-content xl:hidden' onClick={togglePopup} />

                        {showPopup && (
                            <div className="popup-bg fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" onClick={togglePopup}>
                                <div className="popup-menu bg-white p-8 rounded-lg shadow-lg z-10 w-80">
                                    <ul className="flex flex-col items-center space-y-5">
                                        <a href="/" className="flex justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:text-tawny hover:border-tawny transition-colors duration-450">
                                            <li className="cursor-pointer font-poppins font-medium font-2 text-base">Home</li>
                                        </a>

                                        <a href="/about" className="flex justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:text-tawny hover:border-tawny transition-colors duration-450">
                                            <li className="cursor-pointer font-poppins font-medium font-2 text-base">About</li>
                                        </a>

                                        <a href="/eBaja" className="flex justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:text-tawny hover:border-tawny transition-colors duration-450">
                                            <li className="cursor-pointer font-poppins font-medium font-2 text-base">eBaja</li>
                                        </a>

                                        <a href="/formulaBharat" className="flex justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:text-tawny hover:border-tawny transition-colors duration-450">
                                            <li className="cursor-pointer font-poppins font-medium font-2 text-base">f - Bharat</li>
                                        </a>

                                        <a href="/merchandise" className="flex justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:text-tawny hover:border-tawny transition-colors duration-450">
                                            <li className="cursor-pointer font-poppins font-medium font-2 text-base">Merchandise</li>
                                        </a>

                                        <a href="/contact" className="flex justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:text-tawny hover:border-tawny transition-colors duration-450">
                                            <li className="cursor-pointer font-poppins font-medium font-2 text-base">Contact</li>
                                        </a>

                                        <button className="popup-close mt-4 px-4 py-2 bg-gray-800 text-white rounded-md" onClick={togglePopup}>Close</button>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
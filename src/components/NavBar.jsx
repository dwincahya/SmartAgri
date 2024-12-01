import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useHandleLinkClick from './function/handleLinkClick';

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const prevScrollY = useRef(0);
    const timeoutRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLinkClick = useHandleLinkClick();

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            if (currentScrollY > prevScrollY.current) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
            timeoutRef.current = setTimeout(() => {
                setNavbarVisible(true);
            }, 300);

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <nav
            className={`bg-white shadow-xl py-2 fixed top-0 z-50 w-full font-sans transition-transform duration-1000 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center space-x-10">
                    <img
                        src="/logo_bg.png"
                        alt="Logo"
                        className="h-12 lg:h-14 xl:h-16 w-auto cursor-pointer"
                        onClick={() => handleLinkClick("/")}
                    />

                    <ul className="hidden md:flex items-center gap-x-6 font-thin">
                        <li className="relative group text-md underline-offset-4 hover:underline lg:text-xl xl:text-3xl text-black font-normal">
                            <button
                                onClick={handleDropdownToggle}
                                className="flex items-center underline-offset-4 hover:underline lg:text-xl xl:text-2xl text-black font-normal"
                                aria-expanded={isDropdownOpen}
                                aria-controls="dropdown-menu">
                                Layanan {isDropdownOpen ? <RiArrowDropUpLine className="text-4xl mt-2" /> : <RiArrowDropDownLine className="text-4xl mt-2" />}
                            </button>
                            {isDropdownOpen && (
                                <div id="dropdown-menu" className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 transition duration-300 ease-in-out transform">
                                    <a href="#service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold">Dashboard</a>
                                    <a href="#service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold">Management</a>
                                    <a href="#service3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold">Statistik</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => handleLinkClick("/about")}
                                className="text-md underline-offset-4 hover:underline lg:text-xl xl:text-2xl text-black font-normal">
                                Tentang Kami
                            </button>
                        </li>
                        <li>
                            <a
                                href="#News-Section"
                                className="text-md underline-offset-4 hover:underline lg:text-xl xl:text-2xl text-black font-normal"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    document.querySelector('#News-Section').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Berita
                            </a>
                        </li>
                        <li>
                            <a
                                href="#News-Section"
                                className="text-md underline-offset-4 hover:underline lg:text-xl xl:text-2xl text-black font-normal"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    document.querySelector('#Contact-Section').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Kontak Kami
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex space-x-4">
                        <button
                            onClick={() => handleLinkClick('/login')}
                            className="bg-gray-300 text-green-600 px-10 py-1 xl:px-14 xl:text-2xl hover:bg-gray-400 transition rounded-md">
                            Masuk
                        </button>

                        <button
                            onClick={() => handleLinkClick('/signup1')}
                            className="bg-green-600 text-white px-10 py-2 xl:px-14 xl:text-2xl rounded-md hover:bg-green-800 transition">
                            Daftar
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle} className="text-2xl text-black" aria-label="Toggle menu">
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full px-4 py-2 left-0 z-40">
                    <ul className="flex flex-col space-y-2">
                        <li className="relative">
                            <button
                                onClick={handleDropdownToggle}
                                className="flex items-center justify-between w-full text-black font-light text-md"
                                aria-expanded={isDropdownOpen}
                                aria-controls="mobile-dropdown-menu">
                                Layanan {isDropdownOpen ? <RiArrowDropUpLine className="text-xl" /> : <RiArrowDropDownLine className="text-xl" />}
                            </button>
                            {isDropdownOpen && (
                                <div id="mobile-dropdown-menu" className="mt-2 bg-white shadow-lg rounded-md py-2 transition duration-300 ease-in-out transform">
                                    <a href="#service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
                                    <a href="#service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
                                    <a href="#service3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 3</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => handleLinkClick("/about")}
                                className="block text-black font-light text-md underline-offset-4 hover:underline">
                                Tentang Kami
                            </button>
                        </li>
                        <li>
                            <a href="#News-Section" 
                                className="block text-black font-light text-md underline-offset-4 hover:underline"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    document.querySelector('#News-Section').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Berita
                            </a>
                        </li>
                        <li>
                            <a href="#Contact-Section" 
                                className="block text-black font-light text-md underline-offset-4 hover:underline"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    document.querySelector('#News-Section').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Kontak Kami
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => handleLinkClick('/login')}
                                className="w-full bg-gray-300 text-green-600 py-2 hover:bg-gray-400 transition rounded-md mt-2">
                                Masuk
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleLinkClick('/signup1')}
                                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 transition">
                                Daftar
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

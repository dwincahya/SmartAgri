import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-1 fixed top-0 z-50 w-full font-sans">
            <div className="ml-16 px-4 wi flex items-center justify-between"> 
                <div className="flex items-center space-x-10">
                    <img src="/logo.png" alt="Logo" className="h-16 w-auto" /> 
                    <ul className="flex items-center gap-x-6 md:gap-x-10 font-thin">
                        <li>
                            <a href="#" className="text-md underline-offset-4 hover:underline md:text-2xl text-black font-light">
                                Layanan
                            </a>
                        </li>
                        <li>
                            <a href="#Skills" className="text-md underline-offset-4 hover:underline md:text-2xl text-black font-light">
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="#Projects" className="text-md underline-offset-4 hover:underline md:text-2xl text-black font-light">
                                Berita
                            </a>
                        </li>
                        <li>
                            <a href="#Contact-me" className="text-md underline-offset-4 hover:underline md:text-2xl text-black font-light">
                                Kontak Kami
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex items-end space-x-4 mr-16">
                    <button className="bg-gray-300 text-green-600 px-9 py-2 hover:bg-gray-400 transition rounded-md">
                        Masuk
                    </button>
                    <button className="bg-green-600 text-white px-9 py-2 rounded-md hover:bg-green-800 transition">
                        Daftar
                    </button>
                </div>
            </div>
        </nav>
    );
}

import React from 'react';
import { icons } from '../assets/Icons';
import useHandleLinkClick from './function/handleLinkClick';

const Signup2 = () => {
  const handleLinkClick = useHandleLinkClick();
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 bg-[#12372A] flex items-center justify-center px-5">
        <div className="max-w-xl w-full">
          <div className="mb-12 text-white">
            <button className="">
              <icons.IoMdArrowBack className="h-10 w-auto" onClick={() => handleLinkClick("back")}/>
            </button>
            <h1 className='text-4xl font-bold'>Lengkapi Data Akun</h1>
          </div>

          <form>
            <div className='mb-10'>
              <label className="block text-white mb-2">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan Nama Lengkap Anda"
                className="w-full p-3 rounded-md border border-gray-300"
              />
            </div>

            <div className='mb-4'>
              <label className="block text-white mb-2">Password</label>
              <input
                type="text"
                placeholder="Masukkan Password Disini"
                className="w-full p-3 rounded-md border border-gray-300"
              />
            </div>

            <div className='mb-4'>
              <label className="block text-white mb-2">Konfirmasi Password</label>
              <input
                type="text"
                placeholder="Konfirmasi Password Disini"
                className="w-full p-3 rounded-md border border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="text-3xl w-full bg-green-600 text-white p-2 rounded-full font-bold hover:bg-green-700 transition mt-10"
              onClick={() => handleLinkClick("/login")}
            >
              Daftar
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 bg-gray-200 sm:flex items-center justify-center">
        <img
          src="/about.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup2;

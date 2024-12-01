import React from 'react';
import { icons } from '../assets/Icons';
import useHandleLinkClick from './function/handleLinkClick';

const Signup1 = () => {
  const handleLinkClick = useHandleLinkClick();
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 bg-[#12372A] flex items-center justify-center px-5">
        <div className="max-w-xl w-full">
          <div className="flex items-center mb-4">
            <button className="text-white">
              <icons.IoMdArrowBack className="h-10 w-auto" onClick={() => handleLinkClick("back")}/>
            </button>
          </div>

          <div className="flex flex-col items-center mb-6">
            <img src="/logo_nbg.png" alt="Logo" className="h-12 lg:h-14 xl:h-20 w-auto mb-4" />
            <h2 className="text-3xl font-bold text-white text-center">Daftar Akun</h2>
          </div>

          <form>
            <div>
              <label className="block text-white mb-2">Email/Nomor Telepon</label>
              <input
                type="text"
                placeholder="Masukkan Email/Nomor Telepon disini"
                className="w-full p-3 rounded-md border border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="text-3xl w-full bg-green-600 text-white p-2 rounded-full font-bold hover:bg-green-700 transition mt-10"
              onClick={() => handleLinkClick("/signup2")}
            >
              Selanjutnya
            </button>

            <div className="text-start mt-4">
              <span className="text-white">Sudah Punya Akun?</span>{" "}
              <a className="text-[#06D001] hover:underline cursor-pointer font-bold" onClick={() => handleLinkClick("/login")}>
                Masuk
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block w-1/2 bg-gray-200 flex items-center justify-center">
        <img
          src="/about.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup1;

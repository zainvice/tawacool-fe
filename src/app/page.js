'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-white h-screen">
      <header className="bg-black">
        <nav className="flex justify-between items-center w-[92%] h-22 mx-auto">
          <div>
            <Link href="/">
              <img className="w-[18]" src="./logo.png" alt="" />
            </Link>
          </div>
          <div
            className={`md:static absolute bg-black text-white md:min-h-fit min-h-[70vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5 mt-16 ${
              isMenuOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[5vw] gap-8">
              <li>
                <Link href="#" className="hover:text-[#2ec4b6]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2ec4b6]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2ec4b6]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2ec4b6]">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <span className="flex items-center mb-7">
          
            <div className={`md:static absolute text-white md:min-h-fit min-h-[60vh] left-0 top-[38%] md:w-auto w-full flex items-center px-3 gap-2 mt-20 ${
              isMenuOpen ? 'block' : 'hidden md:block'}`}>
              <button className="bg-[#2ec4b6] text-white px-5 py-2 rounded-r-full rounded-l-full rounded-br-sm">
                LOGIN
              </button>

              <button className="bg-[#2ec4b6] text-white px-5 py-2 rounded-r-full rounded-tl-sm rounded-l-full">
                SIGN UP
              </button>
            </div>

          
            {isMenuOpen ? (
              <FaTimes
                onClick={toggleMenu}
                className="text-white text-3xl cursor-pointer md:hidden"
              />
            ) : (
              <FaBars
                onClick={toggleMenu}
                className="text-white text-3xl cursor-pointer md:hidden"
              />
            )}
          </span>
        </nav>
      </header>
    </div>
  );
}

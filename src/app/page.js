"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaCopyright,
} from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [animateText, setAnimateText] = useState(true);
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 1 ? 4 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [texts, setTexts] = useState([
    "Bold and determined, reaching new heights. Exploring nature's wonders, their spirits free. Creating memories for eternity.",
    "Exploring nature's wonders, their spirits free.",
    "Creating memories for eternity.",
  ]);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate to the next text
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
      setAnimateText(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      {/* Navbar */}
      <div className="bg-white h-20 relative z-10">
        <header className="bg-black">
          <nav className="flex justify-between items-center w-[92%] h-22 mx-auto">
            <div>
              <Link href="/">
                <img className="w-[18]" src="./logo.png" alt="" />
              </Link>
            </div>
            <div
              className={`lg:static absolute bg-black text-white lg:min-h-fit min-h-[80vh] left-0 top-[10%] lg:w-auto w-full flex items-center px-5 mt-16 ${
                isMenuOpen ? "block" : "hidden lg:block"
              }`}
            >
              <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-[4vh] mb-8">
                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#2ec4b6]">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <span className="flex items-center mb-7 ">
              <div
                className={`lg:static absolute text-white lg:min-h-fit min-h-[60vh] left-0 top-[16rem] lg:w-auto w-full flex items-center px-3 gap-2 mt-20 ${
                  isMenuOpen ? "block" : "hidden lg:block"
                }`}
              >
                <button className="bg-[#2ec4b6] text-white px-5 py-2 rounded-r-full rounded-l-full rounded-br-sm">
                  LOGIN
                </button>

                <button className="bg-[#2ec4b6] text-white px-5 py-2 ml-3 rounded-r-full rounded-tl-sm rounded-l-full">
                  SIGN UP
                </button>
              </div>

              {isMenuOpen ? (
                <FaTimes
                  onClick={toggleMenu}
                  className="text-white text-3xl cursor-pointer lg:hidden"
                />
              ) : (
                <FaBars
                  onClick={toggleMenu}
                  className="text-white text-3xl cursor-pointer lg:hidden"
                />
              )}
            </span>
          </nav>
        </header>
      </div>
      {/* Crousel */}
      <div className="carousel w-full ">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            activeSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img src="./logo.png" className="w-full h-[80vh]" alt="Slide 1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <span
              className={`mx-auto mb-80 animate-slide-in-left ${
                activeSlide === 1 ? "opacity-100" : "opacity-0"
              } duration-1000 ease-in-out`}
            >
              <label className="text-white font-bold text-4xl">
                VENTURE INTO
              </label>
              <label className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-white to-[#54ebca] text-transparent bg-clip-text">
                THE GREAT OUTDOORS
              </label>
            </span>

            <button className="btn btn-primary rounded-full border-2 text-white bg-[#f36523] w-28 h-10 absolute top-96 left-1/2 transform -translate-x-1/2">
              Explore
            </button>
          </div>
        </div>
        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            activeSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img src="./download.png" className="w-full h-[80vh]" alt="Slide 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <span className="mx-auto mb-80">
              <label className="text-white font-bold text-4xl">
                VENTURE INTO{" "}
              </label>
              <label className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-white to-[#54ebca] text-transparent bg-clip-text">
                THE GREAT OUTDOORS
              </label>
            </span>
            <button className="btn btn-primary rounded-full border-2 text-white bg-[#f36523] w-28 h-10 absolute top-96 left-1/2 transform -translate-x-1/2">
              Explore
            </button>
          </div>
        </div>
        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            activeSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img src="./logo.png" className="w-full h-[80vh]" alt="Slide 3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <span className="mx-auto mb-80">
              <label className="text-white font-bold text-4xl">
                VENTURE INTO{" "}
              </label>
              <label className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-white to-[#54ebca] text-transparent bg-clip-text">
                THE GREAT OUTDOORS
              </label>
            </span>
            <button className="btn btn-primary rounded-full border-2 text-white bg-[#f36523] w-28 h-10 absolute top-96 left-1/2 transform -translate-x-1/2">
              Explore
            </button>
          </div>
        </div>
        <div
          id="slide4"
          className={`carousel-item relative w-full ${
            activeSlide === 4 ? "block" : "hidden"
          }`}
        >
          <img src="./download.png" className="w-full h-[80vh]" alt="Slide 4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <span className="mx-auto mb-80">
              <label className="text-white font-bold text-4xl">
                VENTURE INTO{" "}
              </label>
              <label className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-white to-[#54ebca] text-transparent bg-clip-text">
                THE GREAT OUTDOORS
              </label>
            </span>
            <button className="btn btn-primary rounded-full border-2 text-white bg-[#f36523] w-28 h-10 absolute top-96 left-1/2 transform -translate-x-1/2">
              Explore
            </button>
          </div>
        </div>
      </div>
      {/* Circle */}
      <div className="relative w-full h-screen bg-gradient-to-r from-orange-200 via-white to-[#ccf2ea] z-10">
        <h1 className="relative top-10 left-1/2 transform -translate-x-1/2 text-6xl sm:text-6xl text-center text-black">
          TawaKCool Adventure...
        </h1>
        <div className="relative w-96 h-96 sm:w-[30rem] sm:h-[30rem] rounded-full bg-[#91d3d0] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center overflow-auto">
          <div className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#91d3d0] flex flex-col items-center justify-center">
            <p className="text-lg sm:text-2xl font-bold text-black mb-4">
              Where cool women unite,
            </p>
            <p className="mb-4 ml-4 text-base sm:text-lg items-center">
              {texts[currentTextIndex]}
            </p>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="bg-white w-full h-28"></div>

      {/*  OUR Services */}
      <div className="relative w-full min-h-screen bg-gradient-to-r from-orange-200 via-white to-[#ccf2ea] z-10 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl text-center text-black mt-10 sm:mt-20">
          Our Services
        </h1>
        <div className="w-full mt-8 sm:mt-20 flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="w-full sm:w-64 text-center bg-white shadow-lg flex flex-col rounded-2xl mb-6">
            <div className="w-full justify-start flex flex-col">
              <h4
                className="border-2 text-2xl sm:text-3xl py-4 bg-green-700 rounded-t-2xl"
                id="whoobe-3mr7n"
              >
                Ladies Hike
              </h4>
              <p
                className="border-green-700 border-2 text-base sm:text-lg"
                id="whoobe-950fw"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img
              src="./download.png"
              alt="img"
              title="img"
              className="w-full h-48 sm:h-64 object-cover rounded-b-lg"
            />
            <button
              value="button"
              className="my-4 px-4 font-bold text-black hover:bg-gray-400 bg-transparent"
              id="whoobe-jkkr2"
            >
              More Events
            </button>
          </div>

          <div className="w-full sm:w-64 text-center bg-white shadow-lg flex flex-col rounded-2xl mb-6">
            <div className="w-full justify-start flex flex-col">
              <h4
                className="border-2 text-2xl sm:text-3xl py-4 bg-[#6ad5cb] rounded-t-2xl"
                id="whoobe-3mr7n"
              >
                Family Events
              </h4>
              <p
                className="border-[#6ad5cb] border-2 text-base sm:text-lg"
                id="whoobe-950fw"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img
              src="./download.png"
              alt="img"
              title="img"
              className="w-full h-48 sm:h-64 object-cover rounded-b-lg"
            />
            <button
              value="button"
              className="my-4 px-4 font-bold text-black hover:bg-gray-400 bg-transparent"
              id="whoobe-jkkr2"
            >
              More Events
            </button>
          </div>

          <div className="w-full sm:w-64 text-center bg-white shadow-lg flex flex-col rounded-2xl mb-6">
            <div className="w-full justify-start flex flex-col">
              <h4
                className="border-2 text-2xl sm:text-3xl py-4 bg-[#f36523] rounded-t-2xl"
                id="whoobe-3mr7n"
              >
                Card Info
              </h4>
              <p
                className="border-[#f36523] border-2 text-base sm:text-lg"
                id="whoobe-950fw"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <img
              src="./download.png"
              alt="img"
              title="img"
              className="w-full h-48 sm:h-64 object-cover rounded-b-lg"
            />
            <button
              value="button"
              className="my-4 px-4 font-bold text-black hover:bg-gray-400 bg-transparent"
              id="whoobe-jkkr2"
            >
              More Events
            </button>
          </div>
        </div>
      </div>

      {/* Email Service */}
      <div className="bg-[#f36523] p-4 md:p-8 lg:p-16 h-auto md:h-52 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="inline text-center md:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl">
            Get the Latest from{" "}
            <span className="text-black font-bold">TawakCool Adventures</span>
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center text-black gap-4">
          <input
            type="text"
            placeholder="Your Email"
            className="p-2 text-black border-0 border-b-2 w-full border-b-black bg-[#f36523] placeholder-black"
          />
          <button className="bg-transparent w-full md:w-64 font-bold h-12 border-2 rounded-lg border-black text-black">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center bg-black text-white text-center h-full">
        <h1 className="text-6xl sm:text-6xl text-center mb-4 mt-6">
          TawakCool Adventures
        </h1>
        <div className="flex justify-between items-center w-full px-10">
          <p className="text-xl sm:text-xl text-center mb-2 mt-2 flex-grow">
            Where Adventure Begins
          </p>
          <button className="text-white bg-[#f36523] rounded-full w-60 h-12 text-2xl">
            Contact us
          </button>
        </div>

        <div className="container p-6 lg:text-left">
          <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* First links section */}
            <div className="mb-6">
              <h5 className="mb-4 font-bold text-xl uppercase">Connect</h5>
              <ul className="list-none text-lg">
                <li className="mb-4 flex items-center">
                  <FaInstagram className="mr-2" />
                  <Link href="#" className="">
                    Follow us on Instagram
                  </Link>
                </li>
                <li className="mb-4 flex items-center">
                  <FaFacebook className="mr-2" />
                  <Link href="#" className="">
                    Find us on Facebook
                  </Link>
                </li>
                <li className="mb-4 flex items-center">
                  <FaEnvelope className="mr-2" />
                  <Link href="#" className="">
                    Stay updated
                  </Link>
                </li>
                <li className="mb-4 flex items-center">
                  <FaCopyright className="mr-2" />
                  <Link href="#" className="">
                    2003 TawakCool Adventure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Second links section */}
            <div className="mb-6">
              <h5 className="mb-4 font-bold text-xl uppercase">Our Stories</h5>
              <ul className="list-none text-lg">
                <li className="mb-4">
                  <Link href="#" className="">
                    Ladies Hike
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Family Events
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Children's Activities
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>

            {/* Third links section */}
            <div className="mb-6 mt-10">
              <h5 className="mb-4 font-bold text-xl uppercase">Company</h5>
              <ul className="list-none text-lg">
                <li className="mb-4">
                  <Link href="#" className="">
                    About us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Events
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Testimonials
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Gallery
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fourth links section */}
            <div className="mb-6">
              <h5 className="mb-4 font-bold text-xl uppercase">Get Help</h5>
              <ul className="list-none text-lg">
                <li className="mb-4">
                  <Link href="#" className="">
                    Sign up/Login
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Terms of Use
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

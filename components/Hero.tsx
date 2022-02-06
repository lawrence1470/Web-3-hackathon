import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Layout from "./Layout";
import Link from "next/link";

const Hero = () => {
  return (
    <Layout>
      <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
        <Logo />

        <div className="flex items-center gap-12">
          <Navigation />
          <Link href="/wallet">
            <a className="hidden lg:inline-block bg-black hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 py-1 hover:cursor-pointer">
              Wallet
            </a>
          </Link>
        </div>

        {/*buttons - start*/}
        <button
          type="button"
          className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        {/*buttons - end*/}
      </header>

      <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
        {/*image - start*/}
        <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/*image - end*/}

        {/*content - start*/}
        <div className="xl:w-5/12 flex flex-col sm:text-center lg:text-left lg:pb-12 xl:pb-24">
          <div className="text-black md:text-md xl:text-lg font-light mb-4 md:mb-10">
            <p>THE PLACE FOR DESIGN LOVERS.</p>
            <p>SUPPORT YOUR FAVORITE DESIGNERS,</p>
            <p>DISCOVER, AND BUY DESIGN OBJECTS LIKE NEVER BEFORE.</p>
          </div>

          <h1 className="text-black-800 text-2xl sm:text-3xl md:text-4xl font-normal mb-8 md:mb-12 pr-4">
            DISCOVER AND BUY DESIGNER’S PIECES, COLLECT NFTS.
          </h1>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 hover:cursor-pointer">
            <a className="text-black inline-block bg-white text-sm md:text-base font-light text-center outline-none transition duration-100 border-black border-b-2">
              Discover
            </a>
          </div>
        </div>
        {/*content - end*/}
      </section>
    </Layout>
  );
};

export default Hero;

import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import ArtOne from "../images/artOne.png";
import ArtTwo from "../images/artTwo.png";

const LandingSection = () => {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row justify-between gap-4">
        {/*content - start*/}
        <div className="w-6/12 flex flex-col lg:pb-12 xl:pb-24">
          <div className="text-black text-4xl font-bold mb-4 md:mb-10">
            <h2>Collection</h2>
          </div>
          <h1 className="text-black-800 text-10xl sm:text-6xl md:text-8xl font-normal mb-6 md:mb-12">
            BIG GAME
          </h1>
          <p className="lg:w-4/5 text-black font-light xl:text-lg leading-relaxed mb-8 md:mb-12">
            BIG-GAME is a Swiss-based design studio founded in 2004 by Augustin
            Scott de Martinville, Elric Petit and Grégoire Jeanmonod.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
            <a className="text-black inline-block bg-white text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 pr-8 py-3">
              DISCOVER
            </a>
          </div>
        </div>
        {/*content - end*/}

        {/*image - start*/}
        <div className="flex gap-8 w-6/12">
          <div className="w-6/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-none px-7 py-12 self-baseline">
            <Image
              src={ArtOne}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-6/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-none px-7 py-12 self-baseline">
            <Image
              src={ArtTwo}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/*image - end*/}
      </section>
    </Layout>
  );
};

export default LandingSection;

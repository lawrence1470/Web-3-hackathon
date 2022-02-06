import React from "react";
import Image from "next/image";
import ArtOne from "../images/artOne.png";
import ArtTwo from "../images/artTwo.png";
import Arrow from "../images/Arrow.png";
import Link from "next/link";

const CollectionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-4">
      {/*content - start*/}
      <div className="w-6/12 flex flex-col lg:pb-12 xl:pb-24">
        <div className="text-black text-4xl font-bold mb-4 md:mb-10">
          <h1> BIG GAME</h1>
        </div>
        <p className="lg:w-4/5 text-black font-light xl:text-lg leading-relaxed mb-4">
          <p>
            BIG-GAME is a Swiss-based design studio founded in 2004 by Augustin
            Scott de Martinville, Elric Petit and Grégoire Jeanmonod.
          </p>
          {`BIG-GAME’s work is often accessible, charming and, above all, useful. The
              studio has received numerous awards including the Swiss Design
              Award, the iF design award, the Wallpaper Design Award, the Good
              Design Award, the Hublot Design Award and Design Preis Schweiz.
              BIG-GAME's works are part of the collections of the Museum fur
              Gestaltung, the Musée du Grand-Hornu, the Centre Georges Pompidou as
              well as the MoMA.`}
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 hover:cursor-pointer">
          <a className="text-black inline-block bg-white text-sm md:text-base font-light text-center outline-none transition duration-100 border-black border-b-2">
            PRESS
          </a>
        </div>
      </div>
      {/*content - end*/}

      {/*image - start*/}
      <div className="flex gap-8 w-6/12 pt-6">
        <div className="w-6/12">
          <div className="lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-none px-7 py-12 self-baseline relative">
            <button className="absolute border-2 border-black bg-white px-2 bottom-0 left-0">
              SERIE
            </button>
            <Image
              src={ArtOne}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <Link href="/object">
            <div className="flex items-center mt-2 hover:cursor-pointer">
              <h3 className="mr-1">Bold chair</h3>
              <Image
                src={Arrow}
                loading="lazy"
                alt="Arrow"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Link>
        </div>
        {/*image two start*/}
        <div className="w-6/12">
          <div className="lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-none px-7 py-12 self-baseline relative">
            <button className="absolute border-2 border-black bg-white px-2 bottom-0 left-0">
              SERIE
            </button>
            <Image
              src={ArtTwo}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex items-center mt-2">
            <h3 className="mr-1">Tabouret</h3>
            <Image
              src={Arrow}
              loading="lazy"
              alt="Arrow"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        {/*image two end*/}
      </div>
      {/*image - end*/}
    </section>
  );
};

export default CollectionSection;

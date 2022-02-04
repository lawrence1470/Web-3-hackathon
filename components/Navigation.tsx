import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="hidden lg:flex gap-12">
      <Link href="/wallet">
        <a className="text-indigo-500 text-lg font-semibold">Wallet</a>
      </Link>
      {/*<a href="#" className="text-indigo-500 text-lg font-semibold">*/}
      {/*  Home*/}
      {/*</a>*/}
      {/*<a*/}
      {/*  href="#"*/}
      {/*  className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"*/}
      {/*>*/}
      {/*  Features*/}
      {/*</a>*/}
      {/*<a*/}
      {/*  href="#"*/}
      {/*  className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"*/}
      {/*>*/}
      {/*  Pricing*/}
      {/*</a>*/}
      {/*<a*/}
      {/*  href="#"*/}
      {/*  className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"*/}
      {/*>*/}
      {/*  About*/}
      {/*</a>*/}
    </nav>
  );
};

export default Navigation;

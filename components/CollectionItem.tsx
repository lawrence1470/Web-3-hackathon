import React, { FC } from "react";

type Props = {
  file_url: string;
};

const CollectionItem: FC<Props> = ({ file_url }) => {
  return (
    <div>
      <a
        href="#"
        className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
      >
        <img
          src={file_url}
          loading="lazy"
          alt="Photo by Austin Wade"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
        />
      </a>

      <div className="flex flex-col">
        <span className="text-gray-500">Men</span>
        <a
          href="#"
          className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
        >
          Business Causual
        </a>
      </div>
    </div>
  );
};

export default CollectionItem;

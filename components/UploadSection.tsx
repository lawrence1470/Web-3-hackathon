import React, { useState } from "react";
import { uploadIPFS } from "../pages/api/UploadIPFS";
import { uploadMetaData } from "../pages/api/UploadMetaDataIPFS";

const UploadSection = () => {
  const [selectedFile, setState] = useState<any>();
  const onFileChange = (event: any) => {
    setState({ selectedFile: event.target.files[0] });
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    const result: any = await uploadIPFS(selectedFile);

    uploadMetaData({
      name: "this is a test name",
      description: "testing",
      file_url: result.ipfs_url,
    });
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <form
                onSubmit={handleUpload}
                className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="nftName"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Nft Name
                  </label>
                  <input
                    name="nftName"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    description
                  </label>
                  <input
                    name="description"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="uploadImage"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Upload Image
                  </label>
                  <input
                    name="uploadImage"
                    type="file"
                    onChange={onFileChange}
                  />
                </div>
                <div className="sm:col-span-2 flex justify-between items-center">
                  <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Upload to IPFS
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;

import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { getContractNFTS } from "./api/GetContractNFTS";
import CollectionItem from "../components/CollectionItem";
import { isArray } from "util";
import CollectionSection from "../components/CollectionSection";

const Collections = () => {
  const [nfts, setNfts] = useState();

  useEffect(() => {
    const getNfts = async () => {
      const data = await getContractNFTS();
      setNfts(data.nfts);
    };

    getNfts().catch(console.error);
  }, []);

  console.log(nfts);

  return (
    <Layout>
      <Navbar />
      <CollectionSection />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
            {isArray(nfts) &&
              (nfts as any[]).map((nft: any) => (
                <CollectionItem key={nft.token_id} file_url={nft.file_url} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collections;

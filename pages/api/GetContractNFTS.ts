import axios from "axios";

const contract_address = "0x2B0850BDbf8982bFbCdde26771143C559525791F";

export const getContractNFTS = () => {
  const options: any = {
    method: "GET",
    url: `https://api.nftport.xyz/v0/nfts/${contract_address}`,
    params: { chain: "polygon", include: "metadata" },
    headers: {
      "Content-Type": "application/json",
      Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
};

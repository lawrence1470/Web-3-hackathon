import axios from "axios";

export const getContractAddress = (transaction_hash: string) => {
  const options: any = {
    method: "GET",
    url: "https://api.nftport.xyz/v0/contracts/0x2dd2300092ff7a7ea9f76016f01e588fb3e51b454f47d5dbb421d6f3309cf4ca",
    params: { chain: "polygon", transaction_hash },
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

import axios from "axios";

type Data = {
  chain: "polygon";
  contract_address: string;
  mint_to_address: string;
  metadata_uri: string;
};

export const mintToContract = (data: Data) => {
  const options: any = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/mints/customizable",
    headers: {
      "Content-Type": "application/json",
      Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
    },
    data: data,
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

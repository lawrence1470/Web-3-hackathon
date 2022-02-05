import * as fs from "fs";
import axios from "axios";

type Data = {
  name: string;
  description: string;
  file_url: string;
};

export const uploadMetaData = (data: Data) => {
  console.log(data, "dataaaa");
  const options: any = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/metadata",
    headers: {
      "Content-Type": "application/json",
      Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
    },
    data: data,
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

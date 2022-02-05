import * as fs from "fs";
import axios from "axios";

export const uploadIPFS = ({ selectedFile }: any) => {
  console.log(selectedFile, "this is file");
  const form = new FormData();
  form.append("file", selectedFile);

  const options: any = {
    method: "POST",
    url: "https://api.nftport.xyz/v0/files",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
      "content-type":
        "multipart/form-data; boundary=---011000010111000001101001",
    },
    data: form,
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

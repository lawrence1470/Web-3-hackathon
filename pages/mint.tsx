import React, { useCallback, useState } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import axios from "axios";
import FormData from "form-data";
import Dog from "../images/dog.jpeg";

const API_KEY_NFT_PORT = `${process.env["NEXT_PUBLIC_NFT_PORT "]}`;

const options = {
  method: "POST",
  url: "https://api.nftport.xyz/v0/mints/easy/files",
  params: {
    chain: "polygon",
    name: "testing",
    description: "test",
    mint_to_address: "0xDDE6123dD77F143254D44bf36Da1745e411Ffb2c",
  },
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
    "content-type": "multipart/form-data; boundary=---011000010111000001101001",
  },
};

const Mint = () => {
  const { authenticate, isAuthenticated, isInitializing } = useMoralis();
  const [selectedFile, setState] = useState<any>();

  const onFileChange = (event: any) => {
    // Update the state
    setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData

    const form = new FormData();
    form.append("file", Dog);
    form.append("msg", "test");
    form.append("type", "test");

    const options = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/mints/easy/urls",
      headers: {
        "Content-Type": "application/json",
        Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
      },
      data: {
        chain: "polygon",
        name: "Type your NFT name here",
        description: "Type your NFT description here",
        file_url:
          "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        mint_to_address: "0xDDE6123dD77F143254D44bf36Da1745e411Ffb2c",
      },
    };

    axios
      .request(options as any)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {/*{this.state.selectedFile.lastModifiedDate.toDateString()}*/}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  const getItem = () => {
    const options = {
      method: "GET",
      url: "https://api.nftport.xyz/v0/mints/0xfebfa453ca5779b636fc3237390cef1c1aa521852049081b48a88881a924847e",
      params: { chain: "polygon" },
      headers: {
        "Content-Type": "application/json",
        Authorization: "cde81237-44e1-4ecd-80dd-fd12899ecfbf",
      },
    };

    axios
      .request(options as any)
      .then(function (response) {
        console.log(response.data, "----->");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Layout>
      <Navbar />
      <div>
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>
        </div>
        {fileData()}
      </div>
      <button onClick={getItem}>click to get item</button>
    </Layout>
  );
};

export default Mint;

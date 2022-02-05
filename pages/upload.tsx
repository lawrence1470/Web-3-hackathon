import React, { useState } from "react";
import { uploadIPFS } from "./api/UploadIPFS";
import Navbar from "../components/Navbar";
import UploadSection from "../components/UploadSection";
import Layout from "../components/Layout";

const Upload = () => {
  const [selectedFile, setState] = useState<any>();

  const onFileChange = (event: any) => {
    setState({ selectedFile: event.target.files[0] });
  };

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

  return (
    <Layout>
      <Navbar />
      <UploadSection />
    </Layout>
  );
};

export default Upload;

import React, { useState } from "react";
import { uploadIPFS } from "./api/UploadIPFS";
import Navbar from "../components/Navbar";
import UploadSection from "../components/UploadSection";
import Layout from "../components/Layout";

const Upload = () => {
  return (
    <Layout>
      <Navbar />
      <UploadSection />
    </Layout>
  );
};

export default Upload;

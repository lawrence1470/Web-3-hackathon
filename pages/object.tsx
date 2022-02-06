import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ObjectSection from "../components/ObjectSection";

const Object = () => {
  return (
    <Layout>
      <Navbar />
      <ObjectSection />
      <div>Object section</div>
    </Layout>
  );
};

export default Object;

import React from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const Wallet = () => {
  const { authenticate, isAuthenticated, isInitializing } = useMoralis();

  if (isInitializing) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

  return (
    <Layout>
      <Navbar />
      <span>Wallet balance goes here</span>
    </Layout>
  );
};

export default Wallet;

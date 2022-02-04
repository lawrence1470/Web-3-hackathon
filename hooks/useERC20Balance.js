import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const useERC20Balance = (params) => {
  const { account } = useMoralisWeb3Api();
  const { isInitialized, chainId, account: walletAddress, user } = useMoralis();
  const [assets, setAssets] = useState();
  useEffect(() => {
    if (isInitialized) {
      console.log("here");
      fetchERC20Balance().then((balance) => {
        setAssets(balance);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, chainId, walletAddress]);
  console.log(walletAddress, "wallet", chainId, isInitialized);
  const fetchERC20Balance = async () => {
    return await account
      .getTokenBalances({
        address: walletAddress,
        chain: params?.chain || chainId,
      })
      .then((result) => {
        return result;
      });
  };

  return { fetchERC20Balance, assets };
};

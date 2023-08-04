import React from "react";
import {NetworkConfig, networkConfig, SEPOLIA_CHAIN_ID} from "./common";
import {useWeb3React} from "@web3-react/core";
import {Typography} from "@mui/material";
import {useContract} from "./contractHooks";
import StablecoinInsuranceManagerJson from "./generated/abi/StablecoinInsuranceManager.json";
import {StablecoinInsuranceManager} from "./generated/contract-types";
import {JsonRpcProvider} from "@ethersproject/providers";


export const PolicyManagerContext = React.createContext<{
    chainId: typeof SEPOLIA_CHAIN_ID,
    account: string,
    provider: JsonRpcProvider,
    policyManager: StablecoinInsuranceManager,
    networkConfig: NetworkConfig
}>({
    chainId: SEPOLIA_CHAIN_ID,
    account: "",
    provider: new JsonRpcProvider(""),
    policyManager: {} as StablecoinInsuranceManager,
    networkConfig: {} as NetworkConfig,
})

export const PolicyManagerProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const {chainId, account, provider} = useWeb3React()
    console.log("PolicyManager chainId " + chainId)
    if (chainId !== SEPOLIA_CHAIN_ID) { //TODO Support other changes
        return <Typography>Please change your network to SEPOLIA_CHAIN_ID</Typography>
    }
    if (!account) {
        return <Typography>Please connect to MetaMask by clicking the connect button</Typography>
    }
    if (!provider) {
        return <Typography>Provider not found</Typography>
    }

    const policyManager = useContract(networkConfig[chainId].policyManager, StablecoinInsuranceManagerJson.abi) as unknown as StablecoinInsuranceManager;

    return <PolicyManagerContext.Provider value={{
        chainId,
        account,
        provider,
        policyManager: policyManager,
        networkConfig: networkConfig[chainId]
    }}>
        {children}
    </PolicyManagerContext.Provider>
}
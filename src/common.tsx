import React, {ReactNode, Suspense} from "react";
import {Box, SvgIcon, Typography, TypographyProps} from "@mui/material";

export const MUMBAI_CHAIN_ID = 80001
export const SEPOLIA_CHAIN_ID = 11155111
export const SHORT_POLL_INTERVAL = 2000

export enum ExpectedReturnTypes {
    Bytes = 0,
    String
}

export type NetworkConfig = {
    policyManager: "0x845a129aDfF81761547114E66Ae1698ec6837e63",
    getScannerAddressUrl: (address: string) => string,
    getScannerTxUrl: (address: string) => string,
}

// This was pulled from the hardhat starter kit's network-config.js file at the repo root
export const networkConfig: {
    [key: number]: NetworkConfig
} = {
    [SEPOLIA_CHAIN_ID]: {
        policyManager: "0x845a129aDfF81761547114E66Ae1698ec6837e63",
        getScannerAddressUrl: (address: string) => `https://sepolia.etherscan.io/address/${address}`,
        getScannerTxUrl: (txHash: string) => `https://sepolia.etherscan.io/tx/${txHash}`,
    },
}

export const DefaultSuspense: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <Suspense fallback={<div>Loading...</div>}>
        {children}
    </Suspense>
}
//
// export const TypographyWithIcon: React.FC<{
//     height?: number,
//     width?: number,
//     includeSuffix?: boolean
//     children: ReactNode
//     typographyStyle?: React.CSSProperties
//     typographyProps?: TypographyProps
// } & TypographyProps> = ({
//                             height = 25,
//                             width = 25,
//                             includeSuffix = true,
//                             children,
//                             typographyStyle,
//                             typographyProps
//                         }) => {
//     return <Box style={{"display": "flex", "alignItems": "center"}}>
//         <SvgIcon component={LinkTokenIcon} viewBox="0 0 800 800" height={height} width={width}
//                  style={{marginRight: 4, ...typographyStyle}}/>
//         <Typography {...typographyProps} style={{...typographyStyle, marginRight: 4}}>{children}</Typography>
//         {includeSuffix &&
//             <Typography {...typographyProps} style={{...typographyStyle, marginRight: 4}}>LINK</Typography>}
//     </Box>
// }

export const blockTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleString();
}


//Return the current time in seconds since the epoch minus n days, in UTC
export const nDaysAgoUTCInSeconds = (n: number) => {
    const now = Math.floor(Date.now() / 1000)

    return now - (n * 24 * 60 * 60)
}

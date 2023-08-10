/*
App is where the router lives and where the application starts
 */
import {Container, createTheme, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import React, {FC, ReactElement, ReactNode, SVGProps} from 'react';
import {initializeConnector, useWeb3React, Web3ReactHooks, Web3ReactProvider} from "@web3-react/core";
import {MetaMask} from "@web3-react/metamask";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./Navbar";
import {DefaultSuspense, SEPOLIA_CHAIN_ID} from "./common";
import {Home} from "./Home";
import {CreatePolicy} from "./CreatePolicy";
import {Dashboard} from "./Dashboard";
import USDCIcon from "./assets/icons/usdc.svg";
import DAIIcon from "./assets/icons/dai-logo.svg";
import USDTIcon from "./assets/icons/usdt.svg";

export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({actions}))
const connectors: [MetaMask, Web3ReactHooks][] = [
    [metaMask, metaMaskHooks],
]
type Stablecoin = {
    address: string,
    symbol: string,
    name: string,
    icon: (height: number, width: number) => ReactElement,
}

// TODO: Make this a part of the theme
export const OPTIMISM_RED = "#FF0420";

export const stablecoins: {[key: string]: Stablecoin} = {
    "0x222e9a549274B796715a4af8a9BB96bC6EFCd13A": {address: "0x222e9a549274B796715a4af8a9BB96bC6EFCd13A", symbol: "USDC", name: "US Dollar Coin", icon: (height, width) => <USDCIcon height={height} width={width}/>},
    "0xECF58c7323C56290157675777d30A1E223db451a": {address: "0xECF58c7323C56290157675777d30A1E223db451a", symbol: "USDT", name: "Tether USD", icon: (height, width) => <USDTIcon height={height} width={width}/>},
    "0xC3c8f830DedF94D185250bA5ac348aC1455a0520": {address: "0xC3c8f830DedF94D185250bA5ac348aC1455a0520", symbol: "DAI", name: "I don't know what DAI stands for", icon: (height, width) => <DAIIcon height={height} width={width}/>},
    // GUSD: {address: "0x00000", symbol: "GUSD", name: "Gemini USD", icon: GUSDIcon},
    // USDP: {address: "0x00000", symbol: "USDP", name: "Paxos USD", icon: USDPIcon},
    // TUSD: {address: "0x00000", symbol: "TUSD", name: "True USD", icon: TUSDIcon},
    // USDD: {address: "0x00000", symbol: "USDD", name: "Decentralized USD", icon: USDDIcon},
    // BUSD: {address: "0x00000", symbol: "BUSD", name: "Binance USD", icon: BUSDIcon},
    // SEUR: {address: "0x00000", symbol: "SEUR", name: "Statis EUR", icon: SEURIcon},
}
const symbolToStablecoin: {[key: string]: Stablecoin} =  {
    "USDC": stablecoins["0x222e9a549274B796715a4af8a9BB96bC6EFCd13A"],
    "USDT": stablecoins["0xECF58c7323C56290157675777d30A1E223db451a"],
    "DAI": stablecoins["0xC3c8f830DedF94D185250bA5ac348aC1455a0520"]
}

const RequireConnection: React.FC<{ children: ReactNode }> = ({children}) => {
    const {isActive, chainId, account, connector} = useWeb3React()
    if (!isActive) {
        return <Typography>Please connect to MetaMask by clicking the connect button</Typography>
    } else if (chainId !== SEPOLIA_CHAIN_ID) {
        return <Typography>Please change your network to Sepolia</Typography>
    } else if (!account) {
        return <Typography>Account not found</Typography>
    }

    return <>{children}</>
}

function App() {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#09FBD3',
            },
            secondary: {
                main: '#B76CFD',
            },
            background: {
                default: '#000',
            },
        },
        spacing: 8
    })


    return (
        <ThemeProvider theme={theme}>
            <Web3ReactProvider connectors={connectors}>
                <ToastContainer
                    position={"bottom-right"}
                    theme={"dark"}
                    autoClose={3000}
                    pauseOnFocusLoss={false}/>
                <CssBaseline enableColorScheme/>
                <Container>
                    <BrowserRouter>
                        <NavBar/>
                        {/*<RequireConnection>*/}
                        {/*<PolicyManagerProvider>*/}
                            <Routes>
                                <Route path="/" element={<DefaultSuspense><Home/></DefaultSuspense>}/>
                                <Route path="/create-policy"
                                       element={<DefaultSuspense><CreatePolicy/></DefaultSuspense>}/>
                                <Route path="/provide-collateral"
                                       element={<DefaultSuspense><CreatePolicy/></DefaultSuspense>}/>
                                <Route path="/dashboard"
                                       element={<DefaultSuspense><Dashboard/></DefaultSuspense>}/>
                            </Routes>
                        {/*</PolicyManagerProvider>*/}
                        {/*</RequireConnection>*/}
                    </BrowserRouter>
                </Container>
            </Web3ReactProvider>
        </ThemeProvider>)
}

export default App;
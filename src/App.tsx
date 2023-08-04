/*
App is where the router lives and where the application starts
 */
import {Container, createTheme, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import React, {ReactNode} from 'react';
import {initializeConnector, useWeb3React, Web3ReactHooks, Web3ReactProvider} from "@web3-react/core";
import {MetaMask} from "@web3-react/metamask";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./Navbar";
import {DefaultSuspense, MUMBAI_CHAIN_ID, SEPOLIA_CHAIN_ID} from "./common";
import {Home} from "./Home";
import {CreatePolicy} from "./CreatePolicy";
import {Dashboard} from "./Dashboard";
import {PolicyManagerProvider} from "./PolicyManagerProvider";


declare module '@mui/material/styles' {
    interface Palette {
    }

    interface PaletteOptions {
    }
}

export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({actions}))
const connectors: [MetaMask, Web3ReactHooks][] = [
    [metaMask, metaMaskHooks],
]

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
                main: '#ccfff5',
            },
            secondary: {
                main: '#e6cdfe',
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
                        <RequireConnection>
                            <PolicyManagerProvider>
                                <Routes>
                                    <Route path="/" element={<DefaultSuspense><Home/></DefaultSuspense>}/>
                                    <Route path="/create"
                                           element={<DefaultSuspense><CreatePolicy/></DefaultSuspense>}/>
                                    {/*<Route path="/view/:policyId"*/}
                                    {/*       element={<DefaultSuspense><CreatePolicy/></DefaultSuspense>}/>*/}
                                    <Route path="/dashboard"
                                           element={<DefaultSuspense><Dashboard/></DefaultSuspense>}/>
                                </Routes>
                            </PolicyManagerProvider>
                        </RequireConnection>
                    </BrowserRouter>
                </Container>
            </Web3ReactProvider>
        </ThemeProvider>)
}

export default App;
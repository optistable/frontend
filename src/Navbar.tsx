/*
NavBar appears at the top of every page and contains the controls used to connect to MetaMask
 */
import {AppBar, Button, IconButton, Toolbar, Tooltip} from "@mui/material";
import Logo from "./assets/icons/logo.svg";
import React, {useEffect} from "react";
import {useWeb3React} from "@web3-react/core";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {Link} from "react-router-dom";
import {MUMBAI_CHAIN_ID, SEPOLIA_CHAIN_ID} from "./common";
import {fallbackToJazzicon, jazziconImageString} from "./util";

export const NavBar: React.FC = ({}) => {
    const {isActive, chainId, account, connector,} = useWeb3React()
    const [connectIcon, setConnectIcon] = React.useState(<AccountBalanceWalletIcon/>)
    const [tooltipText, setTooltipText] = React.useState("")

    console.log("isActive", isActive, "chainId", chainId, "account", account)
    console.log(connector)
    const connectWallet = async () => {
        try {
            console.log("Connecting to wallet...")
            setTooltipText("")
            if (chainId !== SEPOLIA_CHAIN_ID) {
                console.log(chainId)
                setTooltipText("Please switch to Sepolia or Optimism Goerli in Metamask")
            }
            await connector.activate()
        } catch (err: any) {
            setTooltipText(err.message)
        }
    }

    const disconnectWallet = async () => {
        try {
            console.log("disconnecting wallet")
            if (isActive) {

                if (connector?.deactivate) {
                    console.log("deactivating connector")
                    void connector.deactivate()
                } else {
                    console.log("resetting state")
                    void connector.resetState()
                }
            }
        } catch (err: any) {
            setTooltipText(err.message)
        }
    }

    useEffect(() => {
        const connect = async () => {
            if (!isActive) {
                if (connector.connectEagerly) {
                    await connector?.connectEagerly()
                }
            }
        }
        connect()

    }, [])

    return (<AppBar position={"static"}>
        <Toolbar>
            <Link to={"/"} style={{display: "flex", alignItems: "center"}}>
                <IconButton><Logo style={{height: 40}}/></IconButton>
            </Link>
            <Link to={"/sell"}>
                <Button>
                    New Policy
                </Button>
            </Link>

            <Link to={"/dashboard"}>
                <Button>
                    Dashboard
                </Button>
            </Link>
            {account &&
                <img style={{maxWidth: 40, marginLeft: "auto"}}
                     src={jazziconImageString(account)}
                     onError={(e) => fallbackToJazzicon(e, account || "")}/>}
            <Tooltip title={tooltipText} placement={"bottom"} disableHoverListener={tooltipText === ""}>
                {isActive ?
                    <Button variant={"contained"} color={"secondary"}
                            sx={{marginLeft: 1, textTransform: "none"}}
                            onClick={disconnectWallet}
                            startIcon={connectIcon}>
                        {account?.slice(0, 6) + "..." + account?.slice(account.length - 4, account.length)}
                    </Button> : <Button variant={"contained"}  style={{marginLeft: "auto"}}
                                        onClick={connectWallet}
                                        startIcon={connectIcon}>
                        Connect
                    </Button>
                }
            </Tooltip>
        </Toolbar>
    </AppBar>)
}
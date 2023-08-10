import {Box, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import React from "react";
import {OPTIMISM_RED, stablecoins} from "./App";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import {AddressLike} from "ethers";
import {generatePolicy, getRandomBigInt} from "./generators";
import USDCIcon from "./assets/icons/usdc.svg"
import USDTIcon from "./assets/icons/usdt.svg"
import DAIIcon from "./assets/icons/dai-logo.svg"

export type Policy = {
    address: AddressLike,
    insuredTokenAddress: AddressLike,
    collateralTokenAddress: AddressLike,
    insuredAmount: bigint,
    collateralAmount: bigint
}

export type OracleCommittee = {
    startingBlock: bigint,
    endingBlock: bigint,
    providers: AddressLike[],
    minProvidersForQuorum: number,
    providersReportingDepegs: number,
}

export type DataProvider = {
    symbol: string,
    address: AddressLike,
    lastBlockNum: bigint,
    depegTolerance: bigint,
    minBlocksToSwitchStatus: number,
    switchStatusCounter: number, //the current number of sequential depegs
    onChain: boolean,
    decimals: number,
    stableValue: bigint,
    lastObservation: bigint,
    oracleType: string //this is actually bytes32
}


export const Home: React.FC = () => {

    return (<Stack spacing={2} marginTop={2}>
        <Container>
            <Box display={"flex"} justifyContent={"center"}>
                <Typography variant={"h3"} sx={{color: OPTIMISM_RED}} textTransform={"uppercase"} textAlign={"center"}>
                    OP
                </Typography>
                <Typography variant={"h3"} textTransform={"uppercase"}>
                    TISTABLE
                </Typography>
            </Box>
            <Typography variant={"h6"} textAlign={"center"} textTransform={"uppercase"}>PROTECT YOUR
                STABLECOINS</Typography>
        </Container>

        <Grid container spacing={2}>
            <Grid item container justifyContent={"center"} xs={12} spacing={8}>
                <Grid item xs={6} md={4}>
                    <Card sx={{padding: 2}}>
                        <Stack display={"flex"} justifyItems={"center"} spacing={1}>
                            <Typography variant={"h5"} textAlign={"center"} textTransform={"uppercase"}>
                                TOTAL INSURED
                            </Typography>
                            <Typography variant={"h3"} textAlign={"center"}>
                                ${getRandomBigInt(7).toLocaleString()}
                            </Typography>
                            <Stack spacing={1}>
                                    <Typography variant={"h5"} textAlign={"center"}>
                                        <USDCIcon height={28} style={{marginRight: 8}}/>
                                        ${getRandomBigInt(7).toLocaleString()}
                                    </Typography>
                                    <Typography variant={"h5"} textAlign={"center"}>
                                        <USDTIcon height={28} style={{marginRight: 8}}/>
                                        ${getRandomBigInt(7).toLocaleString()}
                                    </Typography>
                                    <Typography variant={"h5"} textAlign={"center"}>
                                        <DAIIcon height={28} style={{marginRight: 8}}/>
                                        ${getRandomBigInt(7).toLocaleString()}
                                    </Typography>
                            </Stack>
                            {/*<Container sx={{height: 32}}>*/}
                            {/*    <Container sx={{backgroundColor: "red", height: "100%"}}>*/}

                            {/*    </Container>*/}
                            {/*</Container>s*/}
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card sx={{padding: 2}}>
                        <Stack display={"flex"} justifyItems={"center"} spacing={1}>
                            <Typography variant={"h5"} textAlign={"center"} textTransform={"uppercase"}>
                                TOTAL INSURED
                            </Typography>
                            <Typography variant={"h3"} textAlign={"center"}>
                                ${getRandomBigInt(7).toLocaleString()}
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant={"h5"} textAlign={"center"}>
                                    <USDCIcon height={28} style={{marginRight: 8}}/>
                                    ${getRandomBigInt(7).toLocaleString()}
                                </Typography>
                                <Typography variant={"h5"} textAlign={"center"}>
                                    <USDTIcon height={28} style={{marginRight: 8}}/>
                                    ${getRandomBigInt(7).toLocaleString()}
                                </Typography>
                                <Typography variant={"h5"} textAlign={"center"}>
                                    <DAIIcon height={28} style={{marginRight: 8}}/>
                                    ${getRandomBigInt(7).toLocaleString()}
                                </Typography>
                            </Stack>
                            {/*<Container sx={{height: 32}}>*/}
                            {/*    <Container sx={{backgroundColor: "red", height: "100%"}}>*/}

                            {/*    </Container>*/}
                            {/*</Container>s*/}
                        </Stack>
                    </Card>
                </Grid>

            </Grid>
        </Grid>


        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"}>
                    Active Policies
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"}>
                    Upcoming Policies
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
            <Grid item xs={4}>
                <PolicyCard policy={generatePolicy()}/>
            </Grid>
        </Grid>
        <Stack>

            {/*<Typography variant={"h4"}>Active policies</Typography>*/}
            {/*<Table>*/}
            {/*    <TableHead>*/}
            {/*        <TableRow>*/}
            {/*            <TableCell>Insured</TableCell>*/}
            {/*            <TableCell>Collateral</TableCell>*/}
            {/*            <TableCell>Started</TableCell>*/}
            {/*            <TableCell>Ends</TableCell>*/}
            {/*            <TableCell>Price</TableCell>*/}
            {/*        </TableRow>*/}
            {/*    </TableHead>*/}
            {/*    <TableBody>*/}

            {/*    </TableBody>*/}
            {/*</Table>*/}
        </Stack>
    </Stack>)
}

const PolicyCard: React.FC<{ policy: Policy }> = ({policy}) => {
    return <Card key={policy.address.toString()} sx={{borderRadius: 4}}>
        <CardContent>
            <Stack spacing={1}>
                <Grid container item xs={12}>
                    <Grid item container xs={5} height={"80"} justifyContent={"center"}>
                        {stablecoins[policy.insuredTokenAddress.toString()].icon(80, 80)}
                    </Grid>
                    <Grid item container xs={2} height={"80"} alignItems={"center"}>
                        <CompareArrowsIcon sx={{width: "100%", height: 80}}/>
                    </Grid>
                    <Grid item container xs={5} height={"80"} justifyContent={"center"}>
                        {stablecoins[policy.insuredTokenAddress.toString()].icon(80, 80)}
                    </Grid>
                </Grid>
                <Container>
                    <Typography variant={"h4"} textAlign={"center"}>
                        {`$${policy.insuredAmount.toLocaleString()}`}
                    </Typography>
                    <Typography variant={"h5"} textAlign={"center"}>
                        {`insured`}
                    </Typography>
                </Container>
            </Stack>
        </CardContent>
    </Card>
}
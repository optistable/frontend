import {Box, Card, Container, Grid, Stack, Typography} from "@mui/material";
import React from "react";
import {OPTIMISM_RED} from "./App";

const TitleCard: React.FC = () => (<Container>

</Container>)
export const Home: React.FC = () => {

    return (<>
        <Stack marginTop={2}>
            <Box display={"flex"} justifyContent={"center"}>
                <Typography variant={"h3"} sx={{color: OPTIMISM_RED}} textTransform={"uppercase"}>
                    OP
                </Typography>
                <Typography variant={"h3"} textTransform={"uppercase"}>
                    TISTABLE
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} textTransform={"uppercase"}>
                <Typography variant={"h6"}>PROTECT YOUR STABLECOINS</Typography>
            </Box>
        </Stack>


        <Grid container spacing={2}>
            <Grid item container justifyContent={"center"} xs={12} spacing={8}>
                <Grid item xs={6} md={4}>
                    <Card>
                        <Stack display={"flex"} justifyItems={"center"} spacing={1}>
                            <Typography variant={"h6"} textAlign={"center"} textTransform={"uppercase"}>
                                TOTAL INSURED
                            </Typography>
                            <Container sx={{height: 48}}>
                                <Container sx={{backgroundColor: "red", height: "100%"}}>

                                </Container>
                            </Container>s
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Card>
                        Something
                    </Card>
                </Grid>

            </Grid>
        </Grid>
    </>)
}
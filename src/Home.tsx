import {Box, Grid, Stack, Typography} from "@mui/material";
import React from "react";
import Logo from "./assets/icons/logo.svg";

export const Home: React.FC = () => {

    return (<Stack spacing={2} marginTop={2}>
        <Box
            sx={{width: "100%", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <Logo style={{maxHeight: 150}}/>
        </Box>
        <Typography variant={"h4"}>Browse</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>

            </Grid>
        </Grid>
    </Stack>)
}
/*
The Owner Dashboard is where Sellers can view the performance of their integrations, manage their integrations,
and monitor their subscription balances (which is especially important in the submission because the contract
is not currently reserving funds for gas).
 */
import React, {useContext} from "react";
import {Stack} from "@mui/material";
import {PolicyManagerContext} from "./PolicyManagerProvider";


export const Dashboard: React.FC = () => {
    const {account, provider, policyManager, networkConfig} = useContext(PolicyManagerContext)

    return <Stack spacing={2}>
        TODO Dashboard for {account}
    </Stack>
}


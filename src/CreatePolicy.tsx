/*
The Sell page is where you can register a new Chainlink Functions based integration
 */
import React, {FC, SVGProps, useContext} from "react";
import {Box, Button, MenuItem, Paper, Select, Stack, SvgIcon, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {BigNumberish, ethers} from "ethers";
import {toast} from "react-toastify";
import PublishIcon from '@mui/icons-material/Publish';
import {PolicyManagerContext} from "./PolicyManagerProvider";
import {stablecoins} from "./App";

type FormValues = {
    insuredToken: ethers.AddressLike,
    insurerToken: ethers.AddressLike,
    policyManagerContract: ethers.AddressLike,
    premiumAmount: BigNumberish,
    insuredAmount: BigNumberish,
    policyTermInSeconds: BigNumberish,
    policyTermMultiplier: BigNumberish,
    depegTermInSeconds: BigNumberish,
    depegTermMultiplier: BigNumberish,
    // TODO Add field for depeg tolerance
    // policyStatus: 0 | 1 | 2 | 3 //TODO Convert to enum
}

const TokenMenuItem: React.FC<{ key: number, address: string, symbol: string, icon: FC<SVGProps<SVGSVGElement>> }> = ({
                                                                                                         key,
                                                                                                         address,
                                                                                                         symbol,
                                                                                                         icon
                                                                                                     }) => (
    <MenuItem key={key} value={address}>
        <Box style={{"display": "flex", "alignItems": "center"}}>
            <SvgIcon component={icon} viewBox="0 0 800 800"
                     style={{marginRight: 4, height: 20}}/>
            <Typography>{symbol}</Typography>
        </Box>
    </MenuItem>)


export const CreatePolicy: React.FC = () => {
    const {
        account,
        provider,
        networkConfig,
        policyManager,
        chainId
    } = useContext(PolicyManagerContext)
    const [showAdvanced, setShowAdvanced] = React.useState<boolean>(false);

    const {register, handleSubmit, getValues, setValue, watch, formState, control} = useForm<FormValues>({
        defaultValues: {
            insuredToken: "",
            insurerToken: "",
            policyManagerContract: policyManager.getAddress(),
            premiumAmount: 0,
            insuredAmount: 0,
            policyTermInSeconds: 0,
            depegTermInSeconds: 0
        }
    });


    const errors = formState.errors;

    const onSubmit = handleSubmit(async (data) => {
        const post = {
            ...data,
        }

        console.log("Final data for form: ", post);
        const registerTx = await policyManager.createPolicy(
            post.insuredToken,
            post.insurerToken,
            post.policyManagerContract,
            post.premiumAmount,
            post.insuredAmount,
            post.policyTermInSeconds,
            post.depegTermInSeconds
        )

        toast((<div>
            <Typography>Creating policy...</Typography>
            <a href={`${networkConfig.getScannerTxUrl(registerTx.hash)}`}>
                View transaction in scanner...
            </a>
        </div>))

        // const registerReceipt = await provider?.waitForTransaction(registerTx.hash, 1);
        // if (registerReceipt?.status === 0) {
        //     toast.error(<div>
        //         <Typography>Function registration failed</Typography>
        //         <a href={`${networkConfig.getScannerTxUrl(registerTx.hash)}`} target="_blank">
        //             View transaction in scanner for details...
        //         </a>
        //     </div>)
        // } else if (registerReceipt?.status === 1) {
        //     // TODO get the function id and load it into this message
        //     toast.success(<div>
        //         <Typography>Successfully registered new function</Typography>
        //         <a href={`${networkConfig.getScannerTxUrl(registerTx.hash)}`} target="_blank">
        //             View transaction in scanner for details...
        //         </a>
        //     </div>)
        // } else {
        //     toast.error("Received unknown status from contract interaction: " + registerReceipt?.status, {toastId: 1})
        // }
    });

    return (<Box width={{xs: "100%", sm: "80%", md: "70%", lg: "50%"}} sx={{marginTop: 2}} margin={"auto"}>
        <Typography variant={"h3"} sx={{padding: 2, textAlign: "center"}}>Create a new
            function</Typography>
        <form onSubmit={onSubmit}>
            <Stack spacing={2}>
                <Paper sx={{padding: 2}}>
                    <Stack spacing={2}>
                        <Typography variant={"h5"}>Presentation</Typography>
                        <TextField label={"Insured Token"}
                                   fullWidth
                                   {...register("insuredToken", {required: "name is required"})}
                                   error={!!errors.insuredToken}/>
                        <TextField label={"Collateral Token"}
                                   fullWidth
                                   {...register("insurerToken", {required: "description is required", maxLength: 100})}
                                   error={!!errors.insurerToken}
                                   multiline={true} minRows={5}/>
                        <TextField label={"Image URL"}
                                   fullWidth
                                   {...register("policyManagerContract")}
                                   type={"url"}
                                   error={!!errors.policyManagerContract}/>
                    </Stack>
                </Paper>
                <Paper sx={{padding: 2}}>
                    <Stack spacing={2}>
                        <Select label={"Insured token"}
                                labelId={"insuredToken-label"}
                                defaultValue={0}
                                {...register("insuredToken")}
                                error={!!errors.insuredToken}>
                            {Object.values(stablecoins).map((e, i) => (<></>
                                // <TokenMenuItem key={i} address={e.address} icon={e.icon} symbol={e.symbol}/>
                            ))}
                        </Select>
                        <Select label={"Collateral token"}
                                labelId={"insurerToken-label"}
                                defaultValue={0}
                                {...register("insurerToken")}
                                error={!!errors.insuredToken}>
                            {Object.values(stablecoins).map((e, i) => (<></>
                                // <TokenMenuItem key={i} address={e.address} icon={e.icon} symbol={e.symbol}/>
                            ))}
                        </Select>
                        {/*TODO add an inline USDC estimate to the right*/}
                        <TextField label={"Policy Manager"}
                                   id={"policy-manager-text"}
                                   error={!!errors.policyManagerContract}
                                   value={networkConfig.policyManager}
                                   {...register("policyManagerContract")}

                                   disabled
                        />
                        <TextField label={"Amount to insure"}
                                   id={"insuredAmount-text"}
                                   error={!!errors.insuredAmount}
                                   type={"number"}
                                   inputProps={{
                                       step: 1,
                                   }}
                                   {...register("insuredAmount")}

                        />

                        <TextField label={"Proposed premium"}
                                   id={"premiumAmount-text"}
                                   error={!!errors.premiumAmount}
                                   type={"number"}
                                   inputProps={{
                                       step: 1,
                                   }}
                                   {...register("premiumAmount")}

                        />
                        <TextField label={"Policy term"}
                                   id={"policyTermInSeconds-text"}
                                   error={!!errors.policyTermInSeconds}
                                   type={"number"}
                                   sx={{width: "70%"}}
                                   inputProps={{
                                       step: 1,
                                   }}
                                   {...register("policyTermInSeconds")}

                        />
                        <Select
                            label={"Multiplier"}
                            sx={{width: "70%"}}
                            defaultValue={60 * 60 * 24 * 7}
                            error={!!errors.policyTermMultiplier}
                            {...register("policyTermMultiplier")}

                        >
                            <MenuItem key={"hours"} value={60 * 60}></MenuItem>
                            <MenuItem key={"days"} value={60 * 60 * 24}></MenuItem>
                            <MenuItem key={"weeks"} value={60 * 60 * 24 * 7}></MenuItem>
                            <MenuItem key={"months"} value={60 * 60 * 24 * 30}></MenuItem>
                            <MenuItem key={"years"} value={60 * 60 * 24 * 7 * 52}></MenuItem>
                        </Select>

                        <TextField label={"Depeg term"}
                                   id={"depegTerm-text"}
                                   error={!!errors.depegTermInSeconds}
                                   type={"number"}
                                   sx={{width: "70%"}}
                                   inputProps={{
                                       step: 1,
                                   }}
                                   {...register("depegTermInSeconds")}

                        />
                        <Select
                            label={"Multiplier"}
                            sx={{width: "70%"}}
                            defaultValue={60 * 60 * 24 * 7}
                            error={!!errors.depegTermMultiplier}
                            {...register("depegTermMultiplier")}

                        >
                            <MenuItem key={"hours"} value={60 * 60}></MenuItem>
                            <MenuItem key={"days"} value={60 * 60 * 24}></MenuItem>
                            <MenuItem key={"weeks"} value={60 * 60 * 24 * 7}></MenuItem>
                            <MenuItem key={"months"} value={60 * 60 * 24 * 30}></MenuItem>
                            <MenuItem key={"years"} value={60 * 60 * 24 * 7 * 52}></MenuItem>
                        </Select>
                    </Stack>
                </Paper>

                {/*<Button startIcon={showAdvanced ? <ExpandLessIcon/> : <ExpandMoreIcon/>} color={"primary"}*/}
                {/*        variant={"outlined"} sx={{width: "100%"}}*/}
                {/*        onClick={() => setShowAdvanced(!showAdvanced)}>*/}
                {/*    {showAdvanced ? "Hide" : "Show"} advanced options</Button>*/}

                {/*<Button startIcon={<EditIcon/>} variant={"outlined"} color={"primary"} onClick={() => {*/}
                {/*    const example = getRandomExample(chainId)*/}
                {/*    startTransition(() => {*/}
                {/*        setValue("name", example.name)*/}
                {/*        setValue("description", example.description)*/}
                {/*        setValue("imageUrl", example.imageUrl)*/}
                {/*        setValue("source", example.source)*/}
                {/*        setValue("category", example.category)*/}
                {/*        setValue("fee", example.fee)*/}
                {/*        setValue("expectedReturnType", example.expectedReturnType)*/}
                {/*        setValue("expectedArgs", example.expectedArgs)*/}
                {/*        setValue("suggestedGasLimit", example.suggestedGasLimit)*/}
                {/*        setValue("subscriptionId", example.subscriptionId)*/}
                {/*        setValue("initialDeposit", example.initialDeposit)*/}
                {/*    })*/}
                {/*}}>*/}
                {/*    Pre-fill Example*/}
                {/*</Button>*/}
                <Button type={"submit"} startIcon={<PublishIcon/>} variant={"contained"}
                        color={"primary"}>Submit</Button>
            </Stack>
        </form>
    </Box>)
}


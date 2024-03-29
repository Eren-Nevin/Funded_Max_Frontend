import axios from "axios";
import { useState, useEffect, forwardRef } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {
    Grid,
    Button,
    Snackbar,
    Checkbox,
    TextField,
    Typography,
    FormControlLabel,
} from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {

    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorAlert, setErrorAlert] = useState('')
    const [open, setOpen] = useState(false)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const getToken = async () => {
        try {
            const url = `https://fundedmax.org:5001/api/v1/Authentication/Login?login=${username}&password=${password}`
            const rawRes = await fetch(url)
            console.log(rawRes)
            if (rawRes.status === 200) {
                const res = await rawRes.json()
                console.log(res)
                localStorage.setItem('access-token', res.data)
                if (localStorage.getItem('access-token')) {
                    router.push(`/profile?login=${username}`)
                }
            }
        } catch (err) {
            console.error(err)
            setOpen(true);
            setErrorAlert('Username or Password was incorrect!')
        }
        // await axios.get('http://fundedmax.org:5001/api/v1/Authentication/Login').then((res) => {
        //     console.log("res\n", res)
        //     if (res.status === 200) {
        //         localStorage.setItem('access-token', res.data)
        //     }
        // }).then(function(push) {
        //     if (localStorage.getItem('access-token')) {
        //         router.push(`/profile?login=${username}`)
        //     }
        // }).catch((err) => {
        //     console.log(err);
        //     setOpen(true);
        //     setErrorAlert('Username or Password was incorrect!')
        // })
    }

    return (
        <>
            <Head>
                <title>Funded Max</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid
                display="flex"
                alignItems='center'
                justifyContent='center'
                sx={{ py: 2.5 }}
            >
                <Grid
                    container
                    item
                    direction="column"
                    sx={{ bgcolor: "background.paper", px: 10, py: 5, minWidth: '600px' }}
                    xs='auto'
                >
                    <form action="">
                        <Grid
                            display="flex"
                            alignItems='center'
                            justifyContent='center'

                        >
                            <img src="/FundedMax Logo - standard version.png" alt="logo" width='75px' />
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            sx={{ my: 1 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{ color: "black", my: 1 }}
                            >
                                Login to the site
                            </Typography>
                            <TextField
                                label="Username"
                                variant="standard"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ my: 1 }}
                            />
                            <TextField
                                label="Password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ my: 1 }}
                            />
                        </Grid>
                        {/* <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Grid>
                                <FormControlLabel
                                    label="Remember me"
                                    sx={{ color: "gray" }}
                                    control={<Checkbox checked={checked} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setChecked(event.target.checked)}} />}
                                />
                            </Grid>
                            <Grid>
                                <Button sx={{ color: "gray" }}>
                                    Forgot your password?
                                </Button>
                            </Grid>
                        </Grid> */}
                        <Grid
                            container
                            direction="column"
                            display="flex"
                            alignItems='center'
                            justifyContent='center'
                            sx={{ my: 1 }}
                        >
                            <Button
                                variant="contained"
                                disabled={!username || !password}
                                onClick={getToken}
                                sx={{ my: 1, width: "50%" }}
                            >
                                Login to the site
                            </Button>
                            <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                    {errorAlert}
                                </Alert>
                            </Snackbar>
                            <Button sx={{ my: 1, width: "50%" }}>
                                <Link style={{ color: "gray", textDecoration: 'none' }} href="/">
                                    Back To The Site
                                </Link>
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default Login

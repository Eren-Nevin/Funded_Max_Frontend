import { useState } from "react"
import Head from 'next/head'
import Link from 'next/link'
import {
    Grid,
    Button,
    Checkbox,
    TextField,
    Typography,
    FormControlLabel,
} from "@mui/material";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(true)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

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
                    sx={{ bgcolor: "background.paper", px: 10, py: 5 }}
                    xs='auto'
                >
                    <form action="">
                        <Grid
                            display="flex"
                            alignItems='center'
                            justifyContent='center'
                            
                        >
                            <img src="/FundedMax Logo - standard version.png" alt="logo" width='75px'/>
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
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                        >
                            <Grid>
                                <FormControlLabel
                                    label="Remember me"
                                    sx={{ color: "gray" }}
                                    control={<Checkbox checked={checked} onChange={handleChange} />}
                                />
                            </Grid>
                            <Grid>
                                <Button sx={{ color: "gray" }}>
                                    Forgot your password?
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            display="flex"
                            alignItems='center'
                            justifyContent='center'
                            sx={{ my: 1 }}
                        >
                            <Button variant="contained" sx={{ my: 1, width: "50%" }}>
                                <Link style={{ color: "white", textDecoration: 'none' }} href={`/profile?login=${username}`}>
                                    Login to the site
                                </Link>
                            </Button>
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

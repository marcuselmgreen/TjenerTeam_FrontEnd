import React from 'react';
import {Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {useForm} from '@fuse/hooks';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import Image from './tjenerteam2.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${Image})`,
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
}));

function Login()
{
    const classes = useStyles();

    const {form, handleChange, resetForm} = useForm({
        email   : '',
        password: '',
        remember: true
    });

    function isFormValid()
    {
        return (
            form.email.length > 0 &&
            form.password.length > 0
        );
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        resetForm();
    }

    return (
            <div style={{width: '100%'}} className={clsx(classes.root, "flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0")}>


                <div className="flex flex-col flex-grow-0 items-cent er text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">

                    {/*<FuseAnimate animation="transition.expandIn">*/}
                        {/*<img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo"/>*/}
                    {/*</FuseAnimate>*/}

                    <FuseAnimate animation="transition.slideUpIn" delay={300}>
                        <Typography variant="h3" color="inherit" className="font-light">
                            Velkommen til Tjenerteamet
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate delay={400}>
                        <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit
                            facilisis facilisis.
                        </Typography>
                    </FuseAnimate>
                </div>

                <FuseAnimate animation={{translateX: [0, '100%']}}>

                    <Card className="w-full max-w-640 mx-auto m-16 md:m-0" square>

                        <CardContent className="flex flex-col items-center p-32 md:p-128 md:pt-128 ">

                            <Typography variant="h6" className="md:w-full mb-32 ml-288">TEST</Typography>

                            <form
                                name="loginForm"
                                noValidate
                                className="flex flex-col justify-center w-full"
                                onSubmit={handleSubmit}
                            >

                                <TextField
                                    className="mb-16"
                                    label="Email"
                                    autoFocus
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <TextField
                                    className="mb-16"
                                    label="Kodeord"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <div className="flex items-center justify-between">

                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="remember"
                                                    checked={form.remember}
                                                    onChange={handleChange}/>
                                            }
                                            label="Husk mig"
                                        />
                                    </FormControl>

                                    <Link className="font-medium" to="/pages/auth/forgot-password-2">
                                        Glemt kodeord?
                                    </Link>
                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={!isFormValid()}
                                >
                                    LOGIN
                                </Button>

                            </form>

                            <div className="my-24 flex items-center justify-center">
                                <Divider className="w-32"/>
                                <span className="mx-8 font-bold">ELLER</span>
                                <Divider className="w-32"/>
                            </div>

                            <Button variant="contained" color="secondary" size="small"
                                    className="normal-case w-192 mb-8">
                                Log ind med Google
                            </Button>

                            <Button variant="contained" color="primary" size="small"
                                    className="normal-case w-192">
                                Log ind med Facebook
                            </Button>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Har du ikke en profil endnu?</span>
                                <Link className="font-medium" to="/pages/auth/register-2">Opret ny profil </Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
    );
}

export default Login;


import React, {Component} from 'react';
import {
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControl,
    FormControlLabel,
    TextField,
    Typography
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Image from './tjenerteam2.jpg'
import * as user from '../../auth/store/actions/login.actions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: false
        }
    }


    dd = (e) => {
        let tempState = {...this.state.corporation};
        tempState[e.target.name] = e.target.value;
        this.setState(tempState);
    };

    isFormValid = () => {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    };

    handleSubmit = () => {
        const {email, password, remember} = this.state;
        this.props.actions.submitLogin(email, password, remember);
    };

    render() {
        const {email, password, remember} = this.state;

        if (this.props.success) return <Redirect to="/homeCorporation"/>;

        return (
            <div style={{
                width: '100%',
                backgroundImage: "url(" + Image + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">


                <div
                    className="flex flex-col flex-grow-0 items-cent er text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,
                            vel
                            convallis elit fermentum pellentesque. Sed mollis velit
                            facilisis facilisis.
                        </Typography>
                    </FuseAnimate>
                </div>

                <FuseAnimate animation={{translateX: [0, '100%']}}>

                    <Card className="w-full max-w-640 mx-auto m-16 md:m-0" square>

                        <CardContent className="flex flex-col items-center p-32 md:p-128 md:pt-128 ">

                            <Typography variant="h6" className="md:w-full mb-32 ml-288">Log ind</Typography>

                            <TextField
                                className="mb-16"
                                label="Email"
                                autoFocus
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.dd}
                                variant="outlined"
                                required
                                fullWidth
                            />

                            <TextField
                                className="mb-16"
                                label="Kodeord"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.dd}
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
                                                value={remember}
                                                onChange={this.dd}/>
                                        }
                                        label="Husk mig"
                                    />
                                </FormControl>

                                {/*    <Link className="font-medium" to="/pages/auth/forgot-password-2">*/}
                                {/*        Glemt kodeord?*/}
                                {/*    </Link>*/}
                            </div>

                            <Button
                                variant="contained"
                                color="primary"
                                className="w-full mx-auto mt-16"
                                aria-label="LOG IN"
                                disabled={!this.isFormValid}
                                onClick={this.handleSubmit}
                            >
                                LOGIN
                            </Button>
                            {/*<div className="my-24 flex items-center justify-center">*/}
                            {/*    <Divider className="w-32"/>*/}
                            {/*    <span className="mx-8 font-bold">ELLER</span>*/}
                            {/*    <Divider className="w-32"/>*/}
                            {/*</div>*/}

                            {/*<Button variant="contained" color="secondary" size="small"*/}
                            {/*        className="normal-case w-192 mb-8">*/}
                            {/*    Log ind med Google*/}
                            {/*</Button>*/}

                            {/*<Button variant="contained" color="primary" size="small"*/}
                            {/*        className="normal-case w-192">*/}
                            {/*    Log ind med Facebook*/}
                            {/*</Button>*/}

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Har du ikke en profil endnu?</span>
                                <Link className="font-medium" to="/createCorporation">Opret ny profil </Link>
                            </div>

                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        success: state.auth.login.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            submitLogin: bindActionCreators(user.submitLogin, dispatch)
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(Login);


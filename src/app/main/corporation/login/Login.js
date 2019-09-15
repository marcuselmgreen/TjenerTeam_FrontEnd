import React, {Component} from 'react';
import FormValidator from "../../validator/FormValidator";
import {LoginFormValidator} from '../../validator/forms/LoginFormValidator';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {Link, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Image from '../../static/tjenerteam2.jpg'
import * as userActions from '../../../auth/store/actions/login.actions'
import * as bookingActions from '../booking/actions/Booking.actions'
import CircularProgress from "@material-ui/core/CircularProgress";
import AppHeader from "../toolbar/AppHeaderCorp";

class Login extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(LoginFormValidator);
        this.submitted = false;
        this.state = {
            email: '',
            password: '',
            remember: true,
            validation: this.validator.valid()
        }
    }


    onChange = (e) => {
        let tempState = {...this.state.corporation};
        tempState[e.target.name] = e.target.value;
        this.setState(tempState);
    };

    isFormValid = () => {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    };

    handleSubmit = () => {
        const validation = this.validator.validate(this.state);
        const tempState = {...this.state};
        tempState.validation = validation;

        this.submitted = true;
        if (validation.isValid) {
            const {email, password, remember} = this.state;
            this.props.actions.showSpinner();
            this.props.actions.submitLogin(email, password, remember);
            // this.props.actions.showFullCreateBookingPage();
        }
        this.setState({state: this.state});
    };

    render() {
        const {email, password} = this.state;

        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

        if (this.props.success) return <Redirect to="/homeCorporation"/>;
        return (
            <>
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Image + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <div
                        className="flex flex-col flex-grow-0 items-cent er text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
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
                                <p className="font-sans text-2xl mb-5 text-gray-800">Log ind</p>
                                <TextField
                                    className="mb-16"
                                    label="Email"
                                    autoFocus
                                    type="email"
                                    helperText={<span style={{color: 'red'}}>{validation.email.message}</span>}
                                    name="email"
                                    value={email}
                                    onChange={this.onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                                <TextField
                                    className="mb-16"
                                    label="Kodeord"
                                    type="password"
                                    helperText={<span style={{color: 'red'}}>{validation.password.message}</span>}
                                    name="password"
                                    value={password}
                                    onChange={this.onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                                {this.props.spinner ?

                                    <CircularProgress color="primary"/>

                                    :
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
                                }
                                <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                    <span className="font-medium">Har du ikke en profil endnu?</span>
                                    <Link className="font-medium" to="/createCorporation">Opret ny profil </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </FuseAnimate>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        success: state.auth.login.success,
        spinner: state.auth.login.spinner
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            showSpinner: bindActionCreators(userActions.setSpinner, dispatch),
            submitLogin: bindActionCreators(userActions.submitLogin, dispatch),
            showFullCreateBookingPage: bindActionCreators(bookingActions.showFullCreateBookingPage, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);


import React, {Component} from 'react';
import Image from "../../corporation/login/tjenerteam2.jpg";
import {Card, CardContent} from "@material-ui/core";
import './E_Login.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import * as employeeActions from "../../employee/actions/Employee.actions"
import * as GlobalPaths from '../../../GlobalPaths';

class ELogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    componentClicked = () => {
        console.log('clicked')
    };

    componentWillReceiveProps(prevProps) {
        if (prevProps.employeeExist !== this.props.employeeExist) {
            if(prevProps.employeeExist === true) {
                this.props.history.push(GlobalPaths.employeePage);
            } else {
                this.props.history.push(GlobalPaths.createEmployeePage)
            }
        }
    }

    responseFacebook = (response) => {
        this.props.actions.employeeLogin({fbToken: response.accessToken});
    };


    render() {

        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (<FacebookLogin
                appId="694838220979702"
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                render={renderProps => (
                    <button className="button" onClick={renderProps.onClick}>Fortsæt med facebook</button>
                )}/>)
        }

        return (
            <>
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Image + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                        <CardContent className="flex flex-col">
                            <h1 className="font-sans text-gray-800 pl-24 pr-24 mt-20 title">Log ind med facebook</h1>
                            <div className="wrapper">
                                <p className="font-sans text-gray-600 pl-40 pr-24 description">1. Gå til din indboks</p>
                                <p className="font-sans text-gray-600 pl-40 pr-24 description">2. Log ind med din
                                    facebook profil</p>
                                <p className="font-sans text-gray-600 pl-40 pr-24 description">3. Bekræft email
                                    adresse</p>
                            </div>
                            <span className="wrapper">{fbContent}</span>

                            <p className=" acceptText">Jeg har læst og accepterer <a>Politikken for beskyttelse af
                                personlige oplysninger</a></p>

                        </CardContent>
                    </Card>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        employeeExist: state.employees.employeeExist
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            employeeLogin: bindActionCreators(employeeActions.employeeLogin, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ELogin);

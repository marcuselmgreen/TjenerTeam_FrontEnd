import React, {Component} from 'react';
import Photo from "../../../static/tjenerTeam2.png";
import CorporationForm from "./CorporationForm";
import {idGenerator} from '../../../common/IdGenerator'
import FormValidator from "../../../validator/FormValidator";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {CorparationFormValidator} from "../../../validator/forms/CorporationFormValidator";
import * as corporationUser from "../actions/Corporation.actions";
import * as GlobalPaths from '../../../../GlobalPaths';
import authRoles from "../../../../auth/authRoles";
import {Card, CardContent} from "@material-ui/core";

class CreateCorporation extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(CorparationFormValidator);
        this.submitted = false;
        this.state = {
            currentView: 0,
            displayModal: false,
            corporation: {
                id: idGenerator(),
                name: "",
                cvr: "",
                address: "",
                zipCode: "",
                city: "",
                contactPerson: "",
                department: "",
                email: "",
                phoneNumber: "",
                billingEmail: "",
                ean: "",
                password: "",
                confirmPassword: "",
                gdpr: "",
                role: authRoles.corporation,
                validation: this.validator.valid()
            }
        }
    }

    plusChangeView = () => {
        this.setState({currentView: this.state.currentView + 1});
    };

    minusChangeView = () => {
        this.setState({currentView: this.state.currentView - 1});
    };

    changeHandler = (e) => {
        let tempState = {...this.state.corporation};
        tempState[e.target.name] = e.target.value;

        this.setState({corporation: tempState})

    };


    submitHandler = () => {
        const validation = this.validator.validate(this.state.corporation);
        const tempCorporation = {...this.state.corporation};
        tempCorporation.validation = validation;
        console.log(this.state.corporation);
        this.submitted = true;
        if (validation.isValid) {
            debugger;
            if(!this.props.loggedIn && this.props.bookings !== null) {
                this.props.actions.createCorporationAndBookings(this.state.corporation, this.props.bookings);
                this.props.history.push(GlobalPaths.login);
            } else {
                this.props.actions.createdCorporationUser(this.state.corporation);
                this.props.history.push(GlobalPaths.login);
            }
        }
        this.setState({state: this.state});
    };



    render() {
        const {
            name,
            cvr,
            address,
            zipCode,
            city,
            contactPerson,
            department,
            email,
            phoneNumber,
            billingEmail,
            ean,
            password,
            confirmPassword,
            gdpr,
            currentView
        } = this.state;

        let {loggedIn} = this.props;

        let validation = this.submitted ? this.validator.validate(this.state.corporation) : this.state.corporation.validation;

        return (
            <>
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                    <CardContent className="flex flex-col ">
                        <h1 className="font-sans text-4xl text-gray-800 pl-24 pr-24">Opret virksomhed</h1>
                        <p className="py-10 text-gray-800 font-sans text-lg pl-24 pr-24">Opret dig Gratis som bruger af TjenerTeamet - du betaler kun, hvis du booker personale.</p>
                        <CorporationForm
                            name={name}
                            cvr={cvr}
                            address={address}
                            zipCode={zipCode}
                            city={city}
                            contactPerson={contactPerson}
                            department={department}
                            email={email}
                            phoneNumber={phoneNumber}
                            billingEmail={billingEmail}
                            ean={ean}
                            password={password}
                            confirmPassword={confirmPassword}
                            gdpr={gdpr}
                            changeHandler={this.changeHandler}
                            plusChangeView={this.plusChangeView}
                            minusChangeView={this.minusChangeView}
                            submitHandler={this.submitHandler}
                            validation={validation}
                            currentView={currentView}
                            loggedIn={loggedIn}
                        />
                    </CardContent>
                </Card>
                </div>
            </>
        );
    }
}



function mapStateToProps(state) {
    return {
        corporation_user: state.corporation_user,
        loggedIn: state.auth.login.success,
        bookings: state.bookings.booking
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createdCorporationUser: bindActionCreators(corporationUser.createCorporationUser, dispatch),
            createCorporationAndBookings: bindActionCreators(corporationUser.createCorporationAndBooking, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CreateCorporation);


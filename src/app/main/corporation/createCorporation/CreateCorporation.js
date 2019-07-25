import React, {Component} from 'react';
import Photo from "../../static/tjenerTeam2.png";
import CorporationForm from "./CorporationForm";
import {idGenerator} from '../../common/IdGenerator'
import FormValidator from "../../validator/FormValidator";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {CorparationFormValidator} from "../../validator/forms/CorporationFormValidator";
import * as corporationUser from "../actions/Corporation.actions";
import * as GlobalPaths from '../../../GlobalPaths';
import authRoles from "../../../auth/authRoles";
import {Card, CardContent} from "@material-ui/core";
import Image from "../../login/tjenerteam2.jpg";

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

            this.props.actions.createdCorporationUser(this.state.corporation);
            this.props.history.push(GlobalPaths.login);
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
                <Card className="w-full max-w-2xl mx-auto m-16 md:m-0" square>
                    <CardContent className="flex flex-col items-center p-32 md:p-128 md:pt-128 ">
                        <h1 className="font-sans text-4xl text-gray-800">Opret virksomhed</h1>
                        <p className="py-10 text-gray-800 font-sans text-lg">Opret dig Gratis som bruger af
                            TjenerTeamet - du betaler kun, hvis du booker personale.
                        </p>
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
                            submitHandler={this.submitHandler}
                            changeHandler={this.changeHandler}
                            plusChangeView={this.plusChangeView}
                            minusChangeView={this.minusChangeView}
                            validation={validation}
                            currentView={currentView}
                        />
                    </CardContent>
                </Card>
                </div>
                {/*<div>*/}
                {/*    <img src={Photo} className="w-2xl fixed " alt="tjenerTeam2"/>*/}
                {/*</div>*/}
            </>
        );
    }
}



function mapStateToProps(state) {
    return {
        corporation_user: state.corporation_user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createdCorporationUser: bindActionCreators(corporationUser.createCorporationUser, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(CreateCorporation);


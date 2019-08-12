import React, {Component} from 'react';
import {idGenerator} from "../../../common/IdGenerator";
import authRoles from "../../../../auth/authRoles";
import Photo from "../../../static/tjenerTeam2.png";
import {Card, CardContent} from "@material-ui/core";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import EditCorporationProfileForm from "./EditCorporationProfileForm";
import * as GlobalPaths from "../../../../GlobalPaths";
import * as corporationUser from "../actions/Corporation.actions";
import FormValidator from "../../../validator/FormValidator";
import {CorparationFormValidator} from "../../../validator/forms/CorporationFormValidator";
import AppHeader from "../../toolbar/AppHeaderCorp";

class EditCorporationProfile extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(CorparationFormValidator);
        this.submitted = false;
        this.state = {
            corporation: {
                id: "",
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
                role: "",
                validation: this.validator.valid()
            }
        }
    }

    editSubmitHandler = () => {
        this.props.actions.updateUser(this.state.corporation);
        this.props.history.push(GlobalPaths.homeCorporation);
    };

    changeHandler = (e) => {
        let tempState = {...this.state.corporation};
        tempState[e.target.name] = e.target.value;
        this.setState({corporation: tempState})

    };

    componentDidMount() {
        let user = this.props.user;
        if(user != null) {
            let tempState = {...this.state.corporation};

            for (var key in tempState) {
                if (tempState.hasOwnProperty(key)) {
                    if (tempState[key] === "") {
                        tempState[key] = user[key];
                    }
                }
            }
            this.setState({corporation: tempState});
        }
    }

    changePage = (url) => {
        this.props.history.push(url);
    };

    submitHandler = () => {
        debugger;
        const validation = this.validator.validate(this.state.corporation);
        const tempCorporation = {...this.state.corporation};
        tempCorporation.validation = validation;
        this.submitted = true;
        if (validation.isValid) {
            console.log('hello world')
        }
        this.setState({state: this.state});
    };



    render() {

        const {corporation} = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.corporation) : this.state.corporation.validation;

        return (
            <>
                <AppHeader
                    changePage={this.changePage}
                />
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <Card className="w-full max-w-2xl mx-auto m-16 md:m-0" square>
                        <CardContent className="flex flex-col items-center p-32 md:p-128 md:pt-128 ">
                            <h1 className="font-sans text-4xl text-gray-800">Rediger Profil</h1>
                            <EditCorporationProfileForm
                                corporationUser={corporation}
                                submitHandler={this.submitHandler}
                                changeHandler={this.changeHandler}
                                validation={validation}
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
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            updateUser: bindActionCreators(corporationUser.updateCorporationUser, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EditCorporationProfile);

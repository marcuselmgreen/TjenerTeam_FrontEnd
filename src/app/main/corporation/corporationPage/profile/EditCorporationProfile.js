import React, { Component } from 'react';
import Photo from "../../../static/tjenerTeam2.png";
import { Card, CardContent, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditCorporationProfileForm from "./EditCorporationProfileForm";
import ChangePassword from "./ChangePassword";
import * as GlobalPaths from "../../../../GlobalPaths";
import * as corporationUser from "../actions/Corporation.actions";
import FormValidator from "../../../validator/FormValidator";
import AppHeader from "../../toolbar/AppHeaderCorp";
import { EditCorparationFormValidator } from "../../../validator/forms/EditCorporationFormValidator";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { LoginFormValidator } from 'app/main/validator/forms/LoginFormValidator';

class EditCorporationProfile extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(EditCorparationFormValidator);
        this.passwordValidator = new FormValidator(LoginFormValidator);
        this.submitted = false;
        this.state = {
            userConfirmation: "",
            password: {
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
            },
            displayModal: false,
            value: 0,
            corporation: {
                _id: "",
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
                gdpr: "",
                role: "",
                validation: this.validator.valid(),
            },
            selectedTab: 0
        }
    }

    changeHandler = (e) => {
        let tempState = { ...this.state.corporation, ...this.state.password };
        tempState[e.target.name] = e.target.value;
        this.setState({
            corporation: tempState,
            password: tempState,
            userConfirmation: e.target.value
        })
    };

    componentDidMount() {
        let user = this.props.user;
        if (user != null) {
            let tempState = { ...this.state.corporation };

            for (var key in tempState) {
                if (tempState.hasOwnProperty(key)) {
                    if (tempState[key] === "") {
                        tempState[key] = user[key];
                    }
                }
            }
            this.setState({ corporation: tempState });
        }
    }

    changePage = (url) => {
        this.props.history.push(url);
    };

    submitHandler = () => {
        let corp = this.state.corporation;
        const validation = this.validator.validate(corp);
        const tempCorporation = { ...this.state.corporation };
        tempCorporation.validation = validation;
        this.submitted = true;
        if (validation.isValid) {
            this.props.actions.updateUser(this.state.corporation);
            this.props.history.push(GlobalPaths.homeCorporation);
        }
        this.setState({ state: this.state });
    };

    changePasswordHandler = () => {
        let corp = this.state.corporation;
        //const validation = this.passwordValidator.validate(corp);
        //const tempCorporation = {...corp};
        let password = this.state.password;
        //tempCorporation.validation = validation;
        this.submitted = true;
        //if (validation.isValid){
        this.props.actions.changeUserPassword(corp, password);
        //}
        this.setState({ state: this.state });
    }

    displayModalHandler = () => {
        this.setState({ displayModal: !this.state.displayModal });
    }

    deleteHandler = () => {
        let corp = this.state.corporation;
        const validation = this.validator.validate(corp);
        const tempCorporation = { ...this.state.corporation };
        const userConfirmation = this.state.userConfirmation;
        tempCorporation.validation = validation;
        this.submitted = true;
        if (validation.isValid) {
            this.props.actions.deleteUser(this.state.corporation, userConfirmation);
        }
        this.setState({ state: this.state });
    };

    changeTab = (e, tab) => {
        this.setState({ selectedTab: tab })
    };

    render() {
        const { corporation, displayModal, selectedTab, userConfirmation, password } = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.corporation) : this.state.corporation.validation;
        let corporationUser = corporation;
        let userPassword = password;

        return (
            <>
                <AppHeader
                    changePage={this.changePage}
                />
                <Paper style={{ backgroundColor: '#ffffff' }} square>
                    <Tabs style={{ overflowY: "auto" }} value={selectedTab} indicatorColor="primary" onChange={this.changeTab}>
                        <Tab label={<span><Icon className="float-left" fontSize="small">info</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Firmaoplysninger</span></span>} />
                        <Tab label={<span><Icon className="float-left" fontSize="small">payment</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Betalingsoplysninger</span></span>} />
                        <Tab label={<span><Icon className="float-left" fontSize="small">lock</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Skift kodeord</span></span>} />
                        <Tab onClick={this.displayModalHandler} label={<span><Icon className="float-left" fontSize="small">delete</Icon><span className="ml-2 float-left" style={{ fontSize: '12px' }}>Slet profil</span></span>} />
                        <Dialog
                            open={displayModal}
                        >
                            <div>
                                <Card className="p-32">
                                    <h3 className="w-full text-center mb-8">Er du sikker på at du vil slette din virksomhedsprofil?</h3>
                                    <p className="w-full text-center mb-8">Tast "slet" for at bekræfte</p>
                                    <div>
                                        <TextField
                                            name="confirmation"
                                            label="Bekræftelse"
                                            helperText={<span style={{ color: 'red' }}>{}</span>}
                                            className="w-full"
                                            variant="outlined"
                                            onChange={this.changeHandler}
                                            value={userConfirmation}
                                        />
                                    </div>
                                    <div className="flex flex-row my-2 ">
                                        <div className="w-1/2 p-4">
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                className="w-full mr-5 sm:max-h-52 sm:min-h-52"
                                                onClick={this.deleteHandler}>
                                                <span style={{ fontSize: "12px" }}>Ja</span>
                                            </Button>
                                        </div>
                                        <div className="w-1/2 p-4">
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                className="w-full ml-5 sm:max-h-52 sm:min-h-52"
                                                onClick={this.displayModalHandler}>
                                                <span style={{ fontSize: "12px" }}>Nej</span>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Dialog>
                    </Tabs>
                </Paper>
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    {selectedTab === 0 &&
                        <EditCorporationProfileForm
                            corporationUser={corporation}
                            submitHandler={this.submitHandler}
                            changeHandler={this.changeHandler}
                            validation={validation}
                        />}
                    {selectedTab === 2 &&
                        <ChangePassword
                            changePasswordHandler={this.changePasswordHandler}
                            /*validation={passwordValidation}*/
                            changeHandler={this.changeHandler}
                            password={userPassword}
                        />}
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
            deleteUser: bindActionCreators(corporationUser.deleteCorporationUser, dispatch),
            changeUserPassword: bindActionCreators(corporationUser.changePassword, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EditCorporationProfile);

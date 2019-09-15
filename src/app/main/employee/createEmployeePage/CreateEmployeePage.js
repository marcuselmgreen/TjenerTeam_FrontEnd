import React, {Component} from 'react';
import Image from "../../static/tjenerteam2.jpg";
import {Card, CardContent} from "@material-ui/core";
import './CreateEmployeePage.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as employeeActions from "../actions/Employee.actions";
import SelectJobs from "./components/selectJobs/SelectJobs";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import WorkPlaces from "./components/workPlaces/WorkPlaces";
import IntroductionVideo from "./components/introductionVideo/IntroductionVideo";
import AddPhotos from "./components/addPhotos/AddPhotos";
import AboutYou from "./components/aboutYou/AboutYou";
import LanguageDanish from "./components/languageSkill/LanguageDanish";
import LanguageEnglish from "./components/languageSkill/LanguageEnglish";
import * as GlobalPaths from "../../../GlobalPaths";

class CreateEmployeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                selectedJobs: [],
                selectCities: [],
                languageSkillDanish: null,
                languageSkillEnglish: null,
                driversLicence: null,
                ownCar: null,
                address: "",
                zipCode: "",
                phoneNumber: "",
                description: "",

            },
            progressTab: 0,
            showSpinner: true
        };

    }

    jobHandler = (job) => {
        for (let i = 0; i < this.state.user.selectedJobs.length; i++) {
            if (this.state.user.selectedJobs[i] === job) {
                let newArray = this.state.user.selectedJobs.filter(v => v !== job);
                let tempUser = {...this.state.user};
                tempUser.selectedJobs = newArray;

                return this.setState({user: tempUser});
            }
        }

        let tempUser = {...this.state.user};
        tempUser.selectedJobs.push(job);
        return this.setState({user: tempUser});
    };

    changeLanguageHandler = (language, val) => {
        let tempState = {...this.state};
        tempState.user[language] = val;
        this.setState({tempState});
    };

    changeCarHandler = (language, val) => {
        let tempState = {...this.state};
        if (tempState.user[language] === null) {
            tempState.user[language] = val;
        } else {
            tempState.user[language] = !tempState.user[language];
        }
        this.setState({tempState});
    };


    changeHandler = (e) => {
        let tempState = {...this.state};
        tempState.user[e.target.name] = e.target.value;
        this.setState({tempState});
    };


    cityHandler = (city) => {
        for (let i = 0; i < this.state.user.selectCities.length; i++) {
            if (this.state.user.selectCities[i] === city) {
                let newArray = this.state.user.selectCities.filter(v => v !== city);
                let tempUser = {...this.state.user};
                tempUser.selectCities = newArray;

                return this.setState({user: tempUser});
            }
        }

        let tempUser = {...this.state.user};
        tempUser.selectCities.push(city);
        return this.setState({user: tempUser});
    };

    doesContainCity = (city) => {
        for (let i = 0; i < this.state.user.selectCities.length; i++) {
            if (this.state.user.selectCities[i] === city) {
                return true
            }
        }
        return false;
    };


    doesContainsJob = (job) => {
        for (let i = 0; i < this.state.user.selectedJobs.length; i++) {
            if (this.state.user.selectedJobs[i] === job) {
                return true
            }
        }
        return false;
    };

    moveForward = () => {
        this.setState({progressTab: this.state.progressTab + 1, showSpinner: true})
    };

    moveBackward = () => {
        this.setState({progressTab: this.state.progressTab - 1, showSpinner: true})
        window.scrollTo(0, 0);
    };


    getSteps = () => {
        return ['Jobs', 'Introduktion', 'Profil info'];
    };

    tabSelector = () => {
        const {progressTab} = this.state;

        if (progressTab < 2) {
            return 0;
        } else if (progressTab >= 2 && progressTab < 4) {
            return 1;
        } else {
            return 2;
        }
    };

    hideSpinner = () => {
        this.setState({showSpinner: false});
    };

    createEmployeeHandler = () => {
        this.props.actions.updateEmployee(this.state.user);
        this.props.history.push(GlobalPaths.employeePage)
    };

    render() {
        const {userAuth} = this.props;
        const {progressTab, user, showSpinner} = this.state;
        const steps = this.getSteps();

        return (
            <>
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Image + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <Card className="w-full max-w-lg m-16 p-10 md:m-0 ">

                        <Stepper ref={this.myRef} activeStep={this.tabSelector()} alternativeLabel>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <CardContent className="flex flex-col cardForm">

                            {progressTab === 0 &&
                            <SelectJobs
                                user={userAuth}
                                selectJobs={this.state.user.selectedJobs}
                                jobHandler={this.jobHandler}
                                doesContainsJob={this.doesContainsJob}
                                moveForward={this.moveForward}
                            />
                            }
                            {progressTab === 1 &&
                            <WorkPlaces
                                selectCities={this.state.user.selectCities}
                                cityHandler={this.cityHandler}
                                doesContainCity={this.doesContainCity}
                                moveForward={this.moveForward}
                                moveBackward={this.moveBackward}
                            />
                            }
                            {progressTab === 2 &&
                            <IntroductionVideo
                                moveForward={this.moveForward}
                                moveBackward={this.moveBackward}
                                showSpinner={showSpinner}
                                hideSpinner={this.hideSpinner}
                            />
                            }
                            {progressTab === 3 &&
                            <AddPhotos
                                moveForward={this.moveForward}
                                moveBackward={this.moveBackward}
                            />
                            }
                            {progressTab === 4 &&
                            <AboutYou
                                moveForward={this.moveForward}
                                moveBackward={this.moveBackward}
                                changeCarHandler={this.changeCarHandler}
                                user={user}
                                changeHandler={this.changeHandler}
                            />
                            }
                            {progressTab === 5 &&
                            <LanguageDanish
                                moveForward={this.moveForward}
                                moveBackward={this.moveBackward}
                                user={user}
                                changeLanguageHandler={this.changeLanguageHandler}
                            />
                            }
                            {progressTab === 6 &&
                            <LanguageEnglish
                                createEmployeeHandler={this.createEmployeeHandler}
                                moveBackward={this.moveBackward}
                                user={user}
                                changeLanguageHandler={this.changeLanguageHandler}
                            />
                            }
                        </CardContent>

                    </Card>
                </div>

            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        userAuth: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            updateEmployee: bindActionCreators(employeeActions.updateEmployee, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CreateEmployeePage);


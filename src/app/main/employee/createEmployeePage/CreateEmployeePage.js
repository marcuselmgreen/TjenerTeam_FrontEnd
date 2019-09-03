import React, {Component} from 'react';
import Image from "../../corporation/login/tjenerteam2.jpg";
import {Card, CardContent, Icon} from "@material-ui/core";
import './CreateEmployeePage.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as employeeActions from "../actions/Employee.actions";
import Button from "@material-ui/core/Button";
import SelectJobs from "./components/selectJobs/SelectJobs";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import WorkPlaces from "./components/workPlaces/WorkPlaces";
import IntroductionVideo from "./components/introductionVideo/IntroductionVideo";

class CreateEmployeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                selectedJobs: [],
                selectCities: []
            },
            progressTab: 0
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
        this.setState({progressTab: this.state.progressTab + 1})
    };

    moveBackward = () => {
        this.setState({progressTab: this.state.progressTab - 1})
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


    render() {
        const {user} = this.props;
        const {progressTab} = this.state;
        const steps = this.getSteps();

        return (
            <>
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Image + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <Card className="w-full max-w-lg m-16 p-10 md:m-0 ">

                        <Stepper ref={this.myRef} activeStep={this.tabSelector()} alternativeLabel>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <CardContent className="flex flex-col cardForm">
                            <h1 className="font-sans text-gray-800 mt-20 welcomeTitle defFont ">Velkommen, {user.name}! </h1>
                            <p className="font-sans text-gray-600 subTitle defFont"><br/>Udfyld spørgsmålene for at
                                komme i gang med at søge arbejde!</p>
                            {/*<p className="descriptionText defFont">Søger freelance arbejde på 2 klik</p>*/}
                            {/*<p className="descriptionText defFont">Vi har arbejde hos bl.a. holms, d'Angleterre ect.</p>*/}
                            {/*<div>*/}
                            {/*    <div style={{float: 'left'}}>*/}
                            {/*        <Icon className="editProfileIcon">edit</Icon>*/}
                            {/*    </div>*/}
                            {/*    <div style={{float: 'left', paddingTop: '5px'}}>*/}
                            {/*        <a className="defFont " href="">Rediger profil</a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <span className="underline"></span>

                            {progressTab === 0 &&
                            <SelectJobs

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
        user: state.auth.user
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
    mapDispatchToProps)(CreateEmployeePage);


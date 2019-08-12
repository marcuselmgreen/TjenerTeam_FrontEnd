import React from 'react';
import {Button, Card} from "@material-ui/core";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import withStyles from "@material-ui/core/styles/withStyles";
import {blue, green} from "@material-ui/core/colors";
import Password from "./components/Password";
import Terms from "./components/Terms";

const CorporationForm = (props) => {

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
        validation,
        currentView,
        loggedIn,

        plusChangeView,
        minusChangeView,
        changeHandler,
        submitHandler
    } = props;

    return (
        <Card className="p-24 max-w-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
            {currentView === 0 ?
                <>
                    <div className="w-full">

                        <Top
                            email={email}
                            cvr={cvr}
                            address={address}
                            zipCode={zipCode}
                            city={city}
                            changeHandler={changeHandler}
                            validation={validation}
                        />
                    </div>

                    <div className="w-full mt-12">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>
                </>
                : null
            }

            {currentView === 0 ?
                <div className="flex flex-wrap ">
                    <Bottom
                        contactPerson={contactPerson}
                        department={department}
                        name={name}
                        phoneNumber={phoneNumber}
                        billingEmail={billingEmail}
                        ean={ean}
                        password={password}
                        confirmPassword={confirmPassword}
                        gdpr={gdpr}
                        validation={validation}
                        changeHandler={changeHandler}
                    />
                </div>
                : null
            }

            {currentView === 0 ?
                <>
                    <div className="flex flex-wrap ">
                        <Password
                            password={password}
                            confirmPassword={confirmPassword}
                            changeHandler={changeHandler}
                            validation={validation}
                        />
                    </div>

                    <div className="w-full mt-12">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>
                </>
                : null
            }

            {currentView === 0 ?
                <>
                    <div className="flex flex-wrap ">
                        <Terms
                            gdpr={gdpr}
                            validation={validation}
                            changeHandler={changeHandler}
                        />
                    </div>

                    <div className="w-full mt-5">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>
                </>
                : null
            }

            <div className="w-full mt-10">
                <div className="flex-wrap flex my-2">
                    <div className="w-full sm:w-1/2">
                        { currentView > 0 ?
                            <div className="flex justify-center p-4">
                                <BackButton
                                    onClick={minusChangeView}
                                    color="secondary"
                                    variant="contained"
                                    className="min-w-216 min-h-48 "
                                    style={{color: "white"}}>
                                    Tilbage
                                </BackButton>
                            </div>
                            : null
                        }
                    </div>
                    <div className="w-full sm:w-1/2">

                        {currentView !== 0 ?
                            <div className="flex justify-center p-4">
                                <SubmitButton
                                    onClick={plusChangeView}
                                    color="secondary"
                                    variant="contained"
                                    className="min-w-216 min-h-48 "
                                    style={{color: "white"}}>
                                    Videre
                                </SubmitButton>
                            </div>
                            :
                            <div className="flex justify-center p-4">
                                    <SubmitButton
                                        onClick={submitHandler}
                                        color="secondary"
                                        variant="contained"
                                        className="min-w-216 min-h-48 "
                                        style={{color: "white"}}>
                                        Opret
                                    </SubmitButton>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Card>
    );
};

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

const BackButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    },
}))(Button);


export default CorporationForm;

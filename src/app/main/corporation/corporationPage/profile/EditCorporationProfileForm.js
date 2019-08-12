import React from 'react';
import Top from "../createCorporation/components/Top";
import Bottom from "../createCorporation/components/Bottom";
import Password from "../createCorporation/components/Password";
import Terms from "../createCorporation/components/Terms";
import {Button, Card} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";

const EditCorporationProfileForm = (props) => {

    let {
        corporationUser,
        submitHandler,
        validation,
        changeHandler
    } = props;

    return (
        <Card className="p-24 max-w-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>

                <>
                    <div className="w-full">

                        <Top
                            email={corporationUser.email}
                            cvr={corporationUser.cvr}
                            address={corporationUser.address}
                            zipCode={corporationUser.zipCode}
                            city={corporationUser.city}
                            changeHandler={changeHandler}
                            validation={validation}
                        />
                    </div>

                    <div className="w-full mt-12">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>
                </>

                <div className="flex flex-wrap ">
                    <Bottom
                        contactPerson={corporationUser.contactPerson}
                        department={corporationUser.department}
                        name={corporationUser.name}
                        phoneNumber={corporationUser.phoneNumber}
                        billingEmail={corporationUser.billingEmail}
                        ean={corporationUser.ean}
                        password={corporationUser.password}
                        confirmPassword={corporationUser.confirmPassword}
                        gdpr={corporationUser.gdpr}
                        validation={validation}
                        changeHandler={changeHandler}
                    />
                </div>


            <div className="w-full mt-10">
                <div className="flex-wrap flex my-2">
                    <div className="w-full">
                            <div className="flex justify-center p-4">
                                <SubmitButton
                                    onClick={submitHandler}
                                    color="secondary"
                                    variant="contained"
                                    className="min-w-216 min-h-48 "
                                    style={{color: "white"}}>
                                    Updater
                                </SubmitButton>
                            </div>
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

export default EditCorporationProfileForm;

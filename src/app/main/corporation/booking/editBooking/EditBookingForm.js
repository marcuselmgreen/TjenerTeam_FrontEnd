import React from 'react';
import {Button, Card} from "@material-ui/core";
import Staff from "../createBooking/components/Staff";

import {
    arrangementTypeValues,
    extraHours,
    gender,
    languageSkillData,
    lowerDressSelection,
    shoeSelection,
    staff,
    upperDressSelection,
    yesAndNo
} from '../createBooking/helper_functions/Selections';
import ContactInformation from "../createBooking/components/ContactInformation";
import Arrangement from "../createBooking/components/Arrangement";
import Clothing from "../createBooking/components/Clothing";
import Questions from "../createBooking/components/Questions";
import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";


const EditBookingForm = (props) => {

    const {
        changeHandler,
        booking,
        validation,
        editSubmitHandler
    } = props;

    return (
        <Card className="p-24 max-w-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
            <div className="flex flex-wrap my-0">
                <div className="w-full">
                    <h2 className="font-serif text-gray-800 text-md ">HVOR OG HVORNÅR?</h2>
                    <hr style={{borderTop: '1px solid #cccccc'}}/>
                </div>
            </div>

            <ContactInformation
                contactPerson={booking.contactPerson}
                changeHandler={changeHandler}
                phoneNumber={booking.phoneNumber}
                address={booking.address}
                zipCode={booking.zipCode}
                validation={validation}/>

            <div className="w-full mt-12">
                <h2 className="font-serif text-gray-800 text-md ">OM JOBBET</h2>
                <hr style={{borderTop: '1px solid #cccccc'}}/>
            </div>

            <Arrangement
                extraHours={extraHours}
                arrangementType={booking.arrangementType}
                changeHandler={changeHandler}
                arrangementTypeValues={arrangementTypeValues}
                arrangementTypeOther={booking.arrangementTypeOther}
                extraWorkHours={booking.extraWorkHours}
                foodIncluded={booking.foodIncluded}
                accessInformation={booking.accessInformation}
                jobDescription={booking.jobDescription}
                validation={validation}/>

            <div className="w-full mt-12 mb-20">
                <hr style={{borderTop: '1px solid #cccccc'}}/>
            </div>

            <Clothing
                changeHandler={changeHandler}
                upperDressSelection={upperDressSelection}
                upperDressCode={booking.upperDressCode}
                upperDressCodeOther={booking.upperDressCodeOther}
                lowerDressCode={booking.lowerDressCode}
                lowerDressSelection={lowerDressSelection}
                lowerDressCodeOther={booking.lowerDressCodeOther}
                shoesDressCode={booking.shoesDressCode}
                shoeSelection={shoeSelection}
                shoesDressCodeOther={booking.shoesDressCodeOther}
                itemToBring={booking.itemToBring}
                validation={validation}
            />


            <div className="w-full mt-12 mb-20">
                <hr style={{borderTop: '1px solid #cccccc'}}/>
            </div>

            <Questions
                changeHandler={changeHandler}
                languageSkill={booking.languageSkill}
                staffGender={booking.staffGender}
                jobExperience={booking.jobExperience}
                yesAndNo={yesAndNo}
                languageSkillData={languageSkillData}
                gender={gender}
                validation={validation}
            />

            <div className="w-full mt-20">
                <div className="flex flex-wrap my-0">
                        <div className="w-full">
                            <div className="flex justify-center p-4">
                                <SubmitButton
                                    onClick={editSubmitHandler}
                                    color="secondary"
                                    variant="contained"
                                    className="min-w-216 min-h-48 "
                                    style={{color: "white"}}>
                                    Opdater booking
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

export default EditBookingForm;

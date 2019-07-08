import React from 'react';
import {Card, Button} from "@material-ui/core";
import Time from '../../common/clockTime';

import {FuseAnimate} from '@fuse';
import './Booking.css';

import withStyles from "@material-ui/core/styles/withStyles";
import {red, green} from "@material-ui/core/colors";
import Staff from "./components/Staff";
import ContactInformation from "./components/ContactInformation";
import Arrangement from "./components/Arrangement";
import Clothing from "./components/Clothing";
import Questions from "./components/Questions";


const time = Time;
const staff = ["Tjener", "Bartender", "Kok", "Opvasker"];
const arrangementTypeValues = ["Firmaevent", "Bryllup", "Julefrokost", "andet"];
const upperDressSelection = ["Hvid Skjorte", "Sort t-shirt", "Hvid t-shirt", "andet"];
const lowerDressSelection = ["Sorte bukaer", "Hvide Bukser", "shorts", "andet"];
const shoeSelection = ["Støvler", "sorte sko", "hvide sko", "andet"];
const languageSkillData = ["Dansk og Engelsk", "Kun Dansk", "Kun Engelsk"];
const gender = ["Mænd", "Kvinder", "Begge køn"];
const yesAndNo = ["Ja", "nej"];

const Booking = (props) => {

        const
            {
                /*
                    VALUES
                 */
                label,
                staffType,
                numberOfStaff,
                date,
                startTime,
                endTime,
                contactPerson,
                phoneNumber,
                address,
                zipCode,
                arrangementType,
                arrangementTypeOther,
                extraWorkHours,
                foodIncluded,
                jobDescription,
                accessInformation,
                upperDressCode,
                upperDressCodeOther,
                lowerDressCode,
                lowerDressCodeOther,
                shoesDressCode,
                shoesDressCodeOther,
                itemToBring,
                languageSkill,
                staffGender,
                jobExperience,
                selectedTab,
                showFullPage,
                bookingLength,

                /*
                    FUNCTIONS
                 */
                showFullPageHandler,
                addBooking,
                dateHandler,
                createBooking,
                deleteBooking,
                changeHandler,

            } = props;

    return (
        <div>
            <Card className="p-40 max-w-lg">
                <div className="flex flex-wrap my-3 mb-40">
                    <div className="w-full">
                        {bookingLength === 3 ?
                            null :
                            <Button
                                onClick={addBooking}
                                color="primary"
                                variant="contained"
                                className="float-right">
                                Opret endnu en booking
                            </Button>
                        }
                    </div>
                </div>

                <div className="flex flex-wrap my-0">
                    <div className="w-full">
                        <h2 className="font-serif text-gray-800 text-md ">HVOR OG HVORNÅR?</h2>
                        <hr style={{borderTop: '1px solid gray'}}/>
                    </div>
                </div>

                <div className="flex flex-wrap my-0">
                    <Staff
                        changeHandler={changeHandler}
                        staffType={staffType}
                        staff={staff}
                        dateHandler={dateHandler}
                        numberOfStaff={numberOfStaff}
                        startTime={startTime}
                        endTime={endTime}
                        date={date}
                        time={time}/>

                    <ContactInformation
                        contactPerson={contactPerson}
                        changeHandler={changeHandler}
                        phoneNumber={phoneNumber}
                        address={address}
                        zipCode={zipCode}/>

                    {!showFullPage &&
                    <div className="w-full">
                        <div className="flex justify-center">
                            <Button
                                onClick={showFullPageHandler}
                                color="secondary"
                                variant="contained"
                                className="mt-28 h-48 w-256">
                                Videre
                            </Button>
                        </div>
                    </div>
                    }

                    {showFullPage &&
                    <FuseAnimate duration={700} animation={{translateX: [0, '100%']}}>
                        <div className="w-full">
                            <div className="w-full mt-12">
                                <h2 className="font-serif text-gray-800 text-md ">OM JOBBET</h2>
                                <hr style={{borderTop: '1px solid gray'}}/>
                            </div>

                            <Arrangement
                                arrangementType={arrangementType}
                                changeHandler={changeHandler}
                                arrangementTypeValues={arrangementTypeValues}
                                arrangementTypeOther={arrangementTypeOther}
                                extraWorkHours={extraWorkHours}
                                foodIncluded={foodIncluded}
                                accessInformation={accessInformation}
                                jobDescription={jobDescription}
                                />

                            <div className="w-full mt-12 mb-20">
                                <hr style={{borderTop: '1px solid gray'}}/>
                            </div>

                            <Clothing
                                changeHandler={changeHandler}
                                upperDressSelection={upperDressSelection}
                                upperDressCode={upperDressCode}
                                upperDressCodeOther={upperDressCodeOther}
                                lowerDressCode={lowerDressCode}
                                lowerDressSelection={lowerDressSelection}
                                lowerDressCodeOther={lowerDressCodeOther}
                                shoesDressCode={shoesDressCode}
                                shoeSelection={shoeSelection}
                                shoesDressCodeOther={shoesDressCodeOther}
                                itemToBring={itemToBring}
                            />

                            <div className="w-full mt-12 mb-20">
                                <hr style={{borderTop: '1px solid gray'}}/>
                            </div>

                            <Questions
                                changeHandler={changeHandler}
                                languageSkill={languageSkill}
                                staffGender={staffGender}
                                jobExperience={jobExperience}
                                yesAndNo={yesAndNo}
                                languageSkillData={languageSkillData}
                                gender={gender}
                            />


                            <div className="w-full mt-12 mb-20">
                                <hr style={{borderTop: '1px solid gray'}}/>
                            </div>


                            <div className="w-full mt-20">
                                <div className="flex flex-wrap my-2">
                                    <div className="w-full sm:w-1/2 ">
                                        {0 === bookingLength ?
                                                null :
                                            <div className="w-full ">
                                                <div className="flex justify-center p-4">
                                                    <DeleteButton
                                                        onClick={deleteBooking}
                                                        color="secondary"
                                                        variant="contained"
                                                        className="min-w-216 min-h-48 ">
                                                        Slet
                                                    </DeleteButton>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        {selectedTab !== bookingLength ?
                                            null :
                                            <div className="w-full">
                                                <div className="flex justify-center p-4">
                                                    <SubmitButton
                                                        onClick={createBooking}
                                                        color="secondary"
                                                        variant="contained"
                                                        className="min-w-216 min-h-48 "
                                                        style={{color: "white"}}>
                                                        Opret Booking
                                                    </SubmitButton>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FuseAnimate>
                    }
                </div>
            </Card>
        </div>
    );
};

const DeleteButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

export default Booking;

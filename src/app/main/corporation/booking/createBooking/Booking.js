import React from 'react';
import {Card, Button} from "@material-ui/core";
import Time from './others/ClockTime';

import {FuseAnimate} from '@fuse';
import './Booking.css';

import withStyles from "@material-ui/core/styles/withStyles";
import {red, green} from "@material-ui/core/colors";
import Staff from "./components/Staff";
import ContactInformation from "./components/ContactInformation";
import Arrangement from "./components/Arrangement";
import Clothing from "./components/Clothing";
import Questions from "./components/Questions";
import Pay from "./components/Pay";
import Bottom from "./components/Bottom";
import BookingModal from "./components/BookingModal";
import {
    arrangementTypeValues,
    upperDressSelection,
    lowerDressSelection,
    shoeSelection,
    extraHours,
    languageSkillData,
    transportCostWages,
    gender,
    yesAndNo
} from './helper_functions/Selections'


const time = Time;


const Booking = (props) => {

    const
        {
            booking,
            selectedTab,
            showFullPage,
            bookingLength,

            displayModal,
            staff,
            validation,
            loggedIn,
            /*
                FUNCTIONS
             */
            showFullPageHandler,
            addBooking,
            dateHandler,
            createBooking,
            deleteBooking,
            changeHandler,
            displayBookingModalHandler,
            nextStepBooking

        } = props;

    return (
        <>
            <Card className="p-24 max-w-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                <div className="flex flex-wrap my-0">
                    <div className="w-full">
                        <h2 className="font-serif text-gray-800 text-md ">HVOR OG HVORNÅR?</h2>
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>
                </div>

                <div className="flex flex-wrap my-0">
                    <Staff
                        changeHandler={changeHandler}
                        staffType={booking.staffType}
                        staff={staff}
                        dateHandler={dateHandler}
                        numberOfStaff={booking.numberOfStaff}
                        startTime={booking.startTime}
                        endTime={booking.endTime}
                        date={booking.date}
                        time={time}
                        validation={validation}/>

                    {/*<div className="w-full mt-12">*/}
                    {/*    <hr style={{borderTop: '1px solid #cccccc'}}/>*/}
                    {/*</div>*/}

                    <ContactInformation
                        contactPerson={booking.contactPerson}
                        changeHandler={changeHandler}
                        phoneNumber={booking.phoneNumber}
                        address={booking.address}
                        zipCode={booking.zipCode}
                        validation={validation}/>

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
                    <FuseAnimate duration={700} animation="transition.fadeIn">
                        <div className="w-full">
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
                                <hr style={{borderTop: '1px solid gray'}}/>
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


                            <div className="w-full mt-12 mb-20">
                                <hr style={{borderTop: '1px solid #cccccc'}}/>
                            </div>

                            <Pay
                                transportWage={booking.transportWage}
                                changeHandler={changeHandler}
                                transportCostWages={transportCostWages}
                                wageTotal={booking.wageTotal}
                                hourlyWage={booking.hourlyWage}
                                validation={validation}
                            />

                            <div className="w-full mt-12 mb-20">
                                <hr style={{borderTop: '1px solid #cccccc'}}/>
                            </div>

                            <Bottom
                                changeHandler={changeHandler}
                                priceTotal={booking.priceTotal}

                            />

                            <BookingModal
                                nextStepBooking={nextStepBooking}
                                loggedIn={loggedIn}
                                displayModal={displayModal}
                                displayBookingModalHandler={displayBookingModalHandler}
                                addBooking={addBooking}
                                createBooking={createBooking}
                                bookingLength={bookingLength}
                            />

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
                                                        onClick={displayBookingModalHandler}
                                                        color="secondary"
                                                        variant="contained"
                                                        className="min-w-216 min-h-48 "
                                                        style={{color: "white"}}>
                                                        Videre
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
        </>
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

import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Booking from "./Booking";
import {connect} from "react-redux";
import * as bookingActions from "../actions/Booking.actions";
import {bindActionCreators} from "redux";
import FormValidator from '../../validator/FormValidator';
import {BookingFormValidator} from "../../validator/forms/BookingFormValidator";
import {booking} from './others/BookingTemplate';
import {idGenerator} from '../../common/IdGenerator'
import {Card, CardContent} from "@material-ui/core";
import Image from "../../login/tjenerteam2.jpg";
import {diffWagePay, diffDateCalculator, workHours} from './helper_functions/Helpers'
import * as GlobalPaths from "../../../GlobalPaths";
import {staff} from './helper_functions/Selections'

const vacationExtra = 0.125;

class CreateBooking extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(BookingFormValidator);
        this.submitted = false;
        this.state = {
            selectedTab: 0,
            displayModal: false,
            bookings: [
                {
                    _id: idGenerator(),
                    createdByCorporation_user: this.props.user._id,
                    label: "Ny",
                    staffType: "",
                    numberOfStaff: 1,
                    date: new Date(),
                    startTime: "",
                    endTime: "",
                    contactPerson: "",
                    phoneNumber: "",
                    address: "",
                    zipCode: "",
                    arrangementType: "",
                    arrangementTypeOther: "",
                    extraWorkHours: "",
                    foodIncluded: "",
                    jobDescription: "",
                    accessInformation: "",
                    upperDressCode: "",
                    upperDressCodeOther: "",
                    lowerDressCode: "",
                    lowerDressCodeOther: "",
                    shoesDressCode: "",
                    shoesDressCodeOther: "",
                    itemToBring: "",
                    languageSkill: "",
                    staffGender: "",
                    jobExperience: "",
                    transportWage: "",
                    hourlyWage: "",
                    wageTotal: "",
                    priceTotal: "",
                    selectedStaff: [],
                    appliedStaff: [],
                    validation: this.validator.valid()
                }
            ],
        }
    }


    displayBookingModalHandler = () => {
        const validation = this.validator.validate(this.state.bookings[this.state.selectedTab]);
        const tempBookings = [...this.state.bookings];
        tempBookings[this.state.selectedTab].validation = validation;
        this.submitted = true;
        if (validation.isValid) {
            this.setState({displayModal: !this.state.displayModal})
        }
        // Force re render the component
        this.setState({state: this.state})
    };

    handleChangeTab = (e, tab) => {
        this.setState({selectedTab: tab})
    };

    showFullPageHandler = () => {
        this.props.actions.showFullCreateBookingPage();
    };

    addBooking = () => {
        let tempState = {...this.state};
        tempState.bookings[this.state.selectedTab].label = tempState.bookings[this.state.selectedTab].staffType;
        let newBooking = {...booking};
        newBooking._id = idGenerator();
        tempState.bookings.push(newBooking);
        debugger;
        this.setState({tempState});
        this.setState({displayModal: false});
        this.setState({selectedTab: this.state.selectedTab + 1});
    };

    createBooking = () => {
        let bookings = [...this.state.bookings];
        this.props.actions.createBooking(bookings);
        this.props.history.push(GlobalPaths.homeCorporation);
    };


    nextStepBooking = () => {
        let bookings = [...this.state.bookings];
        this.props.actions.saveBookings(bookings);
        this.props.history.push(GlobalPaths.createCorporation);
    };

    deleteBooking = () => {
        if (this.state.bookings.length > 1) {
            let tempBookings = [...this.state.bookings];
            let book = tempBookings[this.state.selectedTab];

            tempBookings = tempBookings.filter(b => b._id !== book._id);
            this.setState({bookings: tempBookings});

            if (this.state.selectedTab === 0) {
                this.setState({selectedTab: 0})
            } else if (this.state.selectedTab === 1) {
                this.setState({selectedTab: 0})
            } else {
                this.setState({selectedTab: this.state.selectedTab - 1})
            }
        }
    };

    setTotalPrice = (tempState) => {
        // SETS TOTAL PRICE
        return parseFloat(tempState[this.state.selectedTab]["wageTotal"]) * parseInt(tempState[this.state.selectedTab]["numberOfStaff"]).toFixed(2) * workHours(this.state.bookings[this.state.selectedTab]);
    };


    changeHandler = (e) => {
        let tempState = [...this.state.bookings];
        tempState[this.state.selectedTab][e.target.name] = e.target.value;


        // CHECKS THE LABEL ON THE TOP
        if (
            e.target.name === "staffType") {
            tempState[this.state.selectedTab]["label"] = e.target.value;
        }
        // IF HOURLY WAGE IS 0 SET ALL VALUES TO ZERO
        else if (parseFloat(tempState[this.state.selectedTab]["hourlyWage"]) < 1 || e.target.name === "hourlyWage" && isNaN(e.target.value)) {
            tempState[this.state.selectedTab]["priceTotal"] = "0";
        }
        // IF HOURLY WAGE IS OVER 0 SET VALUES
        else if ((e.target.name === "hourlyWage")) {

            if (e.target.value > 0) {
                // SETS VALUES FOR WAGETOTAL
                tempState[this.state.selectedTab]["wageTotal"] = (parseFloat(e.target.value) + (e.target.value * vacationExtra) + diffWagePay(diffDateCalculator(this.state.bookings[this.state.selectedTab])));
                // SETS TOTAL PRICE
                let val = this.setTotalPrice(tempState).toFixed(2);
                tempState[this.state.selectedTab]["priceTotal"] = val.toString();
            } else {
                tempState[this.state.selectedTab]["wageTotal"] = "0";
                tempState[this.state.selectedTab]["priceTotal"] = "0";
            }
        } else if (e.target.name === "startTime" || e.target.name === "endTime") {

            // SETS TOTAL PRICE
            let val = this.setTotalPrice(tempState);
            tempState[this.state.selectedTab]["priceTotal"] = val.toString();
        } else if (e.target.name === "numberOfStaff") {

            if (tempState[this.state.selectedTab]["numberOfStaff"] > 0) {
                let val = (parseFloat(tempState[this.state.selectedTab]["wageTotal"]) * parseInt(tempState[this.state.selectedTab]["numberOfStaff"])).toFixed(2);
                tempState[this.state.selectedTab]["priceTotal"] = val.toString();
            } else {
                tempState[this.state.selectedTab]["hourlyWage"] = "0";
                tempState[this.state.selectedTab]["wageTotal"] = "0";
                tempState[this.state.selectedTab]["priceTotal"] = "0";
            }
        }

        this.setState({bookings: tempState})
    };


    dateHandler = (date) => {
        let tempState = [...this.state.bookings];
        tempState[this.state.selectedTab].date = date;
        let nrVal = tempState[this.state.selectedTab]["hourlyWage"];

        if (!isNaN(parseFloat(nrVal))) {
            tempState[this.state.selectedTab]["wageTotal"] = (parseFloat(nrVal) + (nrVal * vacationExtra) + diffWagePay(diffDateCalculator(this.state.bookings[this.state.selectedTab])));
            let val = this.setTotalPrice(tempState);
            val = this.numberWithCommas(val);
            tempState[this.state.selectedTab]["priceTotal"] = val;
        }
        this.setState({bookings: tempState});
    };


    render() {
        const {showFullPage, loggedIn} = this.props;
        const {selectedTab, bookings, displayModal} = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.bookings[selectedTab]) : this.state.bookings[selectedTab].validation;

        return (
            <div style={{
                width: '100%',
                backgroundImage: "url(" + Image + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                <Card className="w-full max-w-2xl mx-auto m-16 md:m-0" square>
                    <CardContent className="flex flex-col items-center p-32 md:p-128 md:pt-128 ">
                        <h1 className="font-sans text-4xl text-gray-800">Opret booking</h1>
                        <p className="py-10 text-gray-800 font-sans text-lg">Udfyld formularen og den sendes ud til
                            vores personale kl. 12:00<br/>
                            Er arrangement tættere end 48 timer, sendes jobbet ud til vores personale med det samme!
                        </p>
                        <div>
                            <AppBar position="static" color="default">
                                <Tabs value={selectedTab} indicatorColor="primary" className="w-full"
                                      style={{overflowY: "auto"}}
                                      onChange={this.handleChangeTab}>
                                    {bookings.map((bookings, index) => (
                                        <Tab
                                            key={index}
                                            label={bookings.label}/>
                                    ))}
                                </Tabs>
                            </AppBar>
                            {
                                bookings.map((bookings, index) => (
                                    (selectedTab === index &&
                                        <Booking
                                            showFullPage={showFullPage}

                                            bookingLength={this.state.bookings.length - 1}
                                            selectedTab={selectedTab}
                                            displayModal={displayModal}
                                            addBooking={this.addBooking}
                                            key={index}
                                            label={bookings.label}
                                            staffType={bookings.staffType}
                                            numberOfStaff={bookings.numberOfStaff}
                                            date={bookings.date}
                                            startTime={bookings.startTime}
                                            endTime={bookings.endTime}
                                            contactPerson={bookings.contactPerson}
                                            phoneNumber={bookings.phoneNumber}
                                            address={bookings.address}
                                            zipCode={bookings.zipCode}
                                            arrangementType={bookings.arrangementType}
                                            arrangementTypeOther={bookings.arrangementTypeOther}
                                            extraWorkHours={bookings.extraWorkHours}
                                            foodIncluded={bookings.foodIncluded}
                                            jobDescription={bookings.jobDescription}
                                            accessInformation={bookings.accessInformation}
                                            upperDressCode={bookings.upperDressCode}
                                            upperDressCodeOther={bookings.upperDressCodeOther}
                                            lowerDressCode={bookings.lowerDressCode}
                                            lowerDressCodeOther={bookings.lowerDressCodeOther}
                                            shoesDressCode={bookings.shoesDressCode}
                                            shoesDressCodeOther={bookings.shoesDressCodeOther}
                                            itemToBring={bookings.itemToBring}
                                            languageSkill={bookings.languageSkill}
                                            staffGender={bookings.staffGender}
                                            jobExperience={bookings.jobExperience}
                                            transportWage={bookings.transportWage}
                                            hourlyWage={bookings.hourlyWage}
                                            wageTotal={bookings.wageTotal}
                                            priceTotal={bookings.priceTotal}

                                            showFullPageHandler={this.showFullPageHandler}
                                            staff={staff}
                                            validation={validation}
                                            loggedIn={loggedIn}

                                            displayBookingModalHandler={this.displayBookingModalHandler}
                                            dateHandler={this.dateHandler}
                                            createBooking={this.createBooking}
                                            deleteBooking={this.deleteBooking}
                                            changeHandler={this.changeHandler}
                                            nextStepBooking={this.nextStepBooking}
                                        />
                                    )
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        showFullPage: state.bookings.showFullCreateBookingPage,
        loggedIn: state.auth.login.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createBooking: bindActionCreators(bookingActions.createBooking, dispatch),
            saveBookings: bindActionCreators(bookingActions.selectBooking, dispatch),
            showFullCreateBookingPage: bindActionCreators(bookingActions.showFullCreateBookingPage, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CreateBooking);

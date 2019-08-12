import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Booking from "./Booking";
import {connect} from "react-redux";
import * as bookingActions from "../actions/Booking.actions";
import {bindActionCreators} from "redux";
import FormValidator from '../../../validator/FormValidator';
import {BookingFormValidator} from "../../../validator/forms/BookingFormValidator";
import {booking} from './others/BookingTemplate';
import {idGenerator} from '../../../common/IdGenerator'
import {Card, CardContent} from "@material-ui/core";
import Image from "../../../login/tjenerteam2.jpg";
import {diffWagePay, diffDateCalculator, workHours, checkPriceValue} from './helper_functions/Helpers'
import * as GlobalPaths from "../../../../GlobalPaths";
import {staff} from './helper_functions/Selections'
import AppHeader from "../../toolbar/AppHeaderCorp";

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
                    wageTotal: 0,
                    priceTotal: 0,
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
        let selectedTab = this.state.selectedTab;
        let name = e.target.name;
        let eValue = e.target.value;

        tempState[selectedTab][name] = eValue;

        let priceValues = ['staffType', 'hourlyWage', 'startTime', 'endTime', 'numberOfStaff'];

        if (priceValues.includes(e.target.name)) {
            tempState = checkPriceValue(name, tempState, selectedTab, eValue);
            this.setState({bookings: tempState})
        } else {
            this.setState({bookings: tempState})
        }

    };

    changePage = (url) => {
        this.props.history.push(url);
    };

    dateHandler = (date) => {
        let tempState = [...this.state.bookings];
        tempState[this.state.selectedTab].date = date;

        let nrVal = tempState[this.state.selectedTab]["hourlyWage"];

        if (!isNaN(parseFloat(nrVal))) {
            tempState[this.state.selectedTab]["wageTotal"] = (parseFloat(nrVal) + (nrVal * vacationExtra) + diffWagePay(diffDateCalculator(this.state.bookings[this.state.selectedTab])));
            let val = this.setTotalPrice(tempState);
            tempState[this.state.selectedTab]["priceTotal"] = val;
        }
        this.setState({bookings: tempState});
    };


    render() {
        const {showFullPage, loggedIn} = this.props;
        const {selectedTab, bookings, displayModal} = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.bookings[selectedTab]) : this.state.bookings[selectedTab].validation;

        return (
            <>
                {this.props.loggedIn ?
                <AppHeader
                    changePage={this.changePage}
                /> : null}
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
                                                booking={bookings}
                                                bookingLength={this.state.bookings.length - 1}
                                                selectedTab={selectedTab}
                                                displayModal={displayModal}
                                                addBooking={this.addBooking}
                                                key={index}
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
            </>
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

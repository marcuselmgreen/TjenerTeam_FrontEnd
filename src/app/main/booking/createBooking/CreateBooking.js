import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Photo from "../../static/tjenerTeam2.png";
import Booking from "./Booking";
import FuseAnimate from "../../../../@fuse/components/FuseAnimate/FuseAnimate";
import {connect} from "react-redux";
import * as bookingActions from "../actions/BookingActions";
import {bindActionCreators} from "redux";
import FormValidator from '../../validator/FormValidator';
import {BookingFormValidator} from "../../validator/forms/BookingFormValidator";
import {booking} from './others/BookingTemplate';
import {idGenerator} from '../../common/IdGenerator'


const vacationExtra = 0.125;
const staff = ["Tjener", "Bartender", "Kok", "Opvasker"];


class CreateBooking extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(BookingFormValidator);
        this.submitted = false;
        this.state = {
            selectedTab: 0,
            showFullPage: false,
            displayModal: false,
            bookings: [
                {
                    id: idGenerator(),
                    label: "Ny",
                    staffType: "",
                    numberOfStaff: "1",
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
        if(validation.isValid) {
            this.setState({displayModal: !this.state.displayModal})
        }
        // Force re render the component
        this.setState({state: this.state})
    };

    handleChangeTab = (e, tab) => {
        this.setState({selectedTab: tab})
    };

    showFullPageHandler = () => {
        this.setState({showFullPage: true})
    };

    addBooking = () => {
        let tempState = {...this.state};
        tempState.bookings[this.state.selectedTab].label = tempState.bookings[this.state.selectedTab].staffType;
        let newBooking = {...booking};
        newBooking.id = idGenerator();
        tempState.bookings.push(newBooking);
        debugger;
        this.setState({tempState});
        this.setState({displayModal: false});
        this.setState({selectedTab: this.state.selectedTab + 1});
    };

    createBooking = () => {
        // let bookings = [...this.state.bookings];
        // bookings.map(b => {
        //     this.props.actions.createBooking(b)
        // });
    };

    deleteBooking = () => {
        if (this.state.bookings.length > 1) {
            let tempBookings = [...this.state.bookings];
            let book = tempBookings[this.state.selectedTab];

            tempBookings = tempBookings.filter(b => b.id !== book.id);
            this.setState({bookings: tempBookings});

            if (this.state.selectedTab === 0) {
                this.setState({selectedTab: 0})
            }
            else if(this.state.selectedTab === 1 ) {
                this.setState({selectedTab: 0})
            } else {
                this.setState({selectedTab: this.state.selectedTab - 1})
            }
        }
    };


    workHours = () => {
        let {startTime, endTime} = this.state.bookings[this.state.selectedTab];

        startTime = startTime.replace(":", ".");
        endTime = endTime.replace(":", ".");

        if(startTime.charAt(3) === "3") {
            startTime = startTime.substring(0, 3) + '5';
        }
        if(endTime.charAt(3) === "3") {
            endTime = endTime.substring(0, 3) + '5';
        }
        startTime = parseFloat(startTime);
        endTime = parseFloat(endTime);

        // If endTime is less than startTime + 24 hours, and plus the rest with Math.abs
        if(endTime < startTime) {
            return (Math.abs(startTime - endTime) * 24);
        }
        // If endTime is bigger than starTime, then just do Math.abs
        else if(endTime > startTime) {
            return Math.abs(startTime - endTime);
        }
        else {
            return 1;
        }

    };

    /*
    * THE FOLLOWING IS ALL THE METHODS TO CHANGE THE DATA IN THE INPUT FIELD FOR A BOOKING
    * */

    // checkStaffType = (value) => {
    //     staff.map(staff => {
    //         if (value === staff) {
    //             return true;
    //         }
    //     });
    //     return false;
    // };


    setTotalPrice =  (tempState) => {
        // SETS TOTAL PRICE
        return parseFloat(tempState[this.state.selectedTab]["wageTotal"]) * parseInt(tempState[this.state.selectedTab]["numberOfStaff"]).toFixed(2) * this.workHours();
    };


    changeHandler = (e) => {

        let tempState = [...this.state.bookings];
        tempState[this.state.selectedTab][e.target.name] = e.target.value;

        // CHECKS THE LABEL ON THE TOP
        if(
            e.target.name == "staffType") {
            tempState[this.state.selectedTab]["label"] = e.target.value;
        }
        // IF HOURLY WAGE IS 0 SET ALL VALUES TO ZERO
        else if (parseFloat(tempState[this.state.selectedTab]["hourlyWage"]) < 1 || e.target.name === "hourlyWage" && isNaN(e.target.value)){
            tempState[this.state.selectedTab]["priceTotal"] = "0";
        }
        // IF HOURLY WAGE IS OVER 0 SET VALUES
        else if ((e.target.name === "hourlyWage")) {

            if (e.target.value > 0) {
                // SETS VALUES FOR WAGETOTAL
                tempState[this.state.selectedTab]["wageTotal"] = (parseFloat(e.target.value) + (e.target.value * vacationExtra) + this.diffWagePay()).toFixed(2);
                // SETS TOTAL PRICE
                let val = this.setTotalPrice(tempState);
                tempState[this.state.selectedTab]["priceTotal"] = val.toString();
            }
            else {
                tempState[this.state.selectedTab]["wageTotal"] = "0";
                tempState[this.state.selectedTab]["priceTotal"] = "0";
            }
        }
        else if (e.target.name === "startTime"|| e.target.name === "endTime") {

            // SETS TOTAL PRICE
            let val = this.setTotalPrice(tempState);
            tempState[this.state.selectedTab]["priceTotal"] = val.toString();
        }
        else if (e.target.name === "numberOfStaff") {

            if (tempState[this.state.selectedTab]["numberOfStaff"] > 0) {
                let val = parseFloat(tempState[this.state.selectedTab]["wageTotal"]) * parseInt(tempState[this.state.selectedTab]["numberOfStaff"]);
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

        if(!isNaN(parseFloat(nrVal))) {
            tempState[this.state.selectedTab]["wageTotal"] = (parseFloat(nrVal) +  (nrVal * vacationExtra) + this.diffWagePay()).toFixed(2);
            let val = this.setTotalPrice(tempState);
            tempState[this.state.selectedTab]["priceTotal"] = val.toString();
        }
        this.setState({bookings: tempState});
    };


    diffWagePay = () => {
        let dateDiff = this.diffDateCalculator();
        if (dateDiff <= 24) {
            return 99;
        } else if (dateDiff > 24 && dateDiff <= 48) {
            return 80;
        } else {
            return 30;
        }
    };

    diffDateCalculator = () => {
        let currentDate = new Date();
        let bookedDate = this.state.bookings[this.state.selectedTab]['date'];
        let bookedTime = this.state.bookings[this.state.selectedTab]['startTime'];
        let bookedDate_hour = parseInt(bookedTime.slice(0, 2));
        let bookedDate_min = parseInt(bookedTime.slice(3, 5));
        let newBookedDate = new Date(bookedDate.getFullYear(), bookedDate.getMonth(), bookedDate.getDate(), bookedDate_hour, bookedDate_min);
        let val = Math.abs(newBookedDate - currentDate);
        return Math.ceil(val / (1000 * 60 * 60 ));
    };


    render() {
        const {selectedTab, bookings, showFullPage, displayModal} = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.bookings[selectedTab]) : this.state.bookings[selectedTab].validation;

        return (
            <div className="md:flex ">
                <div className=" bg-white max-w-lg"  >
                    <div className="p-40 ">
                        <h1 className="font-sans text-4xl text-gray-800">Opret booking</h1>
                        <p className="py-10 text-gray-800 font-sans text-lg">Udfyld formularen og den sendes ud til
                            vores personale kl. 12:00<br/>
                            Er arrangement tættere end 48 timer, sendes jobbet ud til vores personale med det samme!
                        </p>
                        <FuseAnimate duration={700} animation={{translateX: [0, '100%']}}>
                            <div>
                                <AppBar position="static" color="default" >
                                    <Tabs value={selectedTab} indicatorColor="primary" className="w-full" style={{overflowY: "auto"}}
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

                                                displayBookingModalHandler={this.displayBookingModalHandler}
                                                dateHandler={this.dateHandler}
                                                createBooking={this.createBooking}
                                                deleteBooking={this.deleteBooking}
                                                changeHandler={this.changeHandler}
                                            />
                                        )
                                    ))
                                }
                            </div>
                        </FuseAnimate>
                    </div>
                </div>
                <div className="w-2/5 ">
                    {/*<img src={Photo2} className="" alt="tjenerTeam2" style={{height: '100%', width: '100%'}} />*/}
                    <img src={Photo} className="w-2xl fixed " alt="tjenerTeam2" />
                </div>
            </div>
        );
    }
}

function mapStateToProps() {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createBooking: bindActionCreators(bookingActions.createBooking, dispatch)
        }
    }
}


export default
connect(
    mapStateToProps,
    mapDispatchToProps)
(CreateBooking);

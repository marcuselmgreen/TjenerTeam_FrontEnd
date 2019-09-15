import React, {Component} from 'react';
import Image from "../../../static/tjenerteam2.jpg";
import {Card, CardContent} from "@material-ui/core";
import EditBookingForm from "./EditBookingForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookingActions from '../actions/Booking.actions'
import FormValidator from "../../../validator/FormValidator";
import {BookingFormValidator} from "../../../validator/forms/BookingFormValidator";
import * as GlobalPaths from "../../../../GlobalPaths";

class EditBooking extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator(BookingFormValidator);
        this.submitted = false;
        this.state = {
            booking: {
                _id: "",
                staffType: "",
                numberOfStaff: "1",
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
                selectedStaff: [],
                appliedStaff: [],
                validation: this.validator.valid()
            }
        }
    }

    editSubmitHandler = () => {
        this.props.actions.updateBooking(this.state.booking);
        this.props.history.push(GlobalPaths.homeCorporation);
    };

    changeHandler = (e) => {
        let tempState = {...this.state.booking};
        tempState[e.target.name] = e.target.value;
        this.setState({booking: tempState})
    };

    componentDidMount() {
        if(this.props.booking != null) {
            this.setState({booking: this.props.booking})
        }
    }

    render() {

        const {booking} = this.state;
        let validation = this.submitted ? this.validator.validate(this.state.booking) : this.state.booking;

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
                        <h1 className="font-sans text-4xl text-gray-800">Rediger booking</h1>
                        <EditBookingForm
                            editSubmitHandler={this.editSubmitHandler}
                            booking={booking}
                            changeHandler={this.changeHandler}
                            validation={validation}
                        />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        booking: state.bookings.booking
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            updateBooking: bindActionCreators(bookingActions.updateBooking, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBooking);

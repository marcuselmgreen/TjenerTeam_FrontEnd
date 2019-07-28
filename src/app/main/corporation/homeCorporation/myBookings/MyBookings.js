import React, {Component} from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Active from "./components/active/Active";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookingActions from "../../../booking/actions/Booking.actions";
import Dialog from "@material-ui/core/Dialog";
import ShowBooking from "./components/active/ShowBooking";
import {DialogContent} from "@material-ui/core";
import {idGenerator} from "../../../common/IdGenerator";


class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            activeBookings: [],
            showSpinner: true,
            showModal: false,
            showDeleteModal: false,
            booking: {
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
                selectedStaff: [],
                appliedStaff: [],
            }
        }
    }

    deleteBookingHandler = () => {
        console.log(this.state.booking);
        this.props.actions.deleteBooking(this.state.booking);
        this.setState({showModal: false, showDeleteModal: false})
    };

    showDeleteModalHandler = () => {
        this.setState({showDeleteModal: !this.state.showDeleteModal})
    };

    showModalHandler = () => {
        this.setState({showModal: !this.state.showModal})
    };

    componentWillReceiveProps(prevProps) {
        if (prevProps.bookings !== this.props.bookings) {
            const tempBookings = [...prevProps.bookings];
            this.setState({activeBookings: tempBookings, showSpinner: false});
        }
    }

    selectedBookingHandler = (book) => {
        this.setState({booking: book, showModal: true}, function () {
            console.log(this.state.booking)
        });
    };

    componentDidMount() {
        this.props.actions.loadBookings();
    }

    changeHandler = (e, tab) => {
        this.setState({selectedTab: tab});
    };

    render() {
        const {selectedTab, activeBookings, showSpinner, showModal, booking, showDeleteModal} = this.state;
        return (
            <div>
                <Tabs TabIndicatorProps={{style: {backgroundColor: "white"}}} className="mt-5" variant="scrollable"
                      value={selectedTab} onChange={this.changeHandler}>
                    <Tab label={<span style={{fontSize: '11px'}}>Aktive</span>}/>
                    <Tab label={<span style={{fontSize: '11px'}}>Venter Godkendelse</span>}/>
                    <Tab label={<span style={{fontSize: '11px'}}>Kladde</span>}/>
                </Tabs>
                {selectedTab === 0 &&
                <Active
                    selectedBookingHandler={this.selectedBookingHandler}
                    showSpinner={showSpinner}
                    activeBookings={activeBookings}
                />}
                {selectedTab === 1 && <h1>Venter Godkendelse</h1>}
                {selectedTab === 2 && <h1>Kladder</h1>}

                <Dialog
                    onClose={this.showModalHandler}
                    croll={'paper'}
                    aria-labelledby="simple-dialog-title"
                    open={showModal}>
                    <DialogContent style={{padding: '0px', margin: '0px'}} className="w-full" >
                        <ShowBooking
                            booking={booking}
                            showDeleteModal={showDeleteModal}
                            showDeleteModalHandler={this.showDeleteModalHandler}
                            deleteBookingHandler={this.deleteBookingHandler}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookings: state.bookings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadBookings: bindActionCreators(bookingActions.loadAllBookings, dispatch),
            deleteBooking: bindActionCreators(bookingActions.deleteBooking, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(MyBookings);

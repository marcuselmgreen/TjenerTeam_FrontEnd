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


class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            activeBookings: [],
            showSpinner: true
        }
    }


    componentWillReceiveProps(prevProps) {
        if (prevProps.bookings !== this.props.bookings) {
            const tempBookings = [...prevProps.bookings];
            this.setState({activeBookings: tempBookings, showSpinner: false});
        }
    }

    componentDidMount() {
        this.props.actions.loadBookings();
    }

    changeHandler = (e, tab) => {
        this.setState({selectedTab: tab});
    };

    render() {
        const {selectedTab, activeBookings, showSpinner} = this.state;
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
                    showSpinner={showSpinner}
                    activeBookings={activeBookings}
                />}
                {selectedTab === 1 && <h1>Venter Godkendelse</h1>}
                {selectedTab === 2 && <h1>Kladder</h1>}

                <Dialog
                    onClose={""}
                    croll={'paper'}
                    aria-labelledby="simple-dialog-title"
                    open={true}>
                    <DialogContent style={{padding: '0px', margin: '0px'}} className="w-full" >
                        <ShowBooking/>
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
            loadBookings: bindActionCreators(bookingActions.loadAllBookings, dispatch)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(MyBookings);

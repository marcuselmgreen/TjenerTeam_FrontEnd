import React, {Component} from 'react';
import Image from "../../static/tjenerteam2.jpg";
import {Card, CardContent} from "@material-ui/core";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as bookingActions from "../../corporation/booking/actions/Booking.actions";
import Active from "../../corporation/corporationPage/homeCorporation/myBookings/components/active/Active";
import * as GlobalPaths from '../../../GlobalPaths';

class EFrontPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBookings: [],
            showSpinner: true
        }
    }

    componentDidMount() {
        this.props.actions.loadMyBookings(this.props.user);
    }


    componentWillReceiveProps(prevProps) {
        if (prevProps.bookings !== this.props.bookings) {
            const tempBookings = [...prevProps.bookings];
            this.setState({activeBookings: tempBookings, showSpinner: false});
        }
    }

    navigateToLogin = () => {
        this.props.history.push(GlobalPaths.employeeLogin)
    };



    render() {
        const {activeBookings, showSpinner} = this.state;

        return (
            <>

                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Image + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                        <CardContent className="flex flex-col">
                            <h1 className="font-sans text-gray-800 pl-24 pr-24 mt-20" style={{fontSize: '40px'}}>Velkommen til JobButler</h1>
                            <h4 className="font-sans text-gray-600 pl-40 pr-24" style={{fontSize: '20px'}}>Søger freelance arbejde på få minutter</h4>
                            <Card className="p-24 max-w-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                                <Active
                                    activeBookings={activeBookings}
                                    selectedBookingHandler={this.navigateToLogin}
                                    showSpinner={showSpinner}
                                />
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    return {
        bookings: state.bookings.allBookings,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadMyBookings: bindActionCreators(bookingActions.loadAllBookings, dispatch),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(EFrontPage);

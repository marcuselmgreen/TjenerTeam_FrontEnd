import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {CardContent, Icon} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import 'moment/locale/da';

const Active = (props) => {

    const {
        activeBookings,
        showSpinner,
        selectedBookingHandler
    } = props;

    return (
        <> {showSpinner ?

            <div className="flex flex-col my-auto items-center bgimg bg-cover">
                <CircularProgress className="mt-40" size={60}/>
                <h3 className="mt-10">Indlæser bookings</h3>
            </div>

            :
            <>
                <h1>Aktive Bookings</h1>
                {activeBookings.map((b, i) => (
                    <Card onClick={() => selectedBookingHandler(b)} key={i} className="min-h-160 m-5 ">
                        <CardContent>
                            {/* DATE */}
                            <div className="w-full mt-20">
                                <div className="flex flex-wrap my-2">

                                    <div className="w-full sm:w-1/12">
                                        <div className="ml-76 sm:ml-0">
                                            <div>
                                                <span style={{fontSize: '29px'}}
                                                      className="">{moment(b.date).format('dddd').slice(0, 3).toUpperCase()}</span>
                                            </div>
                                            <div>
                                                <Typography color="textSecondary" gutterBottom>
                                                        <span style={{fontSize: '35px'}}
                                                              className="pl-1">{moment(b.date).format('ll').slice(1, 2).toUpperCase() === '.' ?
                                                            moment(b.date).format('ll').slice(0, 1).toUpperCase(): moment(b.date).format('ll').slice(0, 2).toUpperCase() }</span>
                                                </Typography>
                                            </div>
                                            <div>
                                                <span style={{fontSize: '29px'}}
                                                      className="pl-1">{moment(b.date).format('ll').slice(1, 2).toUpperCase() === '.' ?
                                                            moment(b.date).format('ll').slice(3, 6).toUpperCase() : moment(b.date).format('ll').slice(4, 7).toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-7/12 sm:pl-3  mt-2">
                                        <div className="pl-2 min-w-full">
                                            <div className="mt-6 min-h-32">
                                                <span className="ml-2" style={{
                                                    fontSize: '20px',
                                                    fontWeight: 'bold'
                                                }}>{b.arrangementType}</span>
                                            </div>
                                        </div>
                                        <div className="pl-2 min-w-full">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px',
                                                    fontWeight: 'bold'
                                                }}>{b.startTime + " - " + b.endTime}</span>
                                            <span style={{
                                                fontSize: '10px',
                                                fontWeight: 'bold'
                                            }}>{" + " + b.transportWage + " time transport"}</span>
                                        </div>
                                        <div className="ml-2 mt-5 pl-2 min-w-full">
                                            <p style={{fontSize: '12px'}}>{b.hourlyWage + "/t [" + b.wageTotal + "] (i alt inkl. feriepenge, " + b.priceTotal + " DKK)"}</p>
                                        </div>
                                        <div className="min-w-full mt-3">

                                            <Icon fontSize="default" className="ml-2 float-left">room</Icon>
                                            <p style={{fontSize: '12px'}}
                                               className="pt-2 float-left">{b.address + ", " + b.zipCode + " "}</p>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-4/12  mt-2">
                                        <div className="pl-2 min-w-full">
                                            <div className="mt-6 min-h-32">
                                                <span className="ml-2" style={{
                                                    fontSize: '20px',
                                                    fontWeight: 'bold'
                                                }}>{b.numberOfStaff + " " + b.staffType}</span>
                                            </div>
                                        </div>
                                        <div className="pl-8 min-w-full">
                                            <div className="">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px', fontWeight: 'bold'
                                                }}>{b.selectedStaff.length + " Booket"}</span>
                                            </div>
                                            <div className="">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px'
                                                }}>{b.appliedStaff.length + " Ansøgere"}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </>
        }

        </>
    );
};

export default Active;

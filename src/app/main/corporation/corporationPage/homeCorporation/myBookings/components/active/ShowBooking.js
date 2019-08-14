import React from 'react';
import Card from "@material-ui/core/Card";
import {Button, CardContent, DialogContent, Icon} from "@material-ui/core";
import moment from 'moment';
import 'moment/locale/da';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import {red, grey} from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import {workHours} from "../../../../../booking/createBooking/helper_functions/Helpers";

const ShowBooking = (props) => {

    const {
        booking,
        showDeleteModalHandler,
        deleteBookingHandler,
        editBookingHandler,
        showDeleteModal
    } = props;

    return (
            <div className="m-5 ">
                <CardContent>
                    {/* DATE */}

                    <div className="w-full mt-20">
                        <div className="flex flex-wrap my-2">

                            <div className="w-full sm:w-2/12">
                                <div className="ml-76 sm:ml-0">
                                    <div>
                                                <span style={{fontSize: '29px'}}
                                                      className="">{moment(booking.date).format('dddd').slice(0, 3).toUpperCase()}</span>
                                    </div>
                                    <div>
                                        <Typography color="textSecondary" gutterBottom>
                                                        <span style={{fontSize: '35px'}}
                                                              className="pl-1">{moment(booking.date).format('ll').slice(1, 2).toUpperCase() === '.' ?
                                                            moment(booking.date).format('ll').slice(0, 1).toUpperCase(): moment(booking.date).format('ll').slice(0, 2).toUpperCase() }</span>
                                        </Typography>
                                    </div>
                                    <div>
                                                <span style={{fontSize: '29px'}}
                                                      className="pl-1">{moment(booking.date).format('ll').slice(1, 2).toUpperCase() === '.' ?
                                                    moment(booking.date).format('ll').slice(3, 6).toUpperCase() : moment(booking.date).format('ll').slice(4, 7).toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full sm:w-6/12  mt-2">
                                <div className="pl-2 min-w-full">
                                    <div className="mt-6 min-h-32">
                                                <span className="ml-2" style={{
                                                    fontSize: '20px',
                                                    fontWeight: 'bold'
                                                }}>{booking.arrangementType}</span>
                                    </div>
                                </div>
                                <div className="pl-2 min-w-full">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px',
                                                    fontWeight: 'bold'
                                                }}>{booking.startTime+ " - " + booking.endTime}</span>
                                    <span style={{
                                        fontSize: '10px',
                                        fontWeight: 'bold'
                                    }}>{" + " + booking.transportWage + " time transport"}</span>
                                </div>
                                <div className="ml-2 mt-5 pl-2 min-w-full">
                                    <p style={{fontSize: '12px'}}>{booking.hourlyWage + "/t [" + booking.wageTotal + "] (i alt inkl. feriepenge, " + booking.priceTotal + " DKK)"}</p>
                                </div>
                                <div className="min-w-full mt-3">

                                    <Icon fontSize="default" className="ml-2 float-left">room</Icon>
                                    <p style={{fontSize: '12px'}}
                                       className="pt-2 float-left">{booking.address + ", " + booking.zipCode + " "}</p>
                                </div>
                            </div>
                            <div className="w-full sm:w-4/12  mt-2">
                                <div className="pl-2 min-w-full">
                                    <div className="mt-6 min-h-32">
                                                <span className="ml-2" style={{
                                                    fontSize: '20px',
                                                    fontWeight: 'bold'
                                                }}>{booking.numberOfStaff + " " + booking.staffType}</span>
                                    </div>
                                </div>
                                <div className="pl-8 min-w-full">
                                    <div className="">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px', fontWeight: 'bold'
                                                }}>{booking.appliedStaff.length + " Booket"}</span>
                                    </div>
                                    <div className="">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px'
                                                }}>{booking.selectedStaff.length + " Ansøgere"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-12">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-wrap my-2">
                            <div className="w-full">
                                <h4>Uddybende jobbeskrivelse</h4>
                                <p className="mt-1">{booking.jobDescription}</p>
                            </div>
                            <div className="w-full mt-5">
                                <h4>Hvordan kommer jeg ind?</h4>
                                <p className="mt-1">{booking.accessInformation}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-wrap my-2">
                            <div className="w-full">
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Team:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>test</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Sko:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.shoesDressCode === 'Andet' ? booking.shoesDressCodeOther : booking.shoesDressCode}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Buks:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.lowerDressCode === 'Andet' ? booking.lowerDressCodeOther : booking.lowerDressCodeOther}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Overdel:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.upperDressCode === 'Andet' ? booking.upperDressCodeOther : booking.upperDressCodeOther}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Medbring:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.itemToBring}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Overarbejde:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>Der er sandsynlighed for {booking.extraWorkHours} timer</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Personalemad:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.foodIncluded}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Sprog</p>
                                    </div>
                                    <div
                                        style={{wordWrap: 'break-word'}}
                                        className="w-full sm:w-3/5">
                                        <p style={{whiteSpace: 'initial'}}>{booking.languageSkill}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Kontaktperson:</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.contactPerson}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-2 mt-2">
                                    <div className="w-full sm:w-2/5">
                                        <p style={{fontWeight: 'bold'}}>Mobil nr</p>
                                    </div>
                                    <div className="w-full sm:w-3/5"
                                         style={{wordWrap: 'break-word'}}>
                                        <p>{booking.phoneNumber}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-wrap my-4">
                            <div className="w-full sm:w-1/5">
                                <h5 className="mt-3">Beskrivelse</h5>
                                <p>{booking.staffType}</p>
                            </div>
                            <div className="w-full sm:w-1/5">
                                <h5 className="mt-3">Antal</h5>
                                <p>{booking.numberOfStaff}</p>
                            </div>
                            <div className="w-full sm:w-1/5">
                                <h5 className="mt-3">Tid</h5>
                                <p>{workHours(booking)}</p>
                            </div>
                            <div className="w-full sm:w-1/5">
                                <h5 className="mt-3">Enhedspris</h5>
                                <p>{booking.hourlyWage + ' kr'}</p>
                            </div>
                            <div className="w-full sm:w-1/5">
                                <h5 className="mt-3">Pris</h5>
                                <p>{booking.priceTotal + ' kr'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-10">
                        <div className="flex flex-wrap my-4">
                            <div className="w-full sm:w-4/5">
                                <h5 className="">I alt eks. moms</h5>
                            </div>
                            <div className='w-full sm:w-1/5'>
                                <p>0 kr</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <hr style={{borderTop: '1px solid #cccccc'}}/>
                    </div>


                    <div className="w-full mt-20">
                        <div className="flex flex-wrap my-4">
                            <div className="w-full sm:w-3/5">
                                <DeleteButton
                                    onClick={showDeleteModalHandler}>
                                    Slet Booking
                                </DeleteButton>
                            </div>
                            <div className="w-full sm:w-2/5">
                                <EditButton
                                    onClick={editBookingHandler}
                                    style={{color: "white"}}>
                                    Rediger Booking
                                </EditButton>
                            </div>
                        </div>
                    </div>
                    <Dialog
                        onClose={showDeleteModalHandler}
                        croll={'paper'}
                        aria-labelledby="simple-dialog-title"
                        open={showDeleteModal}>
                        <DialogContent style={{padding: '0px', margin: '0px'}} className="w-full" >
                            <Card className="w-full mt-20 pr-10 pl-10 pb-10">
                                <div className="flex flex-wrap my-2">
                                    <p>Er du sikker på at slette?</p>
                                </div>
                                <div className="flex flex-wrap my-2">
                                    <div className="w-1/2">
                                        <DeleteButton
                                            onClick={deleteBookingHandler}>
                                            Slet
                                        </DeleteButton>
                                    </div>
                                    <div className="w-1/2">
                                        <EditButton
                                            style={{color: 'white'}}
                                            onClick={showDeleteModalHandler}>
                                            Fortryd
                                        </EditButton>
                                    </div>
                                </div>
                            </Card>
                        </DialogContent>
                    </Dialog>


                </CardContent>
            </div>
    );
};


const DeleteButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(red[800]),
        backgroundColor: red[800],
        '&:hover': {
            backgroundColor: red[700],
        },
    },
}))(Button);

const EditButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[500],
        '&:hover': {
            backgroundColor: grey[300],
        },
    },
}))(Button);

export default ShowBooking;

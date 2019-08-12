import React from 'react';
import {Modal} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";

const BookingModal = (props) => {

    const {
        displayModal,
        displayBookingModalHandler,
        addBooking,
        createBooking,
        bookingLength,
        loggedIn,
        nextStepBooking
    } = props;

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 45 + rand();
        const left = 40 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <div>
            <Modal
                open={displayModal}
                onClose={displayBookingModalHandler}
            >
                <div
                    style={modalStyle}
                    className="fixed pin z-50 overflow-auto bg-smoke-light flex">
                    <Card className="p-32">
                        <h2>Tak for din booking!</h2>
                        <h3 className="mt-24">{bookingLength === 3 ? "Du kan ikke tilføje flere bookings. Tryk videre" : "Du har nu følgende muligheder"}</h3>
                        <div className="flex flex-row my-2 ">
                            <div className="w-full sm:w-1/2 p-4">
                                <Button
                                    disabled={bookingLength === 3}
                                    onClick={addBooking}
                                    color="primary"
                                    variant="contained"
                                    className="w-full  sm:max-h-52 sm:min-h-52">
                                    <span style={{fontSize: "12px"}}>Tilføj ekstra personale+</span>
                                </Button>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                {loggedIn ?
                                    <SubmitButton
                                        variant="contained"
                                        className="w-full min-h-72 sm:max-h-52 sm:min-h-52"
                                        style={{color: "white"}}
                                        onClick={createBooking}
                                    ><span style={{fontSize: "12px"}}>Opret</span></SubmitButton>
                                    :
                                    <SubmitButton
                                        variant="contained"
                                        className="w-full min-h-72 sm:max-h-52 sm:min-h-52"
                                        style={{color: "white"}}
                                        onClick={nextStepBooking}
                                    ><span style={{fontSize: "12px"}}>Videre</span></SubmitButton>
                                }
                            </div>
                        </div>
                    </Card>
                </div>
            </Modal>
        </div>
    );
};

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);


export default BookingModal;

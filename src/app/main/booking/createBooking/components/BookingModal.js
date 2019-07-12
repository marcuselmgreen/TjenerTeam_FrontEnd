import React from 'react';
import {Modal} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import {green} from "@material-ui/core/colors";

const BookingModal = (props) => {

    const {
        displayModal,
        displayBookingModalHandler,
        addBooking,
        createBooking
    } = props;

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles(theme => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            outline: 'none',
        },
    }));

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    return (
        <>
            <Modal
                open={displayModal}
                onClose={displayBookingModalHandler}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Tak for din booking!</h2>
                    <h3 className="mt-24">Du har nu følgende muligheder</h3>
                    <div className="flex flex-row my-2 ">
                        <div className="w-full sm:w-1/2 p-4">
                            <Button
                                disabled
                                onClick={addBooking}
                                color="primary"
                                variant="contained"
                                className="w-full ">
                                Tilføj booking
                            </Button>
                        </div>
                        <div className="w-full sm:w-1/2 p-4">
                            <SubmitButton
                                variant="contained"
                                className="w-full"
                                style={{color: "white"}}
                                onClick={createBooking}
                            >Videre</SubmitButton>
                        </div>

                    </div>
                </div>

            </Modal>


        </>
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

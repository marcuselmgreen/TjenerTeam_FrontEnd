import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {yellow} from "@material-ui/core/colors";
import {Button} from "@material-ui/core";

class HomeCorporation extends Component {
    render () {
        return (
            <div>
                <SubmitButton
                    style={{color: "white"}}
                >Ny Booking</SubmitButton>
                <h1>Hello from corporation place. You are logged in</h1>
            </div>
        );
    }
}

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(yellow[800]),
        backgroundColor: yellow[800],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
}))(Button);


export default HomeCorporation;

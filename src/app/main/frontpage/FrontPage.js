import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {grey, lightBlue} from "@material-ui/core/colors";
import * as globalPaths from '../../GlobalPaths';
import {AppBar} from "@material-ui/core";

const styles = () => ({
    layoutRoot: {}
});

class FrontPage extends Component {

    routeCreateAccount = () => {
        this.props.history.push(globalPaths.createBooking);
    };

    // routeCreateBookingAndAccount() {
    //     let path = `localhost:3001/createCorporation`;
    //     this.props.history.push(path);
    // }

    routeLogin = () => {
        this.props.history.push(globalPaths.login);
    };


    render() {
        return (
            <>
                <div style={{
                    backgroundImage: "url(http://www.tjenerteamet.dk/uploads/2/5/9/3/25935474/background-images/1469395321.png)",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="flex h-screen">
                        <div className="m-auto ">
                            <div className="text-center ">
                                <h1 className="text-6xl font-serif text-white">Virksomhed</h1>
                                <p style={{color: 'white'}}></p>
                            </div>
                            <div className="mt-16 min-w-320">
                                <div className="text-center">
                                    <SubmitButton
                                        onClick={this.routeCreateAccount}
                                        className="w-full h-full"
                                        style={{color: "white", textTransform: "none"}}>
                                        Kom igang
                                    </SubmitButton>
                                </div>
                                <div className="text-center">
                                    <CreateButton
                                        onClick={this.routeLogin}
                                        style={{textTransform: "none"}}
                                        className="mt-5  w-full h-full ">
                                        Login
                                    </CreateButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[500],
        '&:hover': {
            backgroundColor: lightBlue[700],
        },
    },
}))(Button);

const CreateButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[200],
        '&:hover': {
            backgroundColor: grey[400],
        },
    },
}))(Button);


export default withStyles(styles, {withTheme: true})(FrontPage);

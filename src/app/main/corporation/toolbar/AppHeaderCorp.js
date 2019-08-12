import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../../auth/store/actions/user.actions"
import * as loginActions from "../../../auth/store/actions/login.actions"
import * as bookingActions from '../booking/actions/Booking.actions';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import * as GlobalPaths from "../../../GlobalPaths";
import {Icon} from "@material-ui/core";
import {green, yellow} from "@material-ui/core/colors";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
});

class AppHeaderCorp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOption: false,
            anchorEl: undefined
        };

    }

    logOutHandler = () => {
        this.props.actions.hideFullCreateBookingPage();
        this.props.actions.logOut();
        this.props.actions.logUserOut();
    };


    menuShowHandler = (e) => {
        this.setState({menuOption: !this.state.menuOption, anchorEl: e.currentTarget})
    };


    render() {

        const {classes, changePage} = this.props;

        return (
            <>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                                    className={classes.menuButton} onClick={this.menuShowHandler} color="inherit"
                                    aria-label="menu">
                            <Icon fontSize="default"
                                  className="">person</Icon>
                            <p style={{fontSize: '17px'}}>Profil</p>

                        </IconButton>
                        <IconButton edge="start" aria-controls="simple-menu" aria-haspopup="true"
                                    className={classes.menuButton}
                                    onClick={() => changePage(GlobalPaths.homeCorporation)} color="inherit"
                                    aria-label="menu">
                            <Icon fontSize="default">home</Icon>
                            <p style={{fontSize: '17px'}}>Hjem</p>

                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                        </Typography>

                        {/*<SubmitButton style={{color: 'white'}} onClick={() => changePage(GlobalPaths.createBooking)}>Book personale</SubmitButton>*/}

                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={this.state.menuOption}
                            onClose={this.menuShowHandler}
                        >
                            <MenuItem className="min-w-224"
                                      onClick={() => changePage(GlobalPaths.editCorporationProfile)}>Rediger
                                Profil</MenuItem>
                            <MenuItem>Kontakt</MenuItem>
                            <MenuItem>Hjælp</MenuItem>
                            <div className="w-full pl-2 pr-2">
                                <hr style={{borderTop: '1px solid #cccccc'}}/>
                            </div>
                            <MenuItem onClick={this.logOutHandler}>Log ud</MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>
            </>
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

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            logUserOut: bindActionCreators(userActions.logoutUser, dispatch),
            logOut: bindActionCreators(loginActions.logout, dispatch),
            hideFullCreateBookingPage: bindActionCreators(bookingActions.hideFullCreateBookingPage, dispatch)

        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(withStyles(styles)(AppHeaderCorp));

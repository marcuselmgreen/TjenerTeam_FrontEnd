import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../auth/store/actions/user.actions"
import * as loginActions from "../../auth/store/actions/login.actions"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    logOutHandler = () => {
        this.props.actions.logOut();
        this.props.actions.logUserOut();
    };


    render() {

        const { classes } = this.props;

        return (
            <>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        </Typography>
                        <Button onClick={this.logOutHandler} color="inherit">Log ud</Button>
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            logUserOut: bindActionCreators(userActions.logoutUser, dispatch),
            logOut: bindActionCreators(loginActions.logout, dispatch)

        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(withStyles(styles)(AppHeader));

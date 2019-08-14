import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {yellow} from "@material-ui/core/colors";
import {Button, Card, CardContent} from "@material-ui/core";
import Photo from "../../../static/tjenerTeam2.png";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MyBookings from './myBookings/MyBookings';
import * as GlobalPaths from "../../../../GlobalPaths";
import AppHeader from "../../toolbar/AppHeaderCorp";

class HomeCorporation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
    }

    createBooking = () => {
        this.props.history.push(GlobalPaths.createBooking);
    };

    changeHandler = (e, tab) => {
        this.setState({selectedTab: tab})
    };

    nextPage = () => {
        this.props.history.push(GlobalPaths.editBooking);
    };

    changePage = (url) => {
        this.props.history.push(url);
    };


    render() {
        const {selectedTab} = this.state;
        return (
            <>
                <AppHeader
                    changePage={this.changePage}
                    />
                <div style={{
                    width: '100%',
                    backgroundImage: "url(" + Photo + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} className="flex flex-col flex-auto flex-shrink-0 p-16 md:flex-row md:p-0">
                    <Card className="w-full max-w-lg mx-auto m-16 md:m-0" square>
                        <CardContent className="flex flex-col ">
                            <Card className="p-24 max-w-lg"
                                  style={{backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                                <p className="font-sans text-2xl">TjenerTeamet</p>
                                <p className="mt-3 font-sans text-lg pl-4 text-gray-600">Her kan du book personale til
                                    jeres arrangement</p>
                                <SubmitButton
                                    onClick={this.createBooking}
                                    className="min-w-160 min-h-48 mt-5"
                                    style={{color: "white"}}
                                >Book Personale</SubmitButton>
                                <Tabs className="mt-5" variant="scrollable" value={selectedTab}
                                      onChange={this.changeHandler}>
                                    <Tab label="Beskeder"/>
                                    <Tab label="Mine bookinger"/>
                                    <Tab label="Afsluttede"/>
                                    <Tab label="Favoritter"/>
                                </Tabs>
                                <hr className="w-full" style={{borderTop: '1px solid gray', margin: '0px'}}/>
                                {selectedTab === 0 && <h1>Beskeder (Ikke færdigt)</h1>}
                                {selectedTab === 1 && <MyBookings nextPage={this.nextPage}/>}
                                {selectedTab === 2 && <h1>Afsluttede bookings (ikke færdigt)</h1>}
                                {selectedTab === 3 && <h1>Favoritter (ikke færdigt)</h1>}

                            </Card>

                        </CardContent>
                    </Card>
                </div>
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


export default HomeCorporation;

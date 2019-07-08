import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Card from "@material-ui/core/Card/Card";
import Photo from "../../static/tjenerTeam2.png";
import Photo2 from "../../static/GreyBackground.png";
import Booking from "./Booking";
import FuseAnimate from "../../../../@fuse/components/FuseAnimate/FuseAnimate";

let booking =
    {
        id: "",
        label: "Ny",
        staffType: "",
        numberOfStaff: "",
        date: new Date(),
        startTime: "",
        endTime: "",
        contactPerson: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        arrangementType: "",
        arrangementTypeOther: "",
        extraWorkHours: "",
        foodIncluded: "",
        jobDescription: "",
        accessInformation: "",
        upperDressCode: "",
        upperDressCodeOther: "",
        lowerDressCode: "",
        lowerDressCodeOther: "",
        shoesDressCode: "",
        shoesDressCodeOther: "",
        itemToBring: "",
        languageSkill: "",
        staffGender: "",
        jobExperience: ""

    };

class CreateBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
            showFullPage: false,
            bookings: [
                    {
                        id: this.idGenerator(),
                        label: "Ny",
                        staffType: "",
                        numberOfStaff: "",
                        date: new Date(),
                        startTime: "",
                        endTime: "",
                        contactPerson: "",
                        phoneNumber: "",
                        address: "",
                        zipCode: "",
                        arrangementType: "",
                        arrangementTypeOther: "",
                        extraWorkHours: "",
                        foodIncluded: "",
                        jobDescription: "",
                        accessInformation: "",
                        upperDressCode: "",
                        upperDressCodeOther: "",
                        lowerDressCode: "",
                        lowerDressCodeOther: "",
                        shoesDressCode: "",
                        shoesDressCodeOther: "",
                        itemToBring: "",
                        languageSkill: "",
                        staffGender: "",
                        jobExperience: ""

                    }
            ],
        }
    }

    idGenerator = () => {
        let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };


    handleChangeTab = (e, tab) => {
        this.setState({selectedTab: tab})
    };

    showFullPageHandler = () => {
        this.setState({showFullPage: true})
    };

    addBooking = () => {
        let tempState = {...this.state};
        tempState.bookings[this.state.selectedTab].label = tempState.bookings[this.state.selectedTab].staffType;
        let newBooking = {...booking};
        newBooking.id = this.idGenerator();
        tempState.bookings.push(newBooking);
        debugger;
        this.setState({tempState});
        this.setState({selectedTab: this.state.selectedTab + 1});
    };

    createBooking = () => {
        console.log(this.state.bookings)
    };

    deleteBooking = () => {
        if (this.state.bookings.length > 1) {
            let tempBookings = [...this.state.bookings];
            let book = tempBookings[this.state.selectedTab];

            tempBookings = tempBookings.filter(b => b.id !== book.id);
            this.setState({bookings: tempBookings});

            if (this.state.selectedTab === 0) {
                this.setState({selectedTab: 0})
            }
            else if(this.state.selectedTab === 1 ) {
                this.setState({selectedTab: 0})
            } else {
                this.setState({selectedTab: this.selectedTab - 1})
            }
        }
    };

   /*
   * THE FOLLOWING IS ALL THE METHODS TO CHANGE THE DATA IN THE INPUT FIELD FOR A BOOKING
   * */

   changeHandler = (e) => {
       let tempState = [...this.state.bookings];
       tempState[this.state.selectedTab][e.target.name] = e.target.value;
       this.setState({bookings: tempState})
   };

   dateHandler = (date) => {
       let tempState = [...this.state.bookings];
       tempState[this.state.selectedTab].date = date;
       this.setState({bookings: tempState});
   };

    render() {


        const {selectedTab, bookings, showFullPage} = this.state;


        return (
                <div className="md:flex ">
                    <div className=" bg-white max-w-lg"  >
                        <div className="p-40 ">
                            <h1 className="font-sans text-4xl text-gray-800">Opret booking</h1>
                            <p className="py-10 text-gray-800 font-sans text-lg">Udfyld formularen og den sendes ud til
                                vores personale kl. 12:00<br/>
                                Er arrangement tættere end 48 timer, sendes jobbet ud til vores personale med det samme!
                            </p>
                            <FuseAnimate duration={700} animation={{translateX: [0, '100%']}}>
                                <div>
                                    <AppBar position="static" color="default" >
                                        <Tabs value={selectedTab} indicatorColor="primary"
                                              onChange={this.handleChangeTab}>
                                            {bookings.map((bookings, index) => (
                                                <Tab
                                                    key={index}
                                                    label={bookings.label}/>
                                            ))}
                                        </Tabs>
                                    </AppBar>

                                    {
                                        bookings.map((bookings, index) => (
                                            (selectedTab === index &&
                                                <Booking
                                                    showFullPage={showFullPage}

                                                    bookingLength={this.state.bookings.length - 1}
                                                    selectedTab={selectedTab}
                                                    addBooking={this.addBooking}
                                                    key={index}
                                                    label={bookings.label}
                                                    staffType={bookings.staffType}
                                                    numberOfStaff={bookings.numberOfStaff}
                                                    date={bookings.date}
                                                    startTime={bookings.startTime}
                                                    endTime={bookings.endTime}
                                                    contactPerson={bookings.contactPerson}
                                                    phoneNumber={bookings.phoneNumber}
                                                    address={bookings.address}
                                                    zipCode={bookings.zipCode}
                                                    arrangementType={bookings.arrangementType}
                                                    arrangementTypeOther={bookings.arrangementTypeOther}
                                                    extraWorkHours={bookings.extraWorkHours}
                                                    foodIncluded={bookings.foodIncluded}
                                                    jobDescription={bookings.jobDescription}
                                                    accessInformation={bookings.accessInformation}
                                                    upperDressCode={bookings.upperDressCode}
                                                    upperDressCodeOther={bookings.upperDressCodeOther}
                                                    lowerDressCode={bookings.lowerDressCode}
                                                    lowerDressCodeOther={bookings.lowerDressCodeOther}
                                                    shoesDressCode={bookings.shoesDressCode}
                                                    shoesDressCodeOther={bookings.shoesDressCodeOther}
                                                    itemToBring={bookings.itemToBring}
                                                    languageSkill={bookings.languageSkill}
                                                    staffGender={bookings.staffGender}
                                                    jobExperience={bookings.jobExperience}

                                                    showFullPageHandler={this.showFullPageHandler}

                                                    dateHandler={this.dateHandler}
                                                    createBooking={this.createBooking}
                                                    deleteBooking={this.deleteBooking}
                                                    changeHandler={this.changeHandler}
                                                />
                                            )
                                        ))
                                    }
                                </div>
                            </FuseAnimate>
                        </div>
                    </div>
                    <div className="w-2/5 ">
                    {/*<img src={Photo2} className="" alt="tjenerTeam2" style={{height: '100%', width: '100%'}} />*/}

                    <img src={Photo} className="w-2xl fixed " alt="tjenerTeam2" />
                    </div>
                </div>
        );
    }
}

export default CreateBooking;

import React from 'react';
import {Card, TextField} from "@material-ui/core";
import './AboutYou.css';
import Button from "@material-ui/core/Button";
import Car from '../../../../static/car.png';
import DriverLicense from '../../../../static/driver-license.png';

const AboutYou = (props) => {

    const {
        moveBackward,
        moveForward,
        changeCarHandler,
        changeHandler,
        user
    } = props;


    const driversLicence = "driversLicence";
    const ownCar = "ownCar";

    return (
        <Card className="px-20 mt-20 pb-52 pt-10">
            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl">Færdiggør din profil</h2>
                </div>
            </div>


            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <p className="text-md sm:text-lg">Fortæl os lidt om dig selv</p>
                </div>
            </div>

            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <p className="text-md sm:text-lg">
                        Du vil aldrig gå på en date uden at vide en en smule om din partner <br/>
                        Hjælp os med at lære dig at kende, så vi kan finde de bedste jobs til dig
                    </p>
                </div>
            </div>

            <div className="flex mb-10">
                <div className="w-full">
                    <p className="text-md sm:text-lg font-bold mb-4">
                        Adresse
                    </p>
                    <TextField
                        name="address"
                        id="address"
                        onChange={(e) => changeHandler(e)}
                        label="Gammel kongevej 20, 4th"
                        variant="outlined"
                        className="w-full"
                    />
                </div>
            </div>

            <div className="flex mb-10">
                <div className="w-1/2">
                    <p className="text-md sm:text-lg font-bold mb-4">
                        Post nr.
                    </p>
                    <TextField
                        name="zipCode"
                        id="zip-address"
                        type="number"
                        onChange={(e) => changeHandler(e)}
                        label="1610"
                        variant="outlined"
                        className="w-full pr-8"
                    />
                </div>

                <div className="w-1/2">
                    <p className="text-md sm:text-lg font-bold mb-4">
                        Telefon nr.
                    </p>
                    <TextField
                        name="phoneNumber"
                        type="number"
                        id="phoneNumber"
                        onChange={(e) => changeHandler(e)}
                        label="12345678"
                        variant="outlined"
                        className="w-full"
                    />
                </div>
            </div>

            <div className="flex mb-10">
                <div className="w-full">
                    <p className="text-md sm:text-lg font-bold mb-4">
                        Derfor skal i hyre mig (profil tekst)
                    </p>
                    <TextField
                        name="description"
                        multiline
                        onChange={(e) => changeHandler(e)}
                        id="description"
                        label="I min fritid kan jeg godt lide..."
                        variant="outlined"
                        className="w-full"

                    />
                </div>
            </div>


            <div className="flex mb-5 sm:mb-8">
                <div className="w-full text-center">
                    <p className="text-md sm:text-lg font-bold">
                        Tryk følgende af, hvis du er i besiddelse af dem
                    </p>
                </div>
            </div>

            <div className="flex">
                <div className="flex-1 mr-5">
                    <Button variant="contained" onClick={() => changeCarHandler(driversLicence, true)}
                            className={user.driversLicence ? "drivers-license-clicked text-md w-full min-h-80" : "drivers-license text-md w-full min-h-80"}>Jeg
                        har kørekort <img src={DriverLicense} className="ml-5 car-icon" alt=""/></Button>

                </div>

                <div className="flex-1 ml-5">
                    <Button variant="contained" onClick={() => changeCarHandler(ownCar, true)}
                            className={user.ownCar ? "drivers-license-clicked text-md w-full min-h-80" : "drivers-license text-md w-full min-h-80"}>Jeg
                        har egen bil <img src={Car} className="ml-5 car-icon" alt=""/></Button>
                </div>
            </div>

            <div className="flex mt-40 sm:mt-30">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex m-auto py-8 px-32 sm:px-56 bBtn "><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={moveForward} className="flex m-auto py-8 px-32 sm:px-56 sBtn"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
};

export default AboutYou;

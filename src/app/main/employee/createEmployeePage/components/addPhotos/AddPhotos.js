import React from 'react';
import {Card} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import './AddPhotos.css';
import WaiterBody from "../../../../static/waiterBody.png";
import WaiterProfile from "../../../../static/waiterProfile.png";


const AddPhotos = (props) => {

    const {
        moveBackward,
        moveForward
    } = props;

    return (
        <Card className="pl-20 pr-20 pb-52 pt-10">

            <div className="flex mb-4">
                <div className="w-1/2">
                    <div className="flex justify-center mb-4">
                        <img className="waiter-profile" src={WaiterProfile} alt=""/>
                    </div>
                    <p className="text-center text-lg">Profil</p>
                    <div className="flex justify-center">
                        <Button variant="contained" color="primary">Upload</Button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-center mb-4">
                        <img className="waiter-body" src={WaiterBody} alt=""/>
                    </div>
                    <p className="text-center text-lg">Uniform</p>
                    <div className="flex justify-center">
                        <Button variant="contained" color="primary">Upload</Button>
                    </div>
                </div>
            </div>

            <div className="flex mb-4">
                <div className="w-full">
                    <p className="text-center text-lg p-20">For at kunden har bedst mulighed for at finde den
                        profil, som de søger, er det derfor vigtigt at du fremviser professionale billeder
                    </p>
                </div>
            </div>

            <div className="flex mb-4">
                <div className="w-full">
                    <div className="flex justify-center">
                        <div className="w-400">
                            <p className="font-bold text-lg mb-4">1. Upload profil billede som smilende</p>
                            <p className="font-bold text-lg mb-4">2. Vis skjorte (arbejdstøj)</p>
                            <p className="font-bold text-lg mb-4">3. Det bliver godkendt efterfølgende</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex mb-4">
                <div className="w-full">
                    <div className="flex justify-center">
                        <p className="font-sans mt-20 text-base text-center">Hver anden torsdag kan du fået taget billeder
                            professionelt. Det koster 168,75 kr
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex">
            <div className="w-1/2">
                <div className="flex justify-center">
                    <Button onClick={moveBackward} className="backButton">Tilbage</Button>
                </div>
            </div>

            <div className="w-1/2">
                <div className="flex justify-center">
                    <Button onClick={moveForward} className="submitButton">Videre</Button>
                </div>
            </div>
        </div>


        </Card>
    );
};

export default AddPhotos;

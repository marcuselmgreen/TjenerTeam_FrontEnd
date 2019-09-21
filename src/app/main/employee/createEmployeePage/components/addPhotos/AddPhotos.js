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
        <Card className="px-20 pb-52 pt-10 mt-10">

            <div className="flex mb-4">
                <div className="w-1/2">
                    <div className="flex justify-center mb-4">
                        <img className="waiter-profile" src={WaiterProfile} alt=""/>
                    </div>
                    <p className="text-center text-lg">Profil</p>
                    <div className="flex justify-center">
                        <Button className="upload-btn" variant="contained" color="primary">Upload</Button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex justify-center mb-4">
                        <img className="waiter-body" src={WaiterBody} alt=""/>
                    </div>
                    <p className="text-center text-lg">Uniform</p>
                    <div className="flex justify-center">
                        <Button className="upload-btn" variant="contained" color="primary">Upload</Button>
                    </div>
                </div>
            </div>

            <div className="flex sm:mb-4">
                <div className="w-full">
                    <p className="text-center text-lg p-20">For at kunden har bedst mulighed for at finde den
                        profil, som de søger, er det derfor vigtigt at du fremviser professionale billeder
                    </p>
                </div>
            </div>
            <div className="flex sm:mb-4">
                <div className="w-400 w-4/6 m-auto">
                    <p className="font-bold list-text mb-4">1. Upload profil billede som smilende</p>
                    <p className="font-bold list-text mb-4">2. Vis skjorte (arbejdstøj)</p>
                    <p className="font-bold list-text sm:mb-4">3. Det bliver godkendt efterfølgende</p>
                </div>
            </div>

            <div className="flex mb-4">
                <div className="w-full">
                    <div className="flex justify-center">
                        <p className="font-sans mt-20 price-text text-center">Hver anden torsdag kan du fået taget billeder
                            professionelt. Det koster 168,75 kr
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 scaled">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex bBtn w-3/4 sm:min-h-60 m-auto "><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={moveForward} className="flex sBtn w-3/4 sm:min-h-60 m-auto"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
};

export default AddPhotos;

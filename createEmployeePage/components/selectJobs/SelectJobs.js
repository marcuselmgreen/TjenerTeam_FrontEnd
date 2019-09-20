import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import './SelectJobs.css';

const SelectJobs = (props) => {

    const {
        jobHandler,
        doesContainsJob,
        moveForward,
        selectJobs,
        user

    } = props;

    return (

        <>
            <h1 className="font-sans text-gray-800 mt-20 welcomeTitle defFont ">Velkommen, {user.name}! </h1>
            <p className="font-sans text-gray-600 subTitle defFont"><br/>Udfyld spørgsmålene for at
                komme i gang med at søge arbejde!</p>

            <span className="underline"></span>
            <Card className="p-10">
                <p className="font-sans sm:mt-10 optText">Vælg de jobs du er interesseret i</p>

                <div className="flex mt-20 scaled">
                    <div className="flex-1 mr-2">
                        <Button
                            name='Bartender'
                            variant="outlined"
                            onClick={() => jobHandler('Bartender')}
                            className={doesContainsJob('Bartender') ? 'btnSelected w-full h-40 sm:min-h-80' : ' w-full h-40 sm:min-h-80'}><span className="defFont optionBtn">Bartender</span></Button>
                    </div>

                    <div className="flex-1 ml-2">
                        <Button
                            name='Waiter'
                            variant="outlined"
                            onClick={() => jobHandler('Waiter')}
                            className={doesContainsJob('Waiter') ? 'btnSelected w-full h-40 sm:min-h-80' : 'w-full h-40 sm:min-h-80'}><span className="defFont optionBtn">Tjener</span></Button>
                    </div>
                </div>
                <div className="flex mt-5 sm:mt-10 scaled">
                    <div className="flex-1 mr-2"></div>
                    <div className="flex-1 ml-2">
                        <Button onClick={moveForward} disabled={selectJobs.length < 1} className="flex btn w-3/4 sm:min-h-60 m-auto"><span className="proceedBtn">Videre</span></Button>
                    </div>             
                </div>
                </Card>
            </>
    );
};

export default SelectJobs;

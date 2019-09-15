import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
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

            <Card  className="p-20 pb-52">
                <p className="font-sans mt-10 text-lg ">Vælg de jobs du er interesseret i</p>

                <div className="flex mt-20">

                    <div className="flex-1 m-8">
                        <Button
                            name='Bartender'
                            variant="outlined"
                            onClick={() => jobHandler('Bartender')}
                            className={doesContainsJob('Bartender') ? 'btnSelected w-full min-h-80' : ' w-full min-h-80'}><span className="defFont optionBtn">Bartender</span></Button>
                    </div>

                    <div className="flex-1 m-8">
                        <Button
                            name='Waiter'
                            variant="outlined"
                            onClick={() => jobHandler('Waiter')}
                            className={doesContainsJob('Waiter') ? 'btnSelected w-full min-h-80' : ' w-full min-h-80'}><span className="defFont optionBtn">Tjener</span></Button>
                    </div>
                </div>

                <div className="w-full">
                    <Button onClick={moveForward} disabled={selectJobs.length < 1} className="submitButton">Videre</Button>
                </div>
            </Card>
            </>
    );
};

export default SelectJobs;

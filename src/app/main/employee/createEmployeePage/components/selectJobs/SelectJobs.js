import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import './SelectJobs.css';

const SelectJobs = (props) => {

    const {
        jobHandler,
        doesContainsJob,
        moveForward,
        selectJobs

    } = props;

    return (
            <Card  className="p-20 pb-52">
                <h1 className="font-sans mt-20 jobTitle defFont ">Vælg de jobs du er interesseret i</h1>

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
    );
};

export default SelectJobs;

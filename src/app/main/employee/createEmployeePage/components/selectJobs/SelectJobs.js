import React from 'react';
import {Card, CardContent, FormGroup, FormControlLabel, Button, Checkbox} from "@material-ui/core";
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
            <h1 className="font-sans font-bold mt-20 text-lg defFont text-center">Velkommen, {user.name}! </h1>
            <p className="font-sans font-bold defFont text-md text-center"><br/>Udfyld spørgsmålene for at
                komme i gang med at søge arbejde!</p>

            <span className="underline"></span>
            <Card className="p-10">
                <p className="font-sans sm:mt-10 text-md text-center">Vælg de jobs du er interesseret i</p>

                <div className="flex mt-20">
                    <div className="flex-1 mr-2 checkBox">
                        <FormGroup>
                            <FormControlLabel
                                className="relative w-full min-h-56 justify-center"
                                control={
                                    <Checkbox
                                        name='Bartender'
                                        className="defFont"
                                        onClick={() => jobHandler('Bartender')}
                                        checked={doesContainsJob('Bartender')}
                                        color="primary"
                                    />
                                }
                                label="Bartender"
                            />
                        </FormGroup>
                    </div>

                    <div className="flex-1 ml-2 checkBox">
                        <FormGroup>
                            <FormControlLabel
                                className="relative w-full min-h-56 justify-center"
                                control={
                                    <Checkbox
                                        name='Waiter'
                                        className="defFont"
                                        onClick={() => jobHandler('Waiter')}
                                        checked={doesContainsJob('Waiter')}
                                        color="primary"
                                    />
                                }
                                label="Waiter"
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="flex mt-40 sm:mt-30 justify-center sm:justify-end">
                    <div className="flex sm:justify-center sm:w-1/2">
                        <Button onClick={moveForward} disabled={selectJobs.length < 1} className="btn py-8 px-56"><span className="proceedBtn">Videre</span></Button>
                    </div>             
                </div>
                </Card>
            </>
    );
};

export default SelectJobs;

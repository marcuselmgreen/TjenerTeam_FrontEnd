import React from 'react';
import { Card, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import './WorkPlaces.css';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const WorkPlaces = (props) => {

    const {
        selectCities,
        cityHandler,
        doesContainCity,
        moveForward,
        moveBackward
    } = props;

    return (
        <Card className="pb-52 sm:px-8 mt-10 sm:mt-0 flex flex-col">
            <p className="font-sans mt-10 text-lg mx-5 mb-5">Hvor kan du arbejde henne?</p>

            <div className="flex flex-row scaled ">

                <div className="flex-1 m-8 p-4 checkBox scaled">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="copenhagen"
                                    checked={doesContainCity('copenhagen')}
                                    onClick={() => cityHandler('copenhagen')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="København"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="northZealand"
                                    checked={doesContainCity('northZealand')}
                                    onClick={() => cityHandler('northZealand')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nordsjælland"
                        />
                    </FormGroup>
                </div>
            </div>

            <div className="flex flex-row scaled ">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="bornholm"
                                    checked={doesContainCity('bornholm')}
                                    onClick={() => cityHandler('bornholm')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Bornholm"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">

                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name='North Jutland'
                                    checked={doesContainCity('North Jutland')}
                                    onChange={() => cityHandler('North Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nordjylland"
                        />
                    </FormGroup>
                </div>
            </div>


            <div className="flex flex-row scaled">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="fyn"
                                    checked={doesContainCity('fyn')}
                                    onClick={() => cityHandler('fyn')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Fyn og øerne"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name='Southern Jutland'
                                    checked={doesContainCity('Southern Jutland')}
                                    onClick={() => cityHandler('Southern Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Sønderjylland"
                        />
                    </FormGroup>
                </div>
            </div>

            <div className="flex flex-row scaled">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name='North Vest Jutland'
                                    checked={doesContainCity('North Vest Jutland')}
                                    onClick={() => cityHandler('North Vest Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nordvest Jylland"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name='East Jutland'
                                    checked={doesContainCity('East Jutland')}
                                    onChange={() => cityHandler('East Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Østjylland"
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="flex flex-row scaled">
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="otherZealand"
                                    checked={doesContainCity('otherZealand')}
                                    onClick={() => cityHandler('otherZealand')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Øst- Midt- Vest- Syd- Sjælland"
                        />
                    </FormGroup>
                </div>
                <div className="sm:flex-1 sm:m-8 sm:p-4">

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

export default WorkPlaces;
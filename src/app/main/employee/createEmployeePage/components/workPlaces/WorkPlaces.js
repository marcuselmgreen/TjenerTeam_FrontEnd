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
            <p className="font-sans mt-10 text-md text-center mx-5 mb-5">Hvor kan du arbejde henne?</p>

            <div className="flex flex-row">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative justify-center h-64"
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

            <div className="flex flex-row mt-5">
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative h-64 justify-center "
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="WestZealand"
                                    checked={doesContainCity('WestZealand')}
                                    onClick={() => cityHandler('WestZealand')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Vestsjælland"
                        />
                    </FormGroup>
                </div>

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative h-64 justify-center font-bold"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name=""
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
            </div>
            <div className="flex flex-row">

                <div className="flex-1 m-8 p-4 checkBox mb-12 mt-5">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative justify-center h-64"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="southZealand"
                                    checked={doesContainCity('southZealand')}
                                    onClick={() => cityHandler('southZealand')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Sydsjælland"
                        />
                    </FormGroup>
                </div>
            </div>


            <div className="flex flex-row mt-5">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="North Jutland"
                                    checked={doesContainCity('bNorth Jutland')}
                                    onClick={() => cityHandler('North Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nordjylland"
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


            <div className="flex flex-row mt-5">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name="West Jutland"
                                    checked={doesContainCity('West Jutland')}
                                    onClick={() => cityHandler('West Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Vestjylland"
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

            <div className="flex flex-row mt-5">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{ float: 'right' }}
                            control={
                                <Checkbox
                                    name='Fyn'
                                    checked={doesContainCity('Fyn')}
                                    onClick={() => cityHandler('Fyn')}
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
                                    name='Bornholm'
                                    checked={doesContainCity('Bornholm')}
                                    onChange={() => cityHandler('Bornholm')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Bornholm"
                        />
                    </FormGroup>
                </div>
            </div>
            <div className="flex mt-40 sm:mt-30">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex m-auto py-8 px-32 sm:px-56 bBtn"><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={moveForward} disabled={selectCities.length < 1} className="flex m-auto py-8 px-32 sm:px-56 sBtn"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
};

export default WorkPlaces;
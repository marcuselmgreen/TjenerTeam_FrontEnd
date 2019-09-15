import React from 'react';
import {Card, CardContent} from "@material-ui/core";
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
        <Card className="p-20 pb-52">
            <p className="font-sans mt-10 text-lg">Hvor kan du arbejde henne?</p>

            <div className="flex mt-20">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name="copenhagen"
                                    checked={doesContainCity('copenhagen')}
                                    onClick={() => cityHandler('copenhagen')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="København (1000 - 2991)"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name="northZealand"
                                    checked={doesContainCity('northZealand')}
                                    onClick={() => cityHandler('northZealand')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nord Sjælland (3000 - 3670)"
                        />
                    </FormGroup>
                </div>
            </div>

            <div className="flex mt-20">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name="bornholm"
                                    checked={doesContainCity('bornholm')}
                                    onClick={() => cityHandler('bornholm')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Bornholm (3700 - 3790)"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name="otherZealand"
                                    checked={doesContainCity('otherZealand')}
                                    onClick={() => cityHandler('otherZealand')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Øst- Midt- Vest- Syd- Sjælland (4000-4992)"
                        />
                    </FormGroup>
                </div>
            </div>


            <div className="flex mt-20">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name="fyn"
                                    checked={doesContainCity('fyn')}
                                    onClick={() => cityHandler('fyn')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Fyn og øerne (5000-5994)"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name='Southern Jutland'
                                    checked={doesContainCity('Southern Jutland')}
                                    onClick={() => cityHandler('Southern Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Sønder Jylland (6000-6990)"
                        />
                    </FormGroup>
                </div>
            </div>

            <div className="flex mt-20">

                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name='North Vest Jutland'
                                    checked={doesContainCity('North Vest Jutland')}
                                    onClick={() => cityHandler('North Vest Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nordvest Jylland (7000-7999)"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name='East Jutland'
                                    checked={doesContainCity('East Jutland')}
                                    onChange={() => cityHandler('East Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Øst Jylland (8000-8999)"
                        />
                    </FormGroup>
                </div>
            </div>

            <div className="flex mt-20">
                <div className="flex-1 m-8 p-4 checkBox">
                    <FormGroup>
                        <FormControlLabel
                            className="p-0 m-0 relative"
                            style={{float: 'right'}}
                            control={
                                <Checkbox
                                    name='North Jutland'
                                    checked={doesContainCity('North Jutland')}
                                    onChange={() => cityHandler('North Jutland')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Nord Jylland (9000-9999)"
                        />
                    </FormGroup>
                </div>
                <div className="flex-1 m-8 p-4">

                </div>
            </div>

            <div className="w-full">
                <Button onClick={moveBackward} className="backButton">Tilbage</Button>
                <Button onClick={moveForward} disabled={selectCities.length < 1} className="submitButton">Videre</Button>
            </div>
        </Card>
    );
};

export default WorkPlaces;

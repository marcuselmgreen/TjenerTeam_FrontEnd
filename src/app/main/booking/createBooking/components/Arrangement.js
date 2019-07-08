import React from 'react';
import {FormControlLabel, Icon, MenuItem, Radio, RadioGroup, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl/FormControl";

const Arrangement = (props) => {

    const {
        arrangementType,
        changeHandler,
        arrangementTypeValues,
        arrangementTypeOther,
        extraWorkHours,
        foodIncluded,
        accessInformation,
        jobDescription
    } = props;

    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <h2>Arrangementet</h2>
                </div>
                <TextField
                    name="arrangementType"
                    className="mr-16"
                    id="arrangementSelection"
                    select
                    value={arrangementType}
                    label="Vælg arrangement type"
                    helperText="Her kan du vælge type arrangement"
                    margin="normal"
                    variant="outlined"
                    onChange={changeHandler}
                >
                    {arrangementTypeValues.map((val, index) => (
                        <MenuItem key={index} value={val}>
                            {val}
                        </MenuItem>
                    ))}
                </TextField>
                {arrangementType === "andet" &&
                <TextField
                    className="max-w-160"
                    name="arrangementTypeOther"
                    id="arrangementName"
                    helperText="Angiv navn på arrangement type"
                    label="Arrangement type."
                    margin="normal"
                    variant="outlined"
                    value={arrangementTypeOther}
                    onChange={changeHandler}
                />
                }
            </div>
            <div className="w-full mt-20">
                <div className="flex flex-wrap my-2">
                    <div className="w-full sm:w-1/2">
                        <h4>Kan der forekomme overarbejde?</h4>
                        <RadioGroup
                            name="extraWorkHours"
                            onChange={changeHandler}
                            value={extraWorkHours}>

                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                value="0"
                                control={<Radio color="primary"/>}
                                label="Nej"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                value=".50"
                                control={<Radio color="primary"/>}
                                label="30 min"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                value="1"
                                control={<Radio color="primary"/>}
                                label="1 time"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                value="1.5"
                                control={<Radio color="primary"/>}
                                label="1,5 time"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                value="2"
                                control={<Radio color="primary"/>}
                                label="2 timer"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </div>
                    <div className="w-full  sm:w-1/2">
                        <div className=""><h4>Er mad inkluderet?</h4></div>
                        <RadioGroup
                            row
                            name="foodIncluded"
                            onChange={changeHandler}
                            value={foodIncluded}>
                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                value="yes"
                                control={<Radio color="primary"/>}
                                label="Ja"
                                labelPlacement="bottom"
                            />
                            <Icon fontSize="large"
                                  className="ml-8 mr-3 mt-8">local_dining</Icon>
                            <FormControlLabel
                                style={{transform: "scale(0.8, 0.8)"}}
                                className=""
                                value="no"
                                control={<Radio color="primary"/>}
                                label="Nej"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </div>
                </div>
            </div>

            <div className="w-full mt-20">
                <div className="flex flex-wrap my-2">
                    <div className="w-full sm:w-1/2 min-w-200 p-4">
                        <h4 className="">Hvad skal i bruge hjælp til?</h4>
                        <TextField
                            name="jobDescription"
                            id="outlined-multiline-flexible"
                            label="Beskrivelse"
                            multiline
                            rowsMax="20"
                            value={jobDescription}
                            className="w-full"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="w-full sm:w-1/2 p-4">
                        <h4 className="">Personale adgang</h4>
                        <TextField
                            name="accessInformation"
                            id="outlined-multiline-flexible"
                            label="Beskrivelse"
                            multiline
                            rowsMax="20"
                            value={accessInformation}
                            onChange={changeHandler}
                            className="w-full"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>


        </>
    );
};

export default Arrangement;

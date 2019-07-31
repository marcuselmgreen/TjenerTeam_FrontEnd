import React from 'react';
import {FormControlLabel, Icon, MenuItem, Radio, RadioGroup, TextField} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const Arrangement = (props) => {

    const {
        arrangementType,
        changeHandler,
        arrangementTypeValues,
        arrangementTypeOther,
        extraWorkHours,
        foodIncluded,
        accessInformation,
        jobDescription,
        extraHours,
        validation
    } = props;

    return (
        <>
            <div className="w-full">
                <div className="w-full">
                    <h2>Arrangementet</h2>
                </div>
                <TextField
                    name="arrangementType"
                    className="mr-16 w-192"
                    id="arrangementSelection"
                    select
                    value={arrangementType}
                    helperText={<span style={{color: 'red'}}>{validation.arrangementType.message}</span>}
                    label="Vælg arrangement type"
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
                {arrangementType === "Andet" &&
                <TextField
                    className="max-w-160"
                    name="arrangementTypeOther"
                    id="arrangementName"
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
                        <TextField
                            name="extraWorkHours"
                            className="mr-16 min-w-128"
                            select
                            value={extraWorkHours}
                            helperText={<span style={{color: 'red'}}>{validation.extraWorkHours.message}</span>}
                            label="Overarbejdes?"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >
                            {extraHours.map((val, index) => (
                                <MenuItem key={index} value={val.value}>
                                    {val.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="w-full  sm:w-1/2">
                        <div className=""><h4>Er mad inkluderet?</h4></div>
                        <FormControl>
                            <RadioGroup
                                row
                                name="foodIncluded"
                                className="mt-3"
                                onChange={changeHandler}
                                value={foodIncluded}>
                                <FormControlLabel
                                    style={{transform: "scale(0.8, 0.8)"}}
                                    value="true"
                                    control={<Radio color="primary"/>}
                                    label="Ja"
                                    labelPlacement="bottom"
                                />
                                <Icon fontSize="large"
                                      className="ml-8 mr-3 mt-8">local_dining</Icon>
                                <FormControlLabel
                                    style={{transform: "scale(0.8, 0.8)"}}
                                    className=""
                                    value="false"
                                    control={<Radio color="primary"/>}
                                    label="Nej"
                                    labelPlacement="bottom"
                                />
                            </RadioGroup>
                            <FormHelperText><span style={{color: 'red'}}>{validation.foodIncluded.message}</span></FormHelperText>
                        </FormControl>
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
                            helperText={<span style={{color: 'red'}}>{validation.jobDescription.message}</span>}
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

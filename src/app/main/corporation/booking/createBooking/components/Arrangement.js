import React from 'react';
import { FormControlLabel, Icon, MenuItem, Radio, RadioGroup, TextField } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Clothing from "./Clothing";

const Arrangement = (props) => {

    const {
        contactPerson,
        arrangementType,
        changeHandler,
        arrangementTypeValues,
        arrangementTypeOther,
        extraWorkHours,
        foodIncluded,
        accessInformation,
        jobDescription,
        extraHours,
        validation,

        upperDressCode,
        upperDressSelection,
        upperDressCodeOther,
        lowerDressCode,
        lowerDressSelection,
        lowerDressCodeOther,
        shoesDressCode,
        shoeSelection,
        shoesDressCodeOther,
        itemToBring
    } = props;

    return (
        <div className="w-full">
            <div className="flex flex-wrap w-1/2">
                <div className="flex sm:my-2">
                    <div className="p-2 w-1/2 ">
                        <h4 className="mb-3">Type arrangementer</h4>
                        <TextField
                            name="arrangementType"
                            className="w-full m-0"
                            id="arrangementSelection"
                            select
                            value={arrangementType}
                            helperText={<span style={{ color: 'red' }}>{validation.arrangementType.message}</span>}
                            label="Vælg"
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
                    </div>
                </div>




                <div className="p-2 w-full sm:w-1/2">
                    <h4>Er mad inkluderet?</h4>
                    <FormControl>
                        <RadioGroup
                            row
                            name="foodIncluded"
                            className="mt-8 ml-20"
                            onChange={changeHandler}
                            value={foodIncluded}>
                            <FormControlLabel
                                style={{ transform: "scale(0.8, 0.8)" }}
                                value="true"
                                control={<Radio color="primary" />}
                                label="Ja"
                                labelPlacement="bottom"
                            />

                            <FormControlLabel
                                style={{ transform: "scale(0.8, 0.8)" }}
                                className=""
                                value="false"
                                control={<Radio color="primary" />}
                                label="Nej"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                        <FormHelperText><span
                            style={{ color: 'red' }}>{validation.foodIncluded.message}</span></FormHelperText>
                    </FormControl>
                </div>


                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-3">Kan der forekomme overarbejde?</h4>
                    <FormControl>
                        <RadioGroup
                            row
                            name="extraWorkHours"
                            className="w-full m-0"
                            select
                            value={extraWorkHours}
                            helperText={<span style={{ color: 'red' }}>{validation.extraWorkHours.message}</span>}
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
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    {arrangementType === "Andet" &&
                        <TextField
                            className="w-full m-0"
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
                <div className="p-2 w-1/2">
                    <h4 className="mb-3">Beskriv arrangementet kort, evt opgaver? (jobbeskrivelse)</h4>
                    <TextField
                        name="jobDescription"
                        id="outlined-multiline-flexible"
                        multiline
                        rows="4"
                        label="Beskrivelse"
                        helperText={<span style={{ color: 'red' }}>{validation.jobDescription.message}</span>}
                        multiline
                        rowsMax="20"
                        value={jobDescription}
                        className="w-full m-0"
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-3">Personale adgang</h4>
                    <TextField
                        name="accessInformation"
                        id="outlined-multiline-flexible"
                        label="Beskrivelse"
                        multiline
                        rowsMax="20"
                        value={accessInformation}
                        onChange={changeHandler}
                        className="w-full m-0"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-3">Kontakt person på stedet</h4>
                    <TextField
                        name="contactPerson"
                        id="contactPerson"
                        label="Navn"
                        multiline
                        rowsMax="20"
                        value={contactPerson}
                        onChange={changeHandler}
                        className="w-full m-0"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            </div>
            <Clothing
                changeHandler={changeHandler}
                upperDressSelection={upperDressSelection}
                upperDressCode={upperDressCode}
                upperDressCodeOther={upperDressCodeOther}
                lowerDressCode={lowerDressCode}
                lowerDressSelection={lowerDressSelection}
                lowerDressCodeOther={lowerDressCodeOther}
                shoesDressCode={shoesDressCode}
                shoeSelection={shoeSelection}
                shoesDressCodeOther={shoesDressCodeOther}
                itemToBring={itemToBring}
                validation={validation}
            />

        </div>
    );
};

export default Arrangement;

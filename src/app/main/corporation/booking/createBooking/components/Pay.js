import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const Pay = (props) => {

    const {
        changeHandler,
        transportCostWages,
        transportWage,
        hourlyWage,
        wageTotal,
        validation
    } = props;

    return (
            <div className="w-full pl-2">
                <div className="flex flex-wrap my-2">
                    <div className="w-full sm:w-1/2">
                        <h4 className="mb-4">Tilbyd personale transporttillæg?</h4>
                        <TextField
                            name="transportWage"
                            className="w-full pr-2 m-0"
                            id="transportCost"
                            select
                            helperText={<span style={{color: 'red'}}>{validation.transportWage.message}</span>}
                            value={transportWage}
                            label="Tillæg?"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >
                            {transportCostWages.map((val, index) => (
                                <MenuItem key={index} value={val.value}>
                                    {val.name}
                                </MenuItem>
                            ))}

                        </TextField>
                    </div>
                    <div className="w-full sm:w-1/2 ">


                            <div className="flex flex-row">
                                <div className="w-full">
                                    <h4 className="mb-4 ml-2">Personale</h4>
                                <TextField
                                    name="hourlyWage"
                                    id="hourlyWage"
                                    variant="filled"
                                    label="Timeløn"
                                    helperText={<span style={{color: 'red'}}>{validation.hourlyWage.message}</span>}
                                    className="w-full pl-2 m-0"
                                    margin="normal"
                                    value={hourlyWage}
                                    onChange={changeHandler}
                                    InputProps={{
                                        // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,
                                        endAdornment: <InputAdornment position="end">DKK</InputAdornment>
                                    }}
                                />
                                </div>
                            </div>


                            {/*<FormControl*/}
                            {/*    variant="filled"*/}
                            {/*>*/}
                            {/*<OutlinedInput*/}
                            {/*    name="wage"*/}
                            {/*    type="number"*/}
                            {/*    className="float-left max-w-84"*/}
                            {/*    id="wage"*/}
                            {/*    value={"1211"}*/}
                            {/*    margin="normal"*/}
                            {/*    variant="outlined"*/}
                            {/*    onChange={changeHandler}*/}
                            {/*>*/}
                            {/*</OutlinedInput>*/}
                            {/*    */}
                            {/*</FormControl>*/}
                            {/*<FormControl variant="filled" disabled  >*/}
                            {/*    <FilledInput style={{marginTop: '16px'}} id="component-disabled"  value={".00 DKK"} onChange={changeHandler} />*/}
                            {/*</FormControl>*/}
                        </div>
                    </div>
            </div>
    );
};

export default Pay;

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
                <div className="w-full">
                    <h2>Pris</h2>
                </div>
                <div className="flex flex-wrap my-2">
                    <div className="w-full sm:w-1/2">
                        <h5>Tilbyd personale transporttillæg?</h5>
                        <TextField
                            name="transportWage"
                            className="mr-16 w-192"
                            id="transportCost"
                            select
                            helperText={<span style={{color: 'red'}}>{validation.transportWage.message}</span>}
                            value={transportWage}
                            label="Transport tillæg?"
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


                            <div className="flex flex-row my-2">
                                <div className="w-1/2">
                                    <h5 className="">Personale</h5>
                                <TextField
                                    name="hourlyWage"
                                    id="hourlyWage"
                                    variant="filled"
                                    label="Timeløn"
                                    helperText={<span style={{color: 'red'}}>{validation.hourlyWage.message}</span>}
                                    className="float-left max-w-136 mr-3"
                                    margin="normal"
                                    value={hourlyWage}
                                    onChange={changeHandler}
                                    InputProps={{
                                        // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,
                                        endAdornment: <InputAdornment position="end">DKK</InputAdornment>
                                    }}
                                />
                                </div>

                                <div className="w-1/2">
                                    <h5 className="">Med tillæg</h5>
                                <TextField
                                    name="wageTotal"
                                    id="wageTotal"
                                    variant="filled"
                                    label="Timeløn"
                                    className="float-left max-w-136"
                                    margin="normal"
                                    value={wageTotal}
                                    onChange={changeHandler}
                                    InputProps={{
                                        // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,
                                        endAdornment: <InputAdornment position="end">DKK</InputAdornment>,
                                        readOnly: true,
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

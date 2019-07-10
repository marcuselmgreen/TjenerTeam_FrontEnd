import React from 'react';
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const Bottom = (props) => {

    const {
        changeHandler,
        priceTotal
    } = props;
    return (
        <>
            <div className="w-full">

                <div className="flex flex-row my-2">
                    <div className="w-full sm:w-1/2">
                        <h5 className="">Total pris eks. moms</h5>
                        <TextField
                            name="priceTotal"
                            id="wageTotal"
                            variant="filled"
                            label="Totalt"
                            className="max-w-128 "
                            margin="normal"
                            type="number"
                            value={priceTotal}
                            onChange={changeHandler}
                            InputProps={{
                                // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,
                                endAdornment: <InputAdornment position="end">DKK</InputAdornment>,
                                readOnly: true,
                            }}/>
                    </div>

                    <div className="w-full sm:w-1/2">
                    </div>
                </div>
            </div>

        </>
    );
};

export default Bottom;
import React from 'react';
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

const Bottom = (props) => {

    const {
        wageTotal,
        changeHandler,
        priceTotal
    } = props;
    return (
        <>
            <div className="w-full">

                <div className="flex flex-row">

                    <div className="w-full sm:w-1/2">
                        <div className="w-full">

                            <div className="w-full sm:w-1/2 float-left p-2">
                                <h4 className="mb-3">Med tillæg</h4>
                                <TextField
                                    name="wageTotal"
                                    id="wageTotal"
                                    variant="filled"
                                    label="Timeløn"
                                    className="w-full m-0"
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
                            <div className="w-full sm:w-1/2 float-left p-2">
                                <h4 className="mb-3">Total pris eks. moms</h4>
                                <TextField
                                    name="priceTotal"
                                    id="wageTotal"
                                    variant="filled"
                                    label="Totalt"
                                    className="w-full m-0 "
                                    margin="normal"
                                    value={priceTotal}
                                    onChange={changeHandler}
                                    InputProps={{
                                        // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,
                                        endAdornment: <InputAdornment position="end">DKK</InputAdornment>,
                                        readOnly: true,
                                    }}/>
                            </div>
                        </div>
                    </div>


                    {/*</div>*/}

                    {/*    <div className="w-1/2">*/}
                    {/*        <h5 className="">Med tillæg</h5>*/}
                    {/*        <TextField*/}
                    {/*            name="wageTotal"*/}
                    {/*            id="wageTotal"*/}
                    {/*            variant="filled"*/}
                    {/*            label="Timeløn"*/}
                    {/*            className="w-full pl-2 pr-2"*/}
                    {/*            margin="normal"*/}
                    {/*            value={wageTotal}*/}
                    {/*            onChange={changeHandler}*/}
                    {/*            InputProps={{*/}
                    {/*                // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,*/}
                    {/*                endAdornment: <InputAdornment position="end">DKK</InputAdornment>,*/}
                    {/*                readOnly: true,*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    </div>*/}

                    {/*    <div className="w-1/2">*/}
                    {/*        <h5 className="">Total pris eks. moms</h5>*/}
                    {/*        <TextField*/}
                    {/*            name="priceTotal"*/}
                    {/*            id="wageTotal"*/}
                    {/*            variant="filled"*/}
                    {/*            label="Totalt"*/}
                    {/*            className="w-full pl-2 pr-2"*/}
                    {/*            margin="normal"*/}
                    {/*            value={priceTotal}*/}
                    {/*            onChange={changeHandler}*/}
                    {/*            InputProps={{*/}
                    {/*                // startAdornment: <InputAdornment position="start">DKK</InputAdornment>,*/}
                    {/*                endAdornment: <InputAdornment position="end">DKK</InputAdornment>,*/}
                    {/*                readOnly: true,*/}
                    {/*            }}/>*/}
                    {/*    </div>*/}
                </div>
            </div>

        </>
    );
};

export default Bottom;

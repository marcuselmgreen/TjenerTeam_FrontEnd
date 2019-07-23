import React from 'react';
import {TextField} from "@material-ui/core";

const Top = (props) => {

    const {
        email,
        cvr,
        address,
        zipCode,
        city,
        changeHandler,
        validation
    } = props;

    return (
        <div className="w-full">
            <div className="w-full">
                <div className="flex flex-wrap my-2">
                    <div className="w-full p-5 sm:w-1/2">
                        <TextField
                            name="email"
                            label="Email"
                            className="w-full"
                            helperText={<span style={{color: 'red'}}>{validation.email.message}</span>}
                            value={email}
                            variant="outlined"
                            onChange={changeHandler}
                            />
                        <TextField
                            name="address"
                            label="Addresse"
                            className="w-full mt-16"
                            id="address"
                            helperText={<span style={{color: 'red'}}>{validation.address.message}</span>}
                            value={address}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="w-full p-5 sm:w-1/2">
                        <TextField
                            type="number"
                            name="cvr"
                            helperText={<span style={{color: 'red'}}>{validation.cvr.message}</span>}
                            label="CVR Nr."
                            className="w-full "
                            id="cvr"
                            value={cvr}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                        <div className="my-3 w-full mt-16">
                            <div className="w-1/3 pr-8 float-left">
                                <TextField
                                    type="bumber"
                                    label="Post nr."
                                    name="zipCode"
                                    helperText={<span style={{color: 'red'}}>{validation.zipCode.message}</span>}
                                    className="w-full "
                                    id="zipCode"
                                    value={zipCode}
                                    variant="outlined"
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="w-2/3 float-left">
                                <TextField
                                    name="city"
                                    label="By"
                                    className="w-full "
                                    helperText={<span style={{color: 'red'}}>{validation.city.message}</span>}
                                    id="city"
                                    value={city}
                                    variant="outlined"
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Top;

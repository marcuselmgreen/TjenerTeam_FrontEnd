import React from 'react';
import {TextField} from "@material-ui/core";

const Top = (props) => {

    const {
        name,
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
                <h1 className="mb-5">Virksomhed</h1>
                <div className="flex flex-wrap sm:my-2">
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            name="name"
                            label="Virksomhedens navn"
                            className="w-full "
                            helperText={<span style={{color: 'red'}}>{validation.name.message}</span>}
                            id="name"
                            value={name}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            type="number"
                            name="cvr"
                            helperText={<span style={{color: 'red'}}>{validation.cvr.message}</span>}
                            label="CVR Nr."
                            className="w-full"
                            id="cvr"
                            value={cvr}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap sm:my-2">
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            name="address"
                            label="Virksomhedens Adresse"
                            className="w-full"
                            id="address"
                            helperText={<span style={{color: 'red'}}>{validation.address.message}</span>}
                            value={address}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                        <div className="w-1/3 float-left">
                        <TextField
                            type="number"
                            label="Post nr."
                            name="zipCode"
                            helperText={<span style={{color: 'red'}}>{validation.zipCode.message}</span>}
                            className="w-full"
                            id="zipCode"
                            value={zipCode}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                        </div>
                        <div className="w-2/3 pl-8 float-left">
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
    );
};

export default Top;
import React from 'react';
import {TextField} from "@material-ui/core";

const Password = (props) => {

    const {
        password,
        confirmPassword,
        changeHandler,
        validation
    } = props;

    return (
        <div className="w-full">
            <div className="w-full">
                <h1 className="mb-5">Kodeord</h1>
                <div className=" flex flex-wrap sm:my-2">
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            type="password"
                            name="password"
                            label="Kodeord"
                            helperText={<span style={{color: 'red'}}>{validation.password.message}</span>}
                            className="w-full"
                            value={password}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            type="password"
                            name="confirmPassword"
                            label="Bekræft kodeord"
                            helperText={<span style={{color: 'red'}}>{validation.confirmPassword.message}</span>}
                            className="w-full"
                            value={confirmPassword}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;

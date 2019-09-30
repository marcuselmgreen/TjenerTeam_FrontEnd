import React, { Component } from 'react'
import { Button, Card, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { green } from "@material-ui/core/colors";

export class ChangePassword extends Component {
    render() {
        const {
            corporationUser,
            changePasswordHandler,
            validation,
            changeHandler,
            password = corporationUser.password,
        } = this.props;
    
        return (
            <Card className="p-24 max-w-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
                <div className="w-full mb-10">
                    <h1 className="font-sans text-4xl text-gray-800 mt-20 text-center mb-40">Skift kodeord</h1>
                    <div className="flex flex-wrap sm:my-2">
                        <div className="flex justify-center p-2 w-full">
                            <TextField
                                name="oldPassword"
                                label="Indtast dit gamle kodeord"
                                helperText={<span style={{ color: 'red' }}>{validation.password.message}</span>}
                                className="w-2/3"
                                variant="outlined"
                            />
                        </div>
                        <div className="flex justify-center p-2 w-full">
                            <TextField
                                name="newPassword"
                                label="Indtast dit nye kodeord"
                                helperText={<span style={{ color: 'red' }}>{validation.password.message}</span>}
                                className="w-2/3"
                                variant="outlined"
                            />
                        </div>
                        <div className="flex justify-center p-2 w-full">
                            <TextField
                                name="confirmNewPassword"
                                label="Bekræft dit nye kodeord"
                                helperText={<span style={{ color: 'red' }}>{validation.password.message}</span>}
                                className="w-2/3"
                                variant="outlined"
                            />
                        </div>
                    </div>
                    <div className="flex p-2 w-full justify-center">
                            <SubmitButton
                                color="secondary"
                                variant="contained"
                                className="min-w-216 min-h-48"
                                style={{ color: "white" }}
                                onClick={changePasswordHandler}>
                                Opdater
                        </SubmitButton>
                        </div>
                </div>
            </Card>
        )
    }
}

const SubmitButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

export default ChangePassword



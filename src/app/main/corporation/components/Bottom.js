import React from 'react';
import {TextField} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import {green, red} from "@material-ui/core/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const Bottom = (props)=> {

    const {
        contactPerson,
        department,
        email,
        phoneNumber,
        billingEmail,
        ean,
        password,
        confirmPassword,
        gdpr,
        onChange,
        validation

    } = props;

    return (
        <div className="w-full">
            <div className="w-full">
                <div className="flex flex-wrap my-2">
                    <div className="w-full p-5 sm:w-1/2">
                        <TextField
                            name="contactPerson"
                            label="Kontakt person"
                            className="w-full"
                            helperText={<span style={{color: 'red'}}>{validation.contactPerson.message}</span>}
                            value={contactPerson}
                            variant="outlined"
                            onChange={onChange}
                        />
                        <TextField
                            name="email"
                            label="Email du vil kontaktes på"
                            className="w-full mt-10"
                            helperText={<span style={{color: 'red'}}>{validation.email.message}</span>}
                            value={email}
                            variant="outlined"
                            onChange={onChange}
                        />
                        <TextField
                            name="billingEmail"
                            label="Email til faktur"
                            className="w-full mt-10"
                            helperText={<span style={{color: 'red'}}>{validation.billingEmail.message}</span>}
                            value={billingEmail}
                            variant="outlined"
                            onChange={onChange}
                        />
                    </div>
                    <div className="w-full p-5 sm:w-1/2">
                        <TextField
                            name="department"
                            label="Afdeling"
                            helperText={<span style={{color: 'red'}}>{validation.department.message}</span>}
                            className="w-full"
                            value={department}
                            variant="outlined"
                            onChange={onChange}
                        />
                        <TextField
                            name="phoneNumber"
                            label="Telefon nr."
                            helperText={<span style={{color: 'red'}}>{validation.phoneNumber.message}</span>}
                            className="w-full mt-10"
                            value={phoneNumber}
                            variant="outlined"
                            onChange={onChange}
                        />
                        <TextField
                            name="ean"
                            label="EAN"
                            helperText={<span style={{color: 'red'}}>{validation.ean.message}</span>}
                            className="w-full mt-10"
                            value={ean}
                            variant="outlined"
                            onChange={onChange}
                        />
                    </div>
                </div>


                <div className="w-full">
                    <div className="flex flex-wrap my-2">
                        <div className="w-full p-5 sm:w-1/2">
                            <TextField
                                name="password"
                                label="Kodeord"
                                helperText={<span style={{color: 'red'}}>{validation.password.message}</span>}
                                className="w-full"
                                value={password}
                                variant="outlined"
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-full p-5 sm:w-1/2">
                            <TextField
                                name="confirmPassword"
                                label="Bekræft kodeord"
                                helperText={<span style={{color: 'red'}}>{validation.confirmPassword.message}</span>}
                                className="w-full"
                                value={confirmPassword}
                                variant="outlined"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <hr style={{borderTop: '1px solid #cccccc'}}/>
                </div>

                <div className="w-full">
                    <h1>Betingelser</h1>
                    <div className="w-full p-10">
                        <h5>Jeg acceptere betingelser for persondataforordningen (GDPR) </h5>
                        <div>
                            <FormControl>
                                <RadioGroup
                                    row
                                    name="gdpr"
                                    className="mt-3"
                                    onChange={onChange}
                                    value={gdpr}>
                                        <FormControlLabel
                                            className=""
                                            value="no"
                                            control={<Radio color="primary"/>}
                                            labelPlacement="bottom"
                                            label={"Nej"}/>

                                        <FormControlLabel
                                            value="yes"
                                            control={<Radio color="secondary"/>}
                                            labelPlacement="bottom"
                                            label={"Ja"}/>
                                </RadioGroup>
                                <FormHelperText><span style={{color: 'red'}}>{validation.gdpr.message}</span></FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
        color: red[400],
        '&$checked': {
            color: red[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

export default Bottom;

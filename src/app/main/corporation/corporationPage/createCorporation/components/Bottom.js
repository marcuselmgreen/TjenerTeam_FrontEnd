import React from 'react';
import {TextField} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import {green, red} from "@material-ui/core/colors";
import withStyles from "@material-ui/core/styles/withStyles";

const Bottom = (props) => {

    const {
        contactPerson,
        department,
        name,
        phoneNumber,
        billingEmail,
        ean,
        changeHandler,
        validation

    } = props;

    return (
        <div className="w-full">
            <div className="w-full">
                <h1 className="mb-5">Kontakt Informationer</h1>
                <div className="flex flex-wrap sm:my-2">
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            name="contactPerson"
                            label="Kontakt person"
                            className="w-full"
                            helperText={<span style={{color: 'red'}}>{validation.contactPerson.message}</span>}
                            value={contactPerson}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
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
                            name="billingEmail"
                            label="Email til faktur"
                            className="w-full "
                            helperText={<span style={{color: 'red'}}>{validation.billingEmail.message}</span>}
                            value={billingEmail}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            name="department"
                            label="Afdeling"
                            helperText={<span style={{color: 'red'}}>{validation.department.message}</span>}
                            className="w-full"
                            value={department}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            name="phoneNumber"
                            label="Telefon nr."
                            helperText={<span style={{color: 'red'}}>{validation.phoneNumber.message}</span>}
                            className="w-full"
                            value={phoneNumber}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="p-2 w-full sm:w-1/2">
                        <TextField
                            name="ean"
                            label="EAN"
                            helperText={<span style={{color: 'red'}}>{validation.ean.message}</span>}
                            className="w-full "
                            value={ean}
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>

                </div>
            </div>

            <div className="w-full mt-12">
                <hr style={{borderTop: '1px solid #cccccc'}}/>
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

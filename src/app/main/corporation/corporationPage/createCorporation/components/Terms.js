import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormHelperText from "@material-ui/core/FormHelperText";

const Terms = (props) => {

        const {
            changeHandler,
            gdpr,
            validation
        } = props;

    return (
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
                            onChange={changeHandler}
                            value={gdpr}>
                            <FormControlLabel
                                className=""
                                value='Neeej'
                                control={<Radio color="primary"/>}
                                labelPlacement="bottom"
                                label={"Nej"}/>

                            <FormControlLabel
                                value="true"
                                control={<Radio color="secondary"/>}
                                labelPlacement="bottom"
                                label={"Ja"}/>
                        </RadioGroup>
                        <FormHelperText><span
                            style={{color: 'red'}}>{validation.gdpr.message}</span></FormHelperText>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default Terms;

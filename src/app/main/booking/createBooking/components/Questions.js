import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";

const Questions = (props) => {

    const {
        changeHandler,
        languageSkill,
        staffGender,
        jobExperience,
        yesAndNo,
        languageSkillData,
        gender,
        validation
    } = props;

    return (
        <div className="w-full mt-20">
            <div className="w-full mb-20">
                <h2>Spørgsmål</h2>
            </div>
            <div className="flex flex-wrap my-3">
                <div className="w-full sm:w-1/3 p-4">
                    <h4>Krav til ansøgere</h4>
                    <TextField
                        name="languageSkill"
                        className="w-full "
                        id="languagee"
                        select
                        helperText={<span style={{color: 'red'}}>{validation.languageSkill.message}</span>}
                        value={languageSkill}
                        onChange={changeHandler}
                        label="Sprogkompetencer"
                        margin="normal"
                        variant="outlined">
                        {languageSkillData.map((val, index) => (
                            <MenuItem key={index} value={val}>
                                {val}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="w-full sm:w-1/3 p-4">
                    <h4>Fortrukket køn</h4>
                    <TextField
                        name="staffGender"
                        className="w-full"
                        id="gender"
                        select
                        helperText={<span style={{color: 'red'}}>{validation.staffGender.message}</span>}
                        value={staffGender}
                        onChange={changeHandler}
                        label="Fortrukket køn"
                        margin="normal"
                        variant="outlined">
                        {gender.map((val, index) => (
                            <MenuItem key={index} value={val}>
                                {val}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="w-full sm:w-1/3 p-4">
                    <h4>Kræves der erfaring?</h4>
                    <TextField
                        name="jobExperience"
                        className="w-full"
                        id="experience"
                        select
                        helperText={<span style={{color: 'red'}}>{validation.jobExperience.message}</span>}
                        value={jobExperience}
                        onChange={changeHandler}
                        label="Erfaring?"
                        margin="normal"
                        variant="outlined">
                        {yesAndNo.map((val, index) => (
                            <MenuItem key={index} value={val}>
                                {val}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

            </div>
        </div>

    );
};

export default Questions;

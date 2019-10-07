import React from 'react';
import { MenuItem, TextField, Icon } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import '../Booking.css';
import ScheduleIcon from '@material-ui/icons/Schedule';



import {
    DatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

const Staff = (props) => {


    const {
        staffType,
        changeHandler,
        staff,
        dateHandler,
        numberOfStaff,
        startTime,
        endTime,
        date,
        validation,
        time,
        minutes,
        staffAmount
    } = props;

    return (

        <div className="w-full">
            <div className="flex flex-wrap mt-5">
                <div className="px-2 w-full md:w-1/2">
                    <TextField
                        name="staffType"
                        select
                        className="w-5/12 pr-2 pl-2 m-0"
                        id="staffSelection"
                        style={{ borderColor: 'red' }}
                        label="Personale"
                        helperText={<span style={{ color: 'red' }}>{validation.staffType.message}</span>}
                        margin="normal"
                        value={staffType}
                        variant="outlined"
                        onChange={changeHandler}
                    >
                        {staff.map((val, index) => (
                            <MenuItem key={index} value={val}>
                                {val}
                            </MenuItem>
                        ))}
                    </TextField>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            className="w-4/12 pr-2 pl-2"
                            autoOk
                            disableToolbar
                            variant="inline"
                            label="Dato"
                            style={{ fontSize: "4px" }}
                            helperText={<span style={{ color: 'red' }}>{validation.date.message}</span>}
                            inputVariant="outlined"
                            format="dd/MM/yy"
                            value={date}
                            onChange={(date) => dateHandler(date)} />
                    </MuiPickersUtilsProvider>
                    <TextField
                        name="numberOfStaff"
                        className="w-3/12 pr-2 pl-2 m-0"
                        id="staffNumber"
                        select
                        helperText={<span style={{ color: 'red' }}>{validation.numberOfStaff.message}</span>}
                        label="Antal"
                        type="number"
                        margin="normal"
                        value={numberOfStaff}
                        variant="outlined"
                        onChange={changeHandler}
                    >
                        {staffAmount.map((val, index) => (
                            <MenuItem
                                key={index}
                                value={val.val}
                                style={{ minHeight: '30px', paddingtop: '0px', paddingBottom: '0px' }}>
                                {val.val}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>


                <div className="flex flex-row md:w-1/2 px-2 w-full" id="time">
                    <div className="w-2/12">

                        <TextField
                            name="startTime"
                            className="w-full pr-2 pl-2 m-0"
                            id="startTime"
                            select
                            value={startTime}
                            helperText={<span style={{ color: 'red' }}>{validation.startTime.message}</span>}
                            label="(H)"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >{time.map((val, index) => (
                            <MenuItem
                                key={index}
                                value={val.val}
                                style={{ minHeight: '30px', paddingtop: '0px', paddingBottom: '0px' }}>
                                {val.val}
                            </MenuItem>
                        ))}
                        </TextField>
                    </div>
                    <div className="w-1/12">
                        <h1 className="flex justify-center mt-3">:</h1>
                    </div>
                    <div className="w-2/12">
                        <TextField
                            name="startTime"
                            className="w-full pr-2 pl-2 m-0"
                            id="startTime"
                            select
                            value={"00"}
                            helperText={<span style={{ color: 'red' }}>{validation.startTime.message}</span>}
                            label="(M)"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >{minutes.map((val, index) => (
                            <MenuItem key={index} value={val.val}>
                                {val.val}
                            </MenuItem>
                        ))}
                        </TextField>
                    </div>

                    <div className="w-2/12 flex justify-center mt-5">
                        <Icon fontSize="medium" color="primary"
                            className="ml-8 mr-3 mt-2">schedule</Icon>
                    </div>

                    <div className="w-2/12">

                        <TextField
                            name="endTime"
                            className="w-full pr-2 pl-2 m-0"
                            id="endTime"
                            select
                            helperText={<span style={{ color: 'red' }}>{validation.endTime.message}</span>}
                            value={endTime}
                            label="(H)"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >
                            {time.map((val, index) => (
                                <MenuItem
                                    key={index}
                                    value={val.val}
                                    style={{ minHeight: '30px', paddingtop: '0px', paddingBottom: '0px' }}>
                                    {val.val}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="w-1/12 align-middle">
                        <h1 className="flex justify-center mt-3">:</h1>
                    </div>
                    <div className="w-2/12">
                        <TextField
                            name="endTime"
                            className="w-full pr-2 pl-2 m-0"
                            id="endTime"
                            select
                            helperText={<span style={{ color: 'red' }}>{validation.endTime.message}</span>}
                            value={"00"}
                            label="(M)"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        >
                            {minutes.map((val, index) => (
                                <MenuItem key={index} value={val.val}>
                                    {val.val}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                </div>
            </div>

        </div>




    );
};


export default Staff;

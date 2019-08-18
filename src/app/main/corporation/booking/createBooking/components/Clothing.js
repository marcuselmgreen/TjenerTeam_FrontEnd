import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";

const Clothing = (props) => {

    const {
        upperDressCode,
        changeHandler,
        upperDressSelection,
        upperDressCodeOther,
        lowerDressCode,
        lowerDressSelection,
        lowerDressCodeOther,
        shoesDressCode,
        shoeSelection,
        shoesDressCodeOther,
        itemToBring
    } = props;

    return (
        <div className="w-full">
            <div className="flex flex-wrap my-2">
                <div className="w-full sm:w-1/2 ">
                    <h4 className="mb-3">Beskriv påklædningskrav</h4>
                    {/*<h4 className="mb-5">Overtøj</h4>*/}
                    <div className="w-full">
                        <TextField
                            name="upperDressCode"
                            className="w-1/2 m-0 pl-2 pr-2 mb-5 mt-3"
                            id="upperDressChoice"
                            select
                            value={upperDressCode}
                            label="Vælg overtøj"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}>
                            {upperDressSelection.map((val, index) => (
                                <MenuItem key={index} value={val}>
                                    {val}
                                </MenuItem>
                            ))}
                        </TextField>
                        {upperDressCode === "Andet" &&
                        <TextField
                            name="upperDressCodeOther"
                            className="w-1/2 m-0 pl-2 pr-2 mb-5 mt-3"
                            id="upperDressChoiceOther"
                            label="Angiv overtøj"
                            margin="normal"
                            variant="outlined"
                            value={upperDressCodeOther}
                            onChange={changeHandler}
                        />
                        }

                    </div>
                    <div className="w-full">
                        {/*<h4 className="mb-5 mt-3">Buks</h4>*/}
                        <TextField
                            name="lowerDressCode"
                            className="w-1/2 m-0 pl-2 pr-2 mb-5 mt-3"
                            id="lowerDressChoice"
                            select
                            value={lowerDressCode}
                            label="Vælg buks"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}>
                            {lowerDressSelection.map((val, index) => (
                                <MenuItem key={index} value={val}>
                                    {val}
                                </MenuItem>
                            ))}
                        </TextField>
                        {lowerDressCode === "Andet" &&
                        <TextField
                            name="lowerDressCodeOther"
                            className="w-1/2 m-0 pl-2 pr-2 mb-5 mt-3"
                            id="lowerDressChoiceOther"
                            label="Angiv buks"
                            margin="normal"
                            variant="outlined"
                            value={lowerDressCodeOther}
                            onChange={changeHandler}
                        />
                        }
                    </div>

                    <div className="w-full">
                        {/*<h4 className="mb-5 mt-3">Sko</h4>*/}
                        <TextField
                            name="shoesDressCode"
                            className="w-1/2 m-0 pl-2 pr-2 mb-5 mt-3"
                            id="shoeChoice"
                            select
                            value={shoesDressCode}
                            label="Vælg sko"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}>
                            {shoeSelection.map((val, index) => (
                                <MenuItem key={index} value={val}>
                                    {val}
                                </MenuItem>
                            ))}
                        </TextField>
                        {shoesDressCode === "Andet" &&
                        <TextField
                            name="shoesDressCodeOther"
                            className="w-1/2 m-0 pl-2 pr-2 mb-5 mt-3"
                            id="shoeChoiceOther"
                            label="Angiv fodtøj"
                            margin="normal"
                            variant="outlined"
                            value={shoesDressCodeOther}
                            onChange={changeHandler}
                        />
                        }
                    </div>
                    <div className="w-full">
                        <h4 className="mb-3 mt-3">Medbring</h4>
                        <TextField
                            name="itemToBring"
                            className="w-full m-0 pl-2 pr-2 mb-5 mt-3"
                            id=""
                            label="Medbring?"
                            margin="normal"
                            variant="outlined"
                            value={itemToBring}
                            onChange={changeHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clothing;

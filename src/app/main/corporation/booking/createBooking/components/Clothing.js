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
        <div className="w-full mt-20 pl-2">
            <div className="w-full mb-20">
                <h2>Påklædning</h2>
            </div>
            <div className="flex flex-wrap my-2">
                <div className="w-full sm:w-1/2 ">
                    <h5 className="w-full">Overtøj</h5>
                    <TextField
                        name="upperDressCode"
                        className="min-w-128 mr-20 mt-16"
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
                        className="max-w-128 mt-16"
                        id="upperDressChoiceOther"
                        label="Angiv overtøj"
                        margin="normal"
                        variant="outlined"
                        value={upperDressCodeOther}
                        onChange={changeHandler}
                    />
                    }
                </div>
                <div className="w-full sm:w-1/2 ">
                    <h5 className="w-full">Bukser</h5>
                    <TextField
                        name="lowerDressCode"
                        className="min-w-128 mr-20 mt-16"
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
                        className="max-w-128  mt-16"
                        id="lowerDressChoiceOther"
                        label="Angiv buks"
                        margin="normal"
                        variant="outlined"
                        value={lowerDressCodeOther}
                        onChange={changeHandler}
                    />
                    }
                </div>
                <div className="w-full sm:w-1/2 ">
                    <h5 className="w-full">Sko</h5>
                    <TextField
                        name="shoesDressCode"
                        className="min-w-128 mr-20 mt-16"
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
                        className="max-w-128 mr-20 mt-16"
                        id="shoeChoiceOther"
                        label="Angiv fodtøj"
                        margin="normal"
                        variant="outlined"
                        value={shoesDressCodeOther}
                        onChange={changeHandler}
                    />
                    }
                </div>
                <div className="w-full sm:w-1/2 ">
                    <h5 className="w-full">Skal der medbringes noget?</h5>
                    <TextField
                        name="itemToBring"
                        className="w-full mr-20 mt-16"
                        id=""
                        label="Medbring?"
                        margin="normal"
                        variant="outlined"
                        value={itemToBring}
                        onChange={changeHandler}/>
                </div>
            </div>
        </div>
    );
};

export default Clothing;

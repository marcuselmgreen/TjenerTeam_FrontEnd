import React from 'react';
import Card from "@material-ui/core/Card";
import {CardContent, Icon} from "@material-ui/core";
import moment from "./Active";
import Typography from "@material-ui/core/Typography";

const ShowBooking = () => {
    return (
        <div className="m-5 ">
            <CardContent>
                {/* DATE */}
                <div className="w-full mt-20">
                    <div className="flex flex-wrap my-2">

                        <div className="w-full sm:w-2/12">
                            <div className="ml-76 sm:ml-0">
                                <div>
                                                <span style={{fontSize: '29px'}}
                                                      className="">TIR</span>
                                </div>
                                <div>
                                    <Typography color="textSecondary" gutterBottom>
                                                        <span style={{fontSize: '35px'}}
                                                              className="pl-1">23</span>
                                    </Typography>
                                </div>
                                <div>
                                                <span style={{fontSize: '29px'}}
                                                      className="pl-1">JUN</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-6/12  mt-2">
                            <div className="pl-2 min-w-full">
                                <div className="mt-6 min-h-32">
                                                <span className="ml-2" style={{
                                                    fontSize: '20px',
                                                    fontWeight: 'bold'
                                                }}>Bryllup</span>
                                </div>
                            </div>
                            <div className="pl-2 min-w-full">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px',
                                                    fontWeight: 'bold'
                                                }}>{"23:00" + " - " + "24:00"}</span>
                                <span style={{
                                    fontSize: '10px',
                                    fontWeight: 'bold'
                                }}>{" + " + "1.5" + " time transport"}</span>
                            </div>
                            <div className="ml-2 mt-5 pl-2 min-w-full">
                                <p style={{fontSize: '12px'}}>{"150" + "/t [" + "210" + "] (i alt inkl. feriepenge, " + "2200" + " DKK)"}</p>
                            </div>
                            <div className="min-w-full mt-3">

                                <Icon fontSize="default" className="ml-2 float-left">room</Icon>
                                <p style={{fontSize: '12px'}}
                                   className="pt-2 float-left">{"Gammel Kongevej 7 4 th" + ", " + "1611" + " "}</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-4/12  mt-2">
                            <div className="pl-2 min-w-full">
                                <div className="mt-6 min-h-32">
                                                <span className="ml-2" style={{
                                                    fontSize: '20px',
                                                    fontWeight: 'bold'
                                                }}>{"4" + " " + "Tjener"}</span>
                                </div>
                            </div>
                            <div className="pl-8 min-w-full">
                                <div className="">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px', fontWeight: 'bold'
                                                }}>{"0" + " Booket"}</span>
                                </div>
                                <div className="">
                                                <span className="ml-2" style={{
                                                    fontSize: '15px'
                                                }}>{"0" + " Ansøgere"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <hr style={{borderTop: '1px solid #cccccc'}}/>
                </div>

                <div className="w-full">
                    <div className="flex flex-wrap my-2">
                        <div className="w-full">
                            <h4>Uddybende jobbeskrivelse</h4>
                            <p className="mt-1">Dette er ikke et job men en tilmelding til noget. Det kan også bare være en test</p>
                        </div>
                        <div className="w-full mt-5">
                            <h4>Hvordan kommer jeg ind?</h4>
                            <p className="mt-1">Dette er ikke et job men en tilmelding til noget. Det kan også bare være en test</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-5">
                    <hr style={{borderTop: '1px solid #cccccc'}}/>
                </div>

                <div className="w-full">
                    <div className="flex flex-wrap my-2">
                        <div className="w-full">
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Team:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Sko:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Buks:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Overdel:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Medbring:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>teslksndflksndflknsdlkfnsldkft</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Udleveret:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Overarbejde:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{ wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Personalemad:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Sprog</p>
                                </div>
                                <div
                                    style={{wordWrap: 'break-word'}}
                                    className="w-full sm:w-3/5">
                                    <p style={{whiteSpace: 'initial'}}>Jeg synes at der burde være noget ind imellem hvert arrangement så at der kan ske noget. Bare så vid ved det.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Kontaktperson:</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{ wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap my-2 mt-2">
                                <div className="w-full sm:w-2/5">
                                    <p style={{fontWeight: 'bold'}}>Mobil nr</p>
                                </div>
                                <div className="w-full sm:w-3/5"
                                     style={{wordWrap: 'break-word'}}>
                                    <p>test</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-5">
                    <hr style={{borderTop: '1px solid #cccccc'}}/>
                </div>

                <div className="w-full">
                    <div className="flex flex-wrap my-4">
                        <div className="w-full sm:w-3/6">
                            <h5 className="">Beskrivelse</h5>
                            <p>Tjener</p>
                        </div>
                        <div className="w-full sm:w-1/6">
                            <h5 className="mt-3">Timer</h5>
                            <p>12</p>
                        </div>
                        <div className="w-full sm:w-1/6">
                            <h5 className="mt-3">Enhedsprins</h5>
                            <p>168.75 kr.</p>
                        </div>
                        <div className="w-full sm:w-1/6">
                            <h5 className="mt-3">Pris</h5>
                            <p>2020.25 kr.</p>
                        </div>
                    </div>
                </div>


            </CardContent>
        </div>
    );
};

export default ShowBooking;

import React from 'react';
import {Card} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";
import CircularProgress from "@material-ui/core/CircularProgress";

const IntroductionVideo = (props) => {

        const {
            moveBackward,
            moveForward,
            hideSpinner,
            showSpinner
        } = props;

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };


        return (
            <Card className="pl-20 pr-20 pb-52 pt-10">
                <p className="font-sans mt-10 text-lg text-center">Vi har lavet en kort introduktionsvideo som fortæller om
                    os, hvordan vi arbejder og hvad vi kan tilbyde</p>
                <p className="font-bold mt-20 text-base text-center">Det er rigtig vigtigt, at du tager dig tid til at se og
                    høre denne video</p>

                <div className="text-center mt-20">

                    {showSpinner === true ?
                    <CircularProgress color="secondary"/>
                    : null}

                    <YouTube
                        className="p-8"
                        videoId="hEnr6Ewpu_U"
                        opts={opts}
                        onReady={(e) => hideSpinner(e)}
                    />
                </div>

                <div className="w-full">
                    <Button onClick={moveBackward} className="backButton">Tilbage</Button>
                    <Button onClick={moveForward} className="submitButton">Videre</Button>
                </div>
            </Card>
        );


    }
;

export default IntroductionVideo;

import React from 'react';
import './IntroductionVideo.css';
import {Card} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const IntroductionVideo = (props) => {

        const {
            moveBackward,
            moveForward,
            hideSpinner,
            showSpinner
        } = props;
              
    return (
        <Card className="px-20 pb-52 pt-10">
            <div>
                <p className="font-sans mt-5 text-lg text-center">Vi har lavet en kort introduktionsvideo som fortæller om
                    os, hvordan vi arbejder og hvad vi kan tilbyde</p>
                <p className="font-bold mt-24 text-md text-center">Det er rigtig vigtigt, at du tager dig tid til at se og
                    høre denne video</p>
            </div>

            <div
                className="video mt-10"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
                <iframe
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                    src={'https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1'}
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    frameBorder="0"
                />
            </div>

            <div className="flex mt-40 sm:mt-30">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex m-auto py-8 px-32 sm:px-56 bBtn "><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={moveForward} className="flex m-auto py-8 px-32 sm:px-56 sBtn"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
}
    ;

export default IntroductionVideo;
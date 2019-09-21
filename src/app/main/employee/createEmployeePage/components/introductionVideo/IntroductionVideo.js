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
                <p className="font-sans mt-5 introduction-title-text text-center">Vi har lavet en kort introduktionsvideo som fortæller om
                    os, hvordan vi arbejder og hvad vi kan tilbyde</p>
                <p className="font-bold mt-20 introduction-subtitle-text text-center">Det er rigtig vigtigt, at du tager dig tid til at se og
                    høre denne video</p>
            </div>

            <div
                className="video mt-5"
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

            <div className="flex mt-10 scaled">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex bBtn w-3/4 sm:min-h-60 m-auto "><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={moveForward} className="flex sBtn w-3/4 sm:min-h-60 m-auto"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
}
    ;

export default IntroductionVideo;
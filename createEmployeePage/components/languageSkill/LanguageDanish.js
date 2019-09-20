import React from 'react';
import './Language.css';
import {Card} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Denmark from '../../../../static/denmark.png';

const LanguageDanish = (props) => {

    const {
        moveBackward,
        moveForward,
        changeLanguageHandler,
        user
    } = props;

    const languageType = 'languageSkillDanish';


    return (
        <Card className="px-20 mt-20 pb-52 pt-10">
            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Færdiggør din profil</h2>
                </div>
            </div>


            <div className="flex">
                <div className="w-full flex align-center">
                    <p className="text-xl sm:text-2xl md:text-3xl">Sprog</p>
                    <img src={Denmark} className="denmark-icon-big ml-2" alt=""/>
                </div>
            </div>

            <div className="flex mb-5 sm:mb-10">
                <div className="w-full">
                    <p className="text-xs sm:text-base">
                        For at vi kan matche dig bedst muligt med vores kunder, skal vi vide, hvilke sprog du taler og
                        forstår. Svar ærligt - der er jobs til alle. Du kan altid ændre dit niveau i takt med, at du
                        udvikler dig
                    </p>
                </div>
            </div>

            <div className="flex mb-8">
                <div className="w-full">
                    <hr className="line-breaker"/>
                </div>
            </div>

            <div className="flex mb-2">
                <div className="w-full flex align-center">
                    <p className="text-xs sm:text-lg md:text-xl">Dansk</p>
                    <img src={Denmark} className="country-icon ml-2" alt=""/>
                </div>
            </div>

            <div className="flex mb-5 sm:mb-8">
                <div className="w-full">
                    <p className="text-xs sm:text-base md:text-xl font-bold">Hvilket niveau snakker og forstår du dansk?</p>
                </div>
            </div>

            <div className="flex mb-10">
                <div className="w-full flex justify-center flex-col">
                    <Card onClick={() => changeLanguageHandler(languageType,1)} className={user.languageSkillDanish === 1 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>
                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="language-box-1-text font-bold ">Det forstår jeg ikke</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,2)} className={user.languageSkillDanish === 2 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="language-box-1-text font-bold ">Jeg forstår lidt dansk</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,3)} className={user.languageSkillDanish === 3 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="language-box-1-text font-bold ">Jeg er middel til at forstå og snakke dansk</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,4)} className={user.languageSkillDanish === 4 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="language-box-1-text font-bold ">Jeg begår mig fint i en samtale på dansk</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-empty mr-3"></div>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={() => changeLanguageHandler(languageType,5)} className={user.languageSkillDanish === 5 ? "language-box-1-clicked p-5 mb-5" : "language-box-1 p-5 mb-5" }>                        <div className="flex flex-col">
                            <div className="w-full mb-2">
                                <p className="language-box-1-text font-bold ">Jeg taler flydende dansk</p>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="circle-filled mr-3 ml-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                                <div className="circle-filled mr-3"></div>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>

            <div className="flex mt-10 scaled">
                <div className="flex-1 mr-2 ">
                    <Button onClick={moveBackward} className="flex bBtn w-3/4 sm:min-h-60 m-auto "><span className="proceedBtn">Tilbage</span></Button>
                </div>
                <div className="flex-1 ml-2">
                    <Button onClick={moveForward} disabled={user.languageSkillDanish === null} className="flex sBtn w-3/4 sm:min-h-60 m-auto"><span className="proceedBtn">Videre</span></Button>
                </div>
            </div>
        </Card>
    );
};

export default LanguageDanish;

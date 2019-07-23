import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from "../main/login/LoginConfig";
import {CreateBookingConfig} from "../main/booking/createBooking/CreateBookingConfig";
import {CreateCorporationConfig} from "../main/corporation/createCorporation/CreateCorporationConfig";
import {FrontPageConfig} from "../main/frontpage/FrontPageConfig";
import {HomeCorporationConfig} from "../main/corporation/homeCorporation/HomeCorporationConfig";


const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    CreateBookingConfig,
    CreateCorporationConfig,
    FrontPageConfig,
    HomeCorporationConfig

];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        component: () => <Redirect to="/frontpage"/>
    }
];

export default routes;

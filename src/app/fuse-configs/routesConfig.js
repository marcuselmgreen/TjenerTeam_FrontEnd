import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from "../main/login/LoginConfig";
import {CreateBookingConfig} from "../main/corporation/booking/createBooking/CreateBookingConfig";
import {CreateCorporationConfig} from "../main/corporation/corporationPage/createCorporation/CreateCorporationConfig";
import {FrontPageConfig} from "../main/frontpage/FrontPageConfig";
import {HomeCorporationConfig} from "../main/corporation/corporationPage/homeCorporation/HomeCorporationConfig";
import {EditBookingConfig} from "../main/corporation/booking/editBooking/EditBookingConfig";
import {EditCorporationProfileConfig} from "../main/corporation/corporationPage/profile/EditCorporationProfileConfig";


const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    CreateBookingConfig,
    CreateCorporationConfig,
    FrontPageConfig,
    HomeCorporationConfig,
    EditBookingConfig,
    EditCorporationProfileConfig,
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        component: () => <Redirect to="/frontpage"/>
    }
];

export default routes;

import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from "../main/login/LoginConfig";
import Login from "../main/login/Login";
import {CreateBookingConfig} from "../main/booking/createBooking/CreateBookingConfig";
import {CreateCorporationConfig} from "../main/corporation/CreateCorporationConfig";
import CreateBooking from "../main/booking/createBooking/CreateBooking";
import CreateCorporation from "../main/corporation/CreateCorporation";

const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    CreateBookingConfig,
    CreateCorporationConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    },
    {
        path     :'/login',
        component: Login
    },
    {
        path     :'/createBooking',
        component: CreateBooking
    },
    {
        path     :'/createUser',
        component: CreateCorporation
    }
];

export default routes;

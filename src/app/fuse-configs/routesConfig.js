import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from "../main/login/LoginConfig";
import Login from "../main/login/Login";
import {CreateBookingConfig} from "../main/booking/createBooking/CreateBookingConfig";

const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    CreateBookingConfig
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
        component: CreateBookingConfig
    },
];

export default routes;

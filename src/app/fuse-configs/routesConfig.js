import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from "../main/corporation/login/LoginConfig";
import {CreateBookingConfig} from "../main/corporation/booking/createBooking/CreateBookingConfig";
import {CreateCorporationConfig} from "../main/corporation/corporationPage/createCorporation/CreateCorporationConfig";
import {C_FrontPageConfig} from "../main/corporation/frontpage/C_FrontPageConfig";
import {HomeCorporationConfig} from "../main/corporation/corporationPage/homeCorporation/HomeCorporationConfig";
import {EditBookingConfig} from "../main/corporation/booking/editBooking/EditBookingConfig";
import {EditCorporationProfileConfig} from "../main/corporation/corporationPage/profile/EditCorporationProfileConfig";
import {E_FrontPageConfig} from "../main/employee/frontPage/E_FrontPageConfig";
import {E_LoginConfig} from "../main/employee/employeeLogin/E_LoginConfig";
import {E_PageConfig} from "../main/employee/employeePage/E_PageConfig";
import {createEmployeePageConfig} from "../main/employee/createEmployeePage/CreateEmployeePageConfig";


const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    CreateBookingConfig,
    CreateCorporationConfig,
    C_FrontPageConfig,
    HomeCorporationConfig,
    EditBookingConfig,
    EditCorporationProfileConfig,
    E_FrontPageConfig,
    E_LoginConfig,
    E_PageConfig,
    createEmployeePageConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        component: () => <Redirect to="/c_frontpage"/>
    }
];

export default routes;

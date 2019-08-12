
import CreateBooking from "./CreateBooking";
import authRoles from "../../../../auth/authRoles";

export const CreateBookingConfig = {
    settings: {
        layout: {
            config: {
                navbar         : {
                    display: false
                },
                toolbar        : {
                    display: false
                },
                footer         : {
                    display: false
                },
                leftSidePanel  : {
                    display: false
                },
                rightSidePanel : {
                    display: false
                }
            }
        }
    },
    // auth: authRoles.corporationPage,
    routes  : [
        {
            path     : '/createBooking',
            component: CreateBooking
        }
    ]
};

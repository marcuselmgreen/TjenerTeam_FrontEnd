import EditBooking from "./EditBooking";
import authRoles from "../../../../auth/authRoles";

export const EditBookingConfig = {
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
    auth: authRoles.corporation,
    routes  : [
        {
            path     : '/editBooking',
            component: EditBooking
        }
    ]
};

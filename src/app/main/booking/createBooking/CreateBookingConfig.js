
import CreateBooking from "./CreateBooking";
import authRoles from "../../../auth/authRoles";

export const CreateBookingConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    // auth: authRoles.corporation,
    routes  : [
        {
            path     : '/createBooking',
            component: CreateBooking
        }
    ]
};

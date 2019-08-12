import EditProfile from "./EditCorporationProfile";
import authRoles from "../../../../auth/authRoles";

export const EditCorporationProfileConfig = {
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
    // auth: authRoles.corporation,
    routes  : [
        {
            path     : '/editCorporationProfile',
            component: EditProfile
        }
    ]
};

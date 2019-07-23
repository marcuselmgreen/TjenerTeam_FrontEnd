import authRoles from "../../../auth/authRoles";
import HomeCorporation from "./HomeCorporation";

export const HomeCorporationConfig = {
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
            path     : '/homeCorporation',
            component: HomeCorporation
        }
    ]
};

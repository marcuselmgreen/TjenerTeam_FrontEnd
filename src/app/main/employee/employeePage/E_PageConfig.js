import E_Page from "./E_Page";


export const E_PageConfig = {
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
    routes  : [
        {
            path     : '/e_page',
            component: E_Page
        }
    ]
};

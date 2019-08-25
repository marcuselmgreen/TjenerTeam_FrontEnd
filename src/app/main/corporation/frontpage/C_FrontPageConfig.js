import C_FrontPage from './C_FrontPage';

export const C_FrontPageConfig = {
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
            path     : '/c_frontpage',
            component: C_FrontPage
        }
    ]
};

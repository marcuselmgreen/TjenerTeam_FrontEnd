import CreateEmployeePage from "./CreateEmployeePage";


export const createEmployeePageConfig = {
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
            path     : '/createEmployeePage',
            component: CreateEmployeePage
        }
    ]
};

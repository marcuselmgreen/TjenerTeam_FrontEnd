import CreateCorporation from './CreateCorporation';

export const CreateCorporationConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/createCorporation',
            component: CreateCorporation
        }
    ]
};

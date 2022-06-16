import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Welcomes from 'views/welcome';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));


// ==============================|| MAIN ROUTING ||============================== //

const Notauth = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Welcomes />
        }
        // ,
        // {
        //     path: '/dashboard/default',
        //     element: <DashboardDefault />
        // },
        // {
        //     path: '/utils/util-typography',
        //     element: <UtilsTypography />
        // }
        // ,
        // {
        //     path: '/utils/util-color',
        //     element: <UtilsColor />
        // },
        // {
        //     path: '/utils/util-shadow',
        //     element: <UtilsShadow />
        // },
        // {
        //     path: '/icons/tabler-icons',
        //     element: <UtilsTablerIcons />
        // },
        // {
        //     path: '/icons/material-icons',
        //     element: <UtilsMaterialIcons />
        // },
        // {
        //     path: '/sample-page',
        //     element: <SamplePage />
        // }
        // ,
        // {
        //     path: '/bigdata',
        //     element: <Bigdatapage />
        // }
        // ,
        // {
        //     path: '/datawh',
        //     element: <Datawhpage />
        // }
        // ,
        // {
        //     path: '/ojectstorage',
        //     element: <Objectstorepage />
        // }
        // ,
        // {
        //     path: '/dataingest',
        //     element: <Dataingestpage />
        // }
        // ,
        // {
        //     path: '/datastream',
        //     element: <Datastreampage />
        // }
        // ,
        // {
        //     path: '/databackup',
        //     element: <Databackuppage />
        // }
        // ,
        // {
        //     path: '/dataai',
        //     element: <Dataaipage />
        // }
        // ,
        // {
        //     path: '/financereport',
        //     element: <Financereportpage />
        // }
        // ,
        // {
        //     path: '/datavisual',
        //     element: <Datavisualpage />
        // }
        // ,
        // {
        //     path: '/dragonfly',
        //     element: <Dragonflypage />
        // }
    ]
};

export default Notauth;

import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
 

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Bigdatapage = Loadable(lazy(() => import('views/bigdata')));
const Datawhpage = Loadable(lazy(() => import('views/datawh')));
const Objectstorepage = Loadable(lazy(() => import('views/objectstore')));
const Dataingestpage = Loadable(lazy(() => import('views/dataingest')));
const Datastreampage = Loadable(lazy(() => import('views/datastream')));
const Databackuppage = Loadable(lazy(() => import('views/databackup')));
const Dataaipage = Loadable(lazy(() => import('views/dataai')));
const Financereportpage = Loadable(lazy(() => import('views/financereport')));
const Datavisualpage = Loadable(lazy(() => import('views/datavisual')));
const Dragonflypage= Loadable(lazy(() => import('views/dragonfly')));
const MonitorJob = Loadable(lazy(() => import('views/dataingest/MonitorJob')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
        ,
        {
            path: '/bigdata',
            element: <Bigdatapage />
        }
        ,
        {
            path: '/datawh',
            element: <Datawhpage />
        }
        ,
        {
            path: '/ojectstorage',
            element: <Objectstorepage />
        }
        ,
        {
            path: '/dataingest',
            element: <Dataingestpage />
        }
        ,
        {
            path: '/datastream',
            element: <Datastreampage />
        }
        ,
        {
            path: '/databackup',
            element: <Databackuppage />
        }
        ,
        {
            path: '/dataai',
            element: <Dataaipage />
        }
        ,
        {
            path: '/financereport',
            element: <Financereportpage />
        }
        ,
        {
            path: '/datavisual',
            element: <Datavisualpage />
        }
        ,
        {
            path: '/dragonfly',
            element: <Dragonflypage />
        }
        ,
        {
            path: '/monitorjob',
            element: <MonitorJob />
        }
    ]
};

export default MainRoutes;
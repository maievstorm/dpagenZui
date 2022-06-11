import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';
const Airflow = Loadable(lazy(() => import("./airflow/Airflow")));
const Audio = Loadable(lazy(() => import("./audio/Audio")));
const CloudStorage = Loadable(lazy(() => import("./cloudstorage/CloudStorage")));
const Database = Loadable(lazy(() => import("./database/Database")));
const Streaming = Loadable(lazy(() => import("./streaming/Streaming")));
const Visualization = Loadable(lazy(() => import("./visualization/Visualization")));

const dpaRoutes = [
    {
        path: '/dpa/airflow',
        element: <Airflow />,
    },
    {
        path: '/dpa/audio',
        element: <Audio />,
    },
     {
         path: '/dpa/cloudstorage',
         element: <CloudStorage />,
     },
    {
        path: '/dpa/database',
        element: <Database />,
    },
    {
        path: '/dpa/streaming',
        element: <Streaming />,
    },
    {
        path: '/dpa/visualization',
        element: <Visualization />,
    },
]

export default dpaRoutes
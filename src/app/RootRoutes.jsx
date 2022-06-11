import React from 'react'
import { Redirect } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'
import dpaRoutes from './views/dpa/DpaRoutes'
import apiRoutes from 'app/apiRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...dpaRoutes,
    ...apiRoutes,
    ...dashboardRoutes,
    ...materialRoutes,
    ...chartsRoute,
    ...errorRoute,
]

export default routes

import React from 'react'
import { Redirect } from 'react-router-dom'
import chartsRoute from './views/charts/ChartsRoute'
import dashboardRoutes from './views/dashboard/DashboardRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'
import dpaRoutes from './views/dpa/DpaRoutes'
import apiroutes from './apiroutes'

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
    ...apiroutes,
    ...dashboardRoutes,
    ...materialRoutes,
    ...chartsRoute,
    ...errorRoute,
]

export default routes

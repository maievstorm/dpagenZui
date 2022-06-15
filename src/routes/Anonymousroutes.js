import { lazy } from 'react';
// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import UserService from 'services/UserService';


const Welcome = Loadable(lazy(() => import('../components/welcome')));
 

const Anonymousroutes  = ({ children }) => (!UserService.isLoggedIn()) ? children :  {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/welcome',
            element: <Welcome />
        } 
    ]
};

export default Anonymousroutes
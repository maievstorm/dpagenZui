import { Typography } from '@mui/material';
import UserService from "../services/UserService";
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Welcome = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            sssssssssssssssss
        </Typography>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
    </MainCard>
);

export default Welcome;
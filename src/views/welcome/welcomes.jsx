import { Typography } from '@mui/material';
import UserService from 'services/UserService';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Welcomes = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            
        </Typography>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
    </MainCard>
);

export default Welcomes;
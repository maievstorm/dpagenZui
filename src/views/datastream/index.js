// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CreateStreamJob from './CreateStreamJob';

// ==============================|| Bigdata Page ||============================== //

const Datastreampage = () => (
    <MainCard title="Truyền tải trực tuyến">
        <CreateStreamJob/>
    </MainCard>
);

export default Datastreampage;

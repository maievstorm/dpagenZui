// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import FormService from './FormService';
// ==============================|| Bigdata Page ||============================== //

const RegisterService = () => (
    <MainCard title="Các gói dịch vụ">
        <FormService/>
    </MainCard>
);
export default RegisterService;
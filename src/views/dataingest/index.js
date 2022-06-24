// material-ui
import CreateETLjob from './CreateJob'
import { MultiStepForm } from './MultiStepForm';
 

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Bigdata Page ||============================== //

const Dataingestpage = () => (
    <MainCard title="Lưu chuyển dữ liệu">
       
            {/* <CreateETLjob/> */}
            <MultiStepForm/>
     
    </MainCard>
);

export default Dataingestpage;

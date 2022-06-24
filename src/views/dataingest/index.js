// material-ui
import CreateETLjob from './CreateJob'
import { MultiStepForm } from './MultiStepCreateJobForm';
import MonitorJob from './MonitorJob';
 
 

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Bigdata Page ||============================== //

const Dataingestpage = () => (
    <MainCard title="Lưu chuyển dữ liệu">
       

            {/* <CreateETLjob/> */}
            <MonitorJob/>
     
    </MainCard>
);

export default Dataingestpage;

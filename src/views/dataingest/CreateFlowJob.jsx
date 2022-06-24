import { MultiStepCreateJobForm } from './MultiStepCreateJobForm';
 
 

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Bigdata Page ||============================== //

const CreateFlowJob = () => (
    <MainCard title="Thêm mới tiến trình">
            <MultiStepCreateJobForm/>
    </MainCard>
);

export default CreateFlowJob;
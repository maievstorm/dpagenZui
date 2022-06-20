// material-ui
import React from 'react'
//import { IconCloudDownload,IconTrash} from '@tabler/icons';
 

// project imports
import MainCard from 'ui-component/cards/MainCard';
import ChecksongDataTable from './Checksongtable';



// ==============================|| Dragonfly Page ||============================== //


const Dragonflypage = () => {
    
    return (
        <MainCard>
           <ChecksongDataTable></ChecksongDataTable>
        </MainCard>
    )
}
export default Dragonflypage;

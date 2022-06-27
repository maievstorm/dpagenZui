// import React from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";
// import { ConfigProvider as AvatarConfigProvider } from 'react-avatar';

// import DpaStorage from "./DpaStorage";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//       <AvatarConfigProvider colors={['A03C78', 'ED8E7C','93D9A3', 'CDF3A2']}>
//         <DpaStorage />
//       </AvatarConfigProvider>
//   </React.StrictMode>,
//   rootElement
// );


// material-ui
import React from 'react'
//import { IconCloudDownload,IconTrash} from '@tabler/icons';
 

// project imports
import MainCard from 'ui-component/cards/MainCard';
import DpaStorage from "./DpaStorage";



const ManageDpaStorage = () => {
    
    return (
        <MainCard>
           <DpaStorage />
        </MainCard>
    )
}
export default ManageDpaStorage;

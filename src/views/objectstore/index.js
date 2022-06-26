// material-ui

// import React from 'react'
// import { useEffect, useState } from 'react';

// import { gridSpacing } from 'store/constant';
// import { Grid } from '@mui/material';


// import Listbucketpage from './05Listbucket';
// import Bucketinfopage from './01bucketinfo';
// import Bucketvolumnpage from './02bucketvolumn';
// import Bucketupload from './03bucketupload';
// import Createprocesspage from './04Createprocess';
import MonitorObject from './MonitorObject';



//const Objectstorepage = () => {
    
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    // return (
    //     <Grid container spacing={gridSpacing}>
    //         <Grid item xs={12}>
    //             <Grid container spacing={gridSpacing}>
    //                 <Grid item lg={4} md={6} sm={6} xs={12}>
    //                     <Bucketinfopage isLoading={isLoading} />
    //                 </Grid>
    //                 <Grid item lg={4} md={6} sm={6} xs={12}>
    //                     <Bucketvolumnpage isLoading={isLoading} />
    //                 </Grid>
    //                 <Grid item lg={4} md={12} sm={12} xs={12}>
    //                     <Grid container spacing={gridSpacing}>
    //                         <Grid item sm={6} xs={12} md={6} lg={12}>
    //                             <Bucketupload isLoading={isLoading} />
    //                         </Grid>
    //                         <Grid item sm={6} xs={12} md={6} lg={12}>
    //                             <Createprocesspage isLoading={isLoading} />
    //                         </Grid>
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //         <Grid item xs={12}>
    //             <Grid container spacing={gridSpacing}>
    //                 <Grid item xs={12} md={8}>
    //                     <Listbucketpage isLoading={isLoading} />
    //                 </Grid>
    //                 <Grid item xs={12} md={4}>
    //                     {/* <PopularCard isLoading={isLoading} /> */}
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // );

// <MonitorObject></MonitorObject>
//}

//export default Objectstorepage;


const Objectstorepage = () => (
    <MonitorObject></MonitorObject>
);

export default Objectstorepage;

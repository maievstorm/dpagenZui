import { useLocation } from "react-router"
import ReviewItem from "./stepForm/ReviewItem"
import config from "../../config";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import axios from "axios";
import { IconButton } from '@mui/material';
import { Info } from "./stepForm/Info";
import { Query } from "./stepForm/Query";
import { Source } from "./stepForm/Source";



export default function EditFlowJob() {
    const location = useLocation()
    const DagId = location?.state?.id
    const getairflowapi = config.rootapi + '/invoice/' + DagId;

    const [conf, setConf] = useState()
    const [edit, setEdit] = useState(false)

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setConf((conf) => ({
            ...conf,
            [targetName]: targetValue
        }));
    };
    console.log(conf)

    useEffect(() => {
        axios.get(getairflowapi)
            .then(res => {
                let data = res.data.data;
                data = JSON.parse(data.customer_invoice_data);
                setConf(data.conf.conf)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <Box>
            <h3>Thông số chi tiết tiến trình</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <IconButton onClick={() => setEdit(!edit)}>
                            <EditIcon color="primary" fontSize="medium" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>
                            <NotStartedOutlinedIcon color="primary" fontSize="medium" />
                        </IconButton>

                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <ReviewItem conf={conf} edit={edit} onInputChanged={onInputChanged}/>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Log here</h1>
                        
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )

}
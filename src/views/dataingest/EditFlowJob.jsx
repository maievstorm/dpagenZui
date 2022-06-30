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
import UserService from 'services/UserService';


export default function EditFlowJob() {
    const location = useLocation()
    const DagId = location?.state?.id
    console.log(DagId)

    const [confInfo, setConfInfo] = useState()
    const [edit, setEdit] = useState(false)
    const [formSrcFields, setFormSrcFields] = useState([])
    const [formQuery, setformQuery] = useState([])

    const onInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;

        setConfInfo((confInfo) => ({
            ...confInfo,
            [targetName]: targetValue
        }));
    };



    useEffect(() => {
        const getairflowapi = config.rootapi + '/invoice/' + DagId;
        axios.get(getairflowapi)
            .then(res => {
                let data = res.data.data;
                data = JSON.parse(data.customer_invoice_data);
                data = data.conf.conf
                setConfInfo(data)
                setFormSrcFields(data.source)
                setformQuery(data.query)
            })
            .catch(err => console.log(err))

    }, [])
    const handleFormSrcChange = (event, index) => {
        let data = [...formSrcFields];
        data[index][event.target.name] = event.target.value;
        setFormSrcFields(data);
    }
    const removeFields = (index) => {
        let data = [...formSrcFields];
        data.splice(index, 1)
        setFormSrcFields(data)
    }
    const addFields = () => {
        let object = {
            sourcetype: '',
            connectstring: '',
            tablename: '',
            alias: ''
        }

        setFormSrcFields([...formSrcFields, object])
    }
    const removeQuery = (index) => {
        let data = [...formQuery];
        data.splice(index, 1)
        setformQuery(data)
    }
    const addFieldQuery = () => {
        let object = {
            queryname: '',
            querydetail: '',
            // targettype: '',
            listsourcetable: '',
            targettable: ''
        }

        setformQuery([...formQuery, object])

    }
    const handleformQuery = (event, index) => {
        let data = [...formQuery];
        data[index][event.target.name] = event.target.value;
        setformQuery(data);
    }
  

    const submit = () => {
        let conf = {
            'DagId': confInfo.DagId,
            "Schedule": confInfo.Schedule,
            "owner": UserService.getUsername(),
            'tags': confInfo.tags,
            'source': formSrcFields,
            'query': formQuery
        }
        const body = {
            "conf": {
                conf
            },
        }
        console.log(body)
        axios({
            method: 'post',
            url: config.airflowapi + '/dags/dag_create_job_file/dagRuns',

            auth: {
                username: 'hung',
                password: '123456a@'
            },
            data: body
        });

        const invoicebody =
        {
            "item_name": conf.DagId,
            "item_type": 'airflow',
            "customer_invoice_data": JSON.stringify(body),
            "subscription_id": 1,
            "plan_history_id": 1,
            "invoice_period_start_date": new Date().toLocaleString() + '',
            "invoice_period_end_date": new Date().toLocaleString() + '',
            "invoice_description": conf.DagId,
            "invoice_amount": 100,
            "invoice_created_ts": new Date().toLocaleString() + '',
            "invoice_due_ts": new Date().toLocaleString() + '',
            "invoice_paid_ts": new Date().toLocaleString() + ''
        }

        console.log(invoicebody)
        axios({
            method: 'post',
            url: config.rootapi + '/invoice',
            data: invoicebody
        });
    }


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
                        <IconButton onClick={submit}>
                            <NotStartedOutlinedIcon color="primary" fontSize="medium" />
                        </IconButton>

                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <ReviewItem conf={confInfo} edit={edit} onInputChanged={onInputChanged}
                            formSrcFields={formSrcFields}
                            formQuery={formQuery}
                            addFields={addFields}
                            removeFields={removeFields}
                            handleFormSrcChange={handleFormSrcChange}
                            removeQuery={removeQuery}
                            addFieldQuery={addFieldQuery}
                            handleformQuery={handleformQuery}
                            setformQuery={setformQuery}

                        />
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Log here</h1>

                    </Grid>
                </Grid>
            </Box>
        </Box>

    )

}
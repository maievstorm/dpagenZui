import { useLocation, useNavigate } from "react-router"
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
import UserService from 'services/UserService';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogInfo from "./LogInfo";
import MainCard from "ui-component/cards/MainCard";


export default function EditFlowJob() {
    const location = useLocation()
    const DagId = location?.state?.id
    const navigate = useNavigate()

    const [confInfo, setConfInfo] = useState()
    const [edit, setEdit] = useState(false)
    const [formSrcFields, setFormSrcFields] = useState([])
    const [formQuery, setformQuery] = useState([])
    const [rows, setData] = useState([]);


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
        let router = config.airflowapi + '/dags/' + DagId + '/dagRuns?limit=40&order_by=-start_date'

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
        axios({
            method: 'get',
            url: router,
            auth: {
                username: 'hung',
                password: '123456a@'
            }

        })
            .then(res => {
                setData(res.data.dag_runs.map(item => {
                    let start_date = new Date(Date.parse(item.start_date)).toLocaleString()
                    // let execution_date = new Date( Date.parse(item.execution_date) ).toLocaleString()
                    let end_date = new Date(Date.parse(item.end_date)).toLocaleString()

                    return {
                        'dag_run_id': item.dag_run_id,
                        'start_date': start_date,
                        // 'execution_date': execution_date,
                        'end_date': end_date,
                        'state': item.state
                    }
                }))
            })

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


    const save = () => {
        let conf = {
            'DagId': confInfo.DagId,
            "Schedule": confInfo.Schedule,
            'schedule_interval': confInfo.schedule_interval,
            "owner": UserService.getUsername(),
            'tags': confInfo.tags,
            'subscription_id': confInfo.subscription_id,
            'source': formSrcFields,
            'query': formQuery
        }
        const body = {
            "conf": { conf }
        }
        const data = {
            "customer_invoice_data": JSON.stringify(body),
            "invoice_description": confInfo.DagId
        }
        let router = config.rootapi + '/invoice/itemname/' + confInfo.DagId
        axios({
            method: 'post',
            url: config.airflowapi + '/dags/dag_create_job_file/dagRuns',

            auth: {
                username: 'hung',
                password: '123456a@'
            },
            data: body
        })
            .then(res => {
                if (res.status === 200) {
                    axios({
                        method: 'put',
                        url: router,
                        data: data
                    })
                    navigate('/dataingest/', { state: { id: DagId } })
                }
            })


    }
    const submit = () => {
        let conf = {
            'DagId': confInfo.DagId,
            "Schedule": confInfo.Schedule,
            'schedule_interval': confInfo.schedule_interval,
            "owner": UserService.getUsername(),
            'tags': confInfo.tags,
            'subscription_id': confInfo.subscription_id,
            'source': formSrcFields,
            'query': formQuery
        }
        const body = {
            "conf": { conf }
        }

        axios({
            method: 'post',
            url: config.airflowapi + '/dags/' + confInfo.DagId + '/dagRuns',

            auth: {
                username: 'hung',
                password: '123456a@'
            },
            data: body
        })

    }
    const backtodataingest = () => {

        navigate('/dataingest');
    }
    const divStyle = {
        marginTop: '10px',

    };



    return (
        <MainCard>
            <Box>
                <h3><IconButton onClick={() => backtodataingest()}>
                    <ArrowBackIcon color="primary" fontSize="medium" />
                </IconButton>Thông số chi tiết tiến trình</h3>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 6, md: 12 }} style={divStyle}>
                        <Grid item xs={3} sm={6} md={4}>
                            <IconButton onClick={() => setEdit(!edit)}>
                                <EditIcon color="primary" fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} sm={6} md={4}>
                            <IconButton onClick={save}>
                                <SaveIcon color="primary" fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3} sm={6} md={4}>
                            <IconButton onClick={submit}>
                                <NotStartedOutlinedIcon color="primary" fontSize="medium" />
                            </IconButton>
                        </Grid>

                    </Grid>
                </Box>


                <Box sx={{ flexGrow: 1 }}>
                <ReviewItem conf={confInfo} edit={edit} onInputChanged={onInputChanged}
                                formSrcFields={formSrcFields}
                                formQuery={formQuery}
                                addFields={addFields}
                                setConfInfo={setConfInfo}
                                removeFields={removeFields}
                                handleFormSrcChange={handleFormSrcChange}
                                removeQuery={removeQuery}
                                addFieldQuery={addFieldQuery}
                                handleformQuery={handleformQuery}
                                setformQuery={setformQuery}

                            />
                </Box>
            </Box>
        </MainCard>

    )

}
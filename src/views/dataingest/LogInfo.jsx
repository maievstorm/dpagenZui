import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import config from "../../config";
import Box from '@mui/material/Box';
import axios from "axios";
import MUIDataTable from "mui-datatables";
import DataIngest from "services/DataIngest";
export default function LogInfo() {
    const navigate = useNavigate()
    const location = useLocation()
    const DagId = location?.state?.id
    const [rows, setData] = useState([]);

    useEffect(() => {
        DataIngest.getLoginfo(DagId)
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

    const columns = [
        {
            name: "dag_run_id",
            options: {
                filter: true
            },
            label: 'Lịch sử'
        },
        {
            name: "start_date",
            options: {
                filter: true
            },
            label: 'Bắt đầu',
        },
        // {
        //     name: "execution_date",
        //     options: {
        //         filter: true
        //     },
        //     label: 'execution_date'
        // },
        {
            name: "end_date",
            options: {
                filter: true
            },
            label: 'Kết thúc'
        }
        ,
        {
            name: "state",
            options: {
                filter: true
            },
            label: 'Trạng thái'
        }

    ];
    const options = {
        filter: false,
        print: false,
        selectableRows: "single",
        responsive: "standard",
        selectableRows: false
    };

    return (
        <Box>
            <Box>
                <Button onClick={() => navigate('/dataingest')} > {<ArrowBackIcon />} Quay lại</Button>
                <p>Tên tiến trình: <strong>{DagId}</strong></p>
            </Box>

            <MUIDataTable
                title={"Lịch sử tiến trình"}
                data={rows}
                columns={columns}
                options={options}

            />
        </Box>
    )
}
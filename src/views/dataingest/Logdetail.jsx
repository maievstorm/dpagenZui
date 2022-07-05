import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MUIDataTable from "mui-datatables";
import DataIngest from "services/DataIngest";

export default function Logdetail() {
    const navigate = useNavigate()
    const location = useLocation()
    const DagIdnDagrunId = location?.state?.id;
    const [rows, setData] = useState([]);

    useEffect(() => {
        DataIngest.Logdetail(DagIdnDagrunId)
            .then(res => {
                
                setData(res.data.task_instances.map(item => {
                    let start_date = new Date(Date.parse(item.start_date)).toLocaleString()
                    let end_date = new Date(Date.parse(item.end_date)).toLocaleString()

                    return {
                        'task_id': item.task_id,
                        'start_date': start_date,
                        'end_date': end_date,
                        'state': item.state,
                        'duration' : item.duration,
                    }
                }))
            })

    }, [])

    const columns = [
        {
            name: "task_id",
            options: {
                filter: true
            },
            label: 'Bước'
        },
        {
            name: "start_date",
            options: {
                filter: true
            },
            label: 'Bắt đầu',
        },
      
        {
            name: "end_date",
            options: {
                filter: true
            },
            label: 'Kết thúc'
        }
        ,
        {
            name: "duration",
            options: {
                filter: true
            },
            label: 'Thời gian'
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
        textLabels: {},
        selectableRows: false 
       
       
    }; 

    const BacktoDag = (selected) => {
        navigate('/dataingest/loginformation',{state:{id:selected}})

    } 

    return (
        <Box>
            <Box>
                <Button onClick={() => BacktoDag(DagIdnDagrunId.split("/")[0])} >{<ArrowBackIcon />}</Button>
                <p>Tên tiến trình: <strong>{DagIdnDagrunId}</strong></p>
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
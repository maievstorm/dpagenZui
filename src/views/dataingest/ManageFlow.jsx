import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import config from "../../config";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import UserService from 'services/UserService';
import { Tooltip, IconButton } from '@mui/material';



export default function ManageFlow() {
    const [rows, setData] = useState([]);
    const columns = [
        {
            name: "id_invoice",
            options: {
                filter: true
            },
            label: 'ID'
        },
        {
            name: "item_name",
            options: {
                filter: true
            },
            label: 'Tên tiến trình',
        },
        {
            name: "invoice_created_ts",
            options: {
                filter: false
            },
            label: 'Ngày tạo'
        }

    ];
    const getairflowapi = config.rootapi + '/invoice/usernamentype/' + UserService.getUsername() + '&airflow';

    useEffect(() => {
        axios({ method: 'get', url: getairflowapi }
        ).then(res => {
            setData(res.data.data);
        }).catch(err => { console.log(err) })
    }, []);




    const onStartJobClickHandler = (selected) => {
        console.log(selected);
        const apidagurl = config.airflowapi + '/dags/' + selected + '/dagRuns'

        const body = {
            "conf": {},
        }
        axios({
            method: 'post',
            url: apidagurl,

            auth: {
                username: 'hung',
                password: '123456a@'
            },
            data: body
        });
    }

    const onEdittJobClickHandler = (selected) => {
        console.log(selected);

    }

    const options = {
        filter: false,
        print: false,
        selectableRows: "single",
        responsive: "standard",
        textLabels: {},
        customToolbarSelect: selectedRows => (
            <>
                <Tooltip title="Kích hoạt tiến trình">
                    <IconButton
                        onClick={() => {

                            onStartJobClickHandler(rows[selectedRows.data[0].dataIndex]['item_name']);

                        }}

                    >
                        <PlayCircleOutlineIcon />
                    </IconButton>

                </Tooltip>
                <Tooltip title="Hiệu chỉnh tiến trình">
                    <IconButton
                        onClick={() => {

                            onEdittJobClickHandler(rows[selectedRows.data[0].dataIndex]['item_name']);

                        }}

                    >
                        <ModeEditIcon />
                    </IconButton>

                </Tooltip>
            </>

        )
    };



    const navigate = useNavigate()

    const onClickHandler = () => navigate('/dataingest/createflowjob')



    return (
        <div>
            <Button onClick={onClickHandler} > {<AddIcon />} Tiến trình mới</Button>
            {/* <Button   > {<ModeEditIcon/>} Tải xuống</Button>
                <Button   > {<ModeEditIcon/>} Xoá</Button> */}
            <MUIDataTable
                title={"Danh sách tiến trình"}
                data={rows}
                columns={columns}
                options={options}
            />

        </div>

    )

}




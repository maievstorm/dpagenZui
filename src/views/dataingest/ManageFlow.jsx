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

import RateReviewIcon from '@mui/icons-material/RateReview';

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
   
    // const getapi='https://dpaapigw.apps.xplat.fis.com.vn/dpzapi/api/v1' + '/invoice/usernamentype/' + UserService.getUsername() + '&airflow';
    // let JWTToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDTE9PbHdEZ0pPTGpVOHVzMnoySTNyT2pzRkEzNnF6TiJ9.2hsA0NJzwy2YJOeST2JnYJoRIohiJh9SHaKvp9GhgjM';
    // useEffect(() => {
    //     axios({ method: 'get', url: getapi,  headers: {"authorization" : `Bearer ${JWTToken}`}  }
    //     ).then(res => {
    //         setData(res.data.data.map(item=>{
    //             let invoice_created_ts = new Date(Date.parse(item.invoice_created_ts)).toLocaleString()
    //             return {
    //                 'id_invoice':item.id_invoice,
    //                 'item_name':item.item_name,
    //                 'invoice_created_ts':invoice_created_ts
    //             }

    //         }));
    //         // setData(res.data.data);
    //     }).catch(err => { console.log(err) })
    // }, []);


    const getairflowapi = config.rootapi + '/invoice/usernamentype/' + UserService.getUsername() + '&airflow';
       useEffect(() => {
        axios({ method: 'get', url: getairflowapi  }
        ).then(res => {
            setData(res.data.data.map(item=>{
                let invoice_created_ts = new Date(Date.parse(item.invoice_created_ts)).toLocaleString()
                return {
                    'id_invoice':item.id_invoice,
                    'item_name':item.item_name,
                    'invoice_created_ts':invoice_created_ts
                }

            }));
            // setData(res.data.data);
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

    const onEdittJobClickHandler = (type,selected) => {
        navigate(type,{state:{id:selected}})

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
                <Tooltip title="Xem log">
                    <IconButton
                        onClick={() => {

                            onEdittJobClickHandler('loginformation',rows[selectedRows.data[0].dataIndex]['item_name']);

                        }}

                    >
                        <RateReviewIcon />
                    </IconButton>

                </Tooltip>
                <Tooltip title="Hiệu chỉnh tiến trình">
                    <IconButton
                        onClick={() => {

                            onEdittJobClickHandler('editflowjob',rows[selectedRows.data[0].dataIndex]['item_name']);

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




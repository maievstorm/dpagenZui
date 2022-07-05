import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import config from "../../config";
import { Tooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';





export default function ManageSubscription() {
    const [rows, setData] = useState([]);
    const columns = [
        {
            name: "id",
            options: {
                filter: true
            },
            label: 'ID'
        },
        {
            name: "user_account_id",
            options: {
                filter: true
            },
            label: 'ID Tài khoản',
        },
        {
            name: "user_name",
            options: {
                filter: false
            },
            label: 'Tài khoản'
        }
        ,
        {
            name: "fullname",
            options: {
                filter: false
            },
            label: 'Họ và tên'
        }
        ,
        {
            name: "email",
            options: {
                filter: false
            },
            label: 'Email'
        },
        {
            name: "upassword",
            options: {
                filter: false
            },
            label: 'Mật khẩu'
        },
        {
            name: "offer_id",
            options: {
                filter: false
            },
            label: 'ID Offer'
        },
        {
            name: "plan_id",
            options: {
                filter: false
            },
            label: 'ID Plan'
        },
        {
            name: "request_date",
            options: {
                filter: false
            },
            label: 'Ngày yêu cầu'
        },
        {
            name: "request_status",
            options: {
                filter: false
            },
            label: 'Trạng thái'
        }

    ];
    const getsubapi = config.rootapi + '/requestsub';

    useEffect(() => {
        axios({ method: 'get', url: getsubapi }
        ).then(res => {
            setData(res.data.data.map(item => {
                let request_date = new Date(Date.parse(item.request_date)).toLocaleString()
                return {
                    'id': item.id,
                    'user_account_id':item.user_account_id,
                    'user_name':item.user_name,
                    'fullname':item.fullname,
                    'email':item.email,
                    'upassword':item.upassword,
                    'offer_id':item.offer_id,
                    'plan_id':item.plan_id,
                    'request_date': item.request_date,
                    'request_status':item.request_status
                }

            }));
            // setData(res.data.data);
        }).catch(err => { console.log(err) })
    }, []);




    const options = {
        filter: false,
        print: false,
        selectableRows: "single",
        responsive: "standard",
        textLabels: {},
        customToolbarSelect: selectedRows => (
            <>
                <Tooltip title="Tải về">
                    <IconButton
                        onClick={() => {
                            console.log(rows[selectedRows.data[0].dataIndex]['user_name']) 
                            console.log(rows[selectedRows.data[0].dataIndex]['offer_id']) 
                            console.log(rows[selectedRows.data[0].dataIndex]['plan_id']) 
                          

                        }}

                    >
                        <FileDownloadIcon />
                    </IconButton>
                </Tooltip>

                

            </>

        )

    };





    return (
        <div>

            <MUIDataTable
                title={"Danh sách subscription"}
                data={rows}
                columns={columns}
                options={options}
            />

        </div>

    )

}




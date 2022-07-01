import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import config from "../../config";
import UserService from 'services/UserService';




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
            label: 'user_account_id',
        },
        {
            name: "user_name",
            options: {
                filter: false
            },
            label: 'user_name'
        }
        ,
        {
            name: "fullname",
            options: {
                filter: false
            },
            label: 'fullname'
        }
        ,
        {
            name: "email",
            options: {
                filter: false
            },
            label: 'email'
        },
        {
            name: "upassword",
            options: {
                filter: false
            },
            label: 'upassword'
        },
        {
            name: "offer_id",
            options: {
                filter: false
            },
            label: 'offer_id'
        },
        {
            name: "plan_id",
            options: {
                filter: false
            },
            label: 'plan_id'
        },
        {
            name: "request_date",
            options: {
                filter: false
            },
            label: 'request_date'
        },
        {
            name: "request_status",
            options: {
                filter: false
            },
            label: 'request_status'
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
        textLabels: {}

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




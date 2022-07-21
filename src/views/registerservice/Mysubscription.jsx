import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import { GetProcess } from 'services/DataIngest';
import OfferPlanService from 'services/OfferPlanService';

// id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
// user_account_id integer,
// user_name character varying(250) COLLATE pg_catalog."default" NOT NULL,
// fullname character varying(250) COLLATE pg_catalog."default",
// email character varying(250) COLLATE pg_catalog."default",
// upassword character varying(250) COLLATE pg_catalog."default",
// offer_id integer,
// plan_id integer,
// request_date timestamp without time zone,
// request_status character(1) COLLATE pg_catalog."default",
// request_type integer,
// CONSTRAINT requestsub_pkey PRIMARY KEY (id)
//)


export default function Mysubscription() {
    const [rows, setData] = useState([]);
    const columns = [
        {
            name: "user_name",
            options: {
                filter: true
            },
            label: 'Tài khoản'
        },
        {
            name: "fullname",
            options: {
                filter: true
            },
            label: 'Họ và tên',
        }
        ,
        {
            name: "email",
            options: {
                filter: false
            },
            label: 'Email'
        }
        ,
        {
            name: "offer_id",
            options: {
                filter: false
            },
            label: 'Mã yêu cầu'
        }
        ,
        {
            name: "request_status",
            options: {
                filter: false
            },
            label: 'Trạng thái'
        }

    ];

    useEffect(() => {
        OfferPlanService.getMyreqest()
            .then(res => {
                setData(res.data.data.map(item => {
                    let request_date = new Date(Date.parse(item.request_date)).toLocaleString()
                    return {
                        'user_name': item.user_name,
                        'fullname': item.fullname,
                        'request_date': request_date,
                        'email': item.email,
                        'offer_id': item.offer_id,
                        'request_status': item.request_status

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

    const navigate = useNavigate()
    const onClickHandler = () => navigate('/datastream/registerstream')


    return (
        <div>
            <MUIDataTable
                title={"Danh yêu cầu"}
                data={rows}
                columns={columns}
                options={options}
            />

        </div>

    )

}





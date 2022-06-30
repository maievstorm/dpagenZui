import { useEffect, useState } from "react";

import config from "../../config";
import Box from '@mui/material/Box';
import axios from "axios";
import MUIDataTable from "mui-datatables";
export default function LogInfo(props) {
    const rows = props?.rows

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
        <>
        <MUIDataTable
            title={"Lịch sử tiến trình"}
            data={rows}
            columns={columns}
            options={options}
             
        />
        </>
    )
}
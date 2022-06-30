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
            label: 'dag_run_id'
        },
        {
            name: "start_date",
            options: {
                filter: true
            },
            label: 'start_date',
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
            label: 'end_date'
        }
        ,
        {
            name: "state",
            options: {
                filter: true
            },
            label: 'state'
        }

    ];
    const options = {
        filter: false,
        print: false,
        selectableRows: "single",
        responsive: "standard"
      };
    return (
        <>
        <MUIDataTable
            title={"Danh sách tiến trình"}
            data={rows}
            columns={columns}
            options={options}
        />
        </>
    )
}
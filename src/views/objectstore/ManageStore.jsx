import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import config from "../../config";
import * as minio from "minio";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

import EditIcon from "@material-ui/icons/Create";

import { Tooltip, IconButton } from '@mui/material';



export default function ManageStore() {
    const [rows, setData] = useState([]);
    const columns = [
        {
            name: "name",
            options: {
                filter: true
            },
            label: 'Tên tệp'
        },
        {
            name: "size",
            options: {
                filter: true
            },
            label: 'Dung lượng tệp',
        },
        {
            name: "lastModified",
            options: {
                filter: false
            },
            label: 'Ngày tạo'
        }

    ];
    useEffect(() => {
        const getBuckets = async () => {
            // create the client
            const fileObj = []
            const mc = new minio.Client({
                endPoint: config.storageapi,
                useSSL: true,
                accessKey: "s2l92I0TXj01BOGP",
                secretKey: "Q25hRHG13VxoKPrFmgLuXMDOi3WFOLFk"
            });


            const stream = await mc.listObjects('youtube', '', true);

            stream.on('data', function (obj) { fileObj.push(obj) });
            stream.on("end", function () {
                setData(JSON.parse(JSON.stringify(fileObj)));
            });
            stream.on('error', function (err) { console.log(err) });
        };
        getBuckets();
    }, []);
    console.log(rows)

    const handleRowClick = (rowData, rowMeta) => {
        console.log(rowData, rowMeta);
    };

    // const options = {
    //     filter: false,
    //     filterType: "dropdown",
    //     responsive: "stacked",
    //     print: false,
    //     onRowsSelect: data => {
    //         console.log(data);
    //       },

    //   };

    const [test, setTest] = useState();
    const options = {
        filter: false,
        print: false,
        selectableRows: "single",
        responsive: "standard",
        textLabels: {},
        customToolbarSelect: selectedRows => (
            <Tooltip title="edit">
                <IconButton
                    onClick={() => {
                        //  console.log(rows[selectedRows.data[0].dataIndex]);
                        setTest(rows[selectedRows.data[0].dataIndex]['name']);

                    }}

                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
        )
    };

    console.log(test)

    const navigate = useNavigate()

    const onClickHandler = () => navigate('/objectstore/uploadstorage');



    return (
        <div>
            <Button onClick={onClickHandler} > {<AddIcon />} Tải lên</Button>
            {/* <Button   > {<ModeEditIcon/>} Tải xuống</Button>
                <Button   > {<ModeEditIcon/>} Xoá</Button> */}
            <MUIDataTable
                title={"Danh sách tệp tin"}
                data={rows}
                columns={columns}
                options={options}
            />

        </div>

    )

}




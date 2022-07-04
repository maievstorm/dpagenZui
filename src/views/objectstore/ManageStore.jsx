import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import config from "../../config";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from 'axios';
import { Tooltip, IconButton } from '@mui/material';
import UserService from 'services/UserService';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import DpzStorageConf from 'components/StorageConf';



export default function ManageStore() {
    const [rows, setData] = useState([]);
    const [ownbucket, setownbucket] = useState([]);
    const [bucketname, setbucketname] = useState("");

    useEffect(() => {
        const getstorageapi = config.rootapi + '/invoice/usernamentype/' + UserService.getUsername() + '&storage';

        axios.get(getstorageapi)
            .then(res => {
                setownbucket(res.data.data.map(item => {
                    return {
                        'id': item.item_name, 'name': item.item_name
                    }
                }))
            }).catch(err => { console.log(err) })
    }, []);


    const onInputChanged = (event) => {
        const targetValue = event.target.value;
        getBuckets(targetValue);
        setbucketname(targetValue);

    };


    const getBuckets = (targetValue) => {
        // create the client

        const fileObj = []
        // const mc = new minio.Client({
        //     endPoint: config.storageapi,
        //     useSSL: true,
        //     accessKey: "s2l92I0TXj01BOGP",
        //     secretKey: "Q25hRHG13VxoKPrFmgLuXMDOi3WFOLFk"
        // });

        try {
            const stream = DpzStorageConf.listObjects(targetValue, '', true);

            stream.on('data', function (obj) { fileObj.push(obj) });
            stream.on("end", function () {
                let data = JSON.parse(JSON.stringify(fileObj))
                let newData = data.map(item => {
                    let lastModified = new Date(Date.parse(item.lastModified)).toLocaleString()

                    return {
                        'etag': item.item,
                        'lastModified': lastModified,
                        'name': item.name,
                        'size': item.size
                    }
                })
                // data.lastModified = data.lastModified.map(item =>{
                //     return new Date(Date.parse(item)).toLocaleString()
                // })
                setData(newData);
            });
            stream.on('error', function (err) { console.log(err) });

        }
        catch (e) {
            console.log(e)
        }

    };

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
                            getObject(bucketname, rows[selectedRows.data[0].dataIndex]['name'])
                            //  console.log(rows[selectedRows.data[0].dataIndex]);
                            //  setSelectedrow(rows[selectedRows.data[0].dataIndex]['name']);
                            // console.log(selectedrow)

                        }}

                    >
                        <FileDownloadIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Xoá">
                    <IconButton
                        onClick={() => {
                            deleteObjects(bucketname, rows[selectedRows.data[0].dataIndex]['name'])
                            //  console.log(rows[selectedRows.data[0].dataIndex]);
                            //  setSelectedrow(rows[selectedRows.data[0].dataIndex]['name']);
                            // console.log(selectedrow)

                        }}

                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>

            </>

        )
    };

    const deleteObjects = async (curent_bucketName, obj) => {


        if (obj) {

            try {
                DpzStorageConf.removeObject(curent_bucketName, obj, function (err) {
                    if (err) {
                        return console.log('Unable to remove object', err)
                    }
                    console.log('Removed the object')
                    getBuckets(curent_bucketName);
                });
            } catch (e) {
                console.log(e)
            }

        }

    }

    const getObject = async (curent_bucketName, obj) => {


        if (obj) {

            try {
                DpzStorageConf.presignedGetObject(curent_bucketName, obj, 24 * 60 * 60, function (err, presignedUrl) {
                    if (err) return console.log(err)
                    console.log(presignedUrl)
                    window.location.href = presignedUrl

                })
            } catch (e) {
                console.log(e)
            }

        }

    }



    const navigate = useNavigate()

    const onClickHandler = () => navigate('/objectstore/uploadmultifile');





    return (
        <div><strong>Danh sách thư mục : </strong>
            <Select id="listbucket" 
            name='listbucket' 
            value={ownbucket.id} 
            onChange={onInputChanged}
            
            size="small"
            >

                {ownbucket.map((item) => (
                    <MenuItem
                        key={item.id}
                        value={item.name}
                    >
                        {item.name}
                    </MenuItem>
                ))}

            </Select>
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




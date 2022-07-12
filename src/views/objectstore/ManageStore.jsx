import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Tooltip, IconButton } from '@mui/material';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
//import DpzStorageConf from 'services/StorageConf';
import { GetProcess } from 'services/DataIngest';
import { DpzStorageConf } from 'services/StorageConf';



export default function ManageStore() {
    const [rows, setData] = useState([]);
    const [ownbucket, setownbucket] = useState([]);
    const [bucketname, setbucketname] = useState("");
    const [storagekey, setstoragekey] = useState("");

    useEffect(() => {
        // const getstorageapi = config.rootapi + '/invoice/usernamentype/' + UserService.getUsername() + '&storage';

        GetProcess('storage')
            .then(res => {
                let data = res.data.data.map(item => {
                    return {
                        'id': item.item_name, 
                        'name': item.item_name,
                        'storagekey':item.customer_invoice_data
                    }
                })
                setownbucket(data)
                setbucketname(data[0].name)
                getBuckets(data[0].name)
                setstoragekey(data[0].storagekey)
                
            }).catch(err => { console.log(err) })
    }, []);


    const onInputChanged = (event) => {
        const targetValue = event.target.value;
        getBuckets(targetValue);
        setbucketname(targetValue);
       // setstoragekey(ownbucket.filter((bucket)=>bucket.id===targetValue)[0].storagekey);
        
         

    };
  

    // const getBuckets = (targetValue) => {
    //     // create the client

    //     const fileObj = []


    //     try {
    //         const stream = DpzStorageConf.listObjects(targetValue, '', true);

    //         stream.on('data', function (obj) { fileObj.push(obj) });
    //         stream.on("end", function () {
    //             let data = JSON.parse(JSON.stringify(fileObj))
    //             let newData = data.map(item => {
    //                 let lastModified = new Date(Date.parse(item.lastModified)).toLocaleString()

    //                 return {
    //                     'etag': item.item,
    //                     'lastModified': lastModified,
    //                     'name': item.name,
    //                     'size': item.size
    //                 }
    //             })
    //             // data.lastModified = data.lastModified.map(item =>{
    //             //     return new Date(Date.parse(item)).toLocaleString()
    //             // })
    //             setData(newData);
    //         });
    //         stream.on('error', function (err) { console.log(err) });

    //     }
    //     catch (e) {
    //         console.log(e)
    //     }

    // };

    const getBuckets = (targetValue) => {
        // create the client

        const fileObj = []

       // setstoragekey= ownbucket.filter((bucket)=>bucket.id===targetValue)[0].storagekey

       console.log(storagekey)
       console.log(ownbucket)
    //console.log(ownbucket.filter((bucket)=>bucket.id===targetValue)[0].storagekey)

        try {
            DpzStorageConf('naQrl3yAjoue8o22', 'A0d6ZmTAbcVrhgTorNzCFBddtAWUjruP')
                .then(minio => {
                    const stream = minio.listObjects(targetValue, '', true);

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

                })


        } catch (e) {
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


                        }}

                    >
                        <FileDownloadIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Xoá">
                    <IconButton
                        onClick={() => {
                            deleteObjects(bucketname, rows[selectedRows.data[0].dataIndex]['name'])


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
                value={bucketname}
                // defaultValue={ownbucket[0]?.name}
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




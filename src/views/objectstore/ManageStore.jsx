import { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import config from "../../config";
import * as minio from "minio";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import axios from 'axios';
import { Tooltip, IconButton } from '@mui/material';
import UserService from 'services/UserService';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';



export default function ManageStore() {
    const [rows, setData] = useState([]);
    const [ownbucket, setownbucket] = useState([]);
  //  const [bucketname, setbucketname] = useState("");
   
    useEffect(() => {
        const getstorageapi = config.rootapi + '/invoice/usernamentype/' + UserService.getUsername() + '&storage';
       
        axios.get(getstorageapi)
            .then(res => {
                setownbucket(res.data.data.map(item => {
                    return {
                      'id': item.item_name, 'name': item.item_name
                    }
                  }))
            }).catch(err => { console.log(err)})
    }, []);

 
    const onInputChanged = (event) => {
        const targetValue = event.target.value;
         getBuckets(targetValue);
        
      };

    const getBuckets = (targetValue ) => {
        // create the client
        
        const fileObj = []
        const mc = new minio.Client({
            endPoint: config.storageapi,
            useSSL: true,
            accessKey: "s2l92I0TXj01BOGP",
            secretKey: "Q25hRHG13VxoKPrFmgLuXMDOi3WFOLFk"
        });

        try{
            const stream =  mc.listObjects(targetValue, '', true);

            stream.on('data', function (obj) { fileObj.push(obj) });
            stream.on("end", function () {
                setData(JSON.parse(JSON.stringify(fileObj)));
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




    const [selectedrow, setSelectedrow] = useState();
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
                        setSelectedrow(rows[selectedRows.data[0].dataIndex]['name']);

                    }}

                >
                    <ModeEditIcon />
                </IconButton>
            </Tooltip>
        )
    };

    console.log(selectedrow)

    const navigate = useNavigate()

    const onClickHandler = () => navigate('/objectstore/uploadmultifile');

   



    return (
        <div><strong>Danh sách lake : </strong>
            <Select id="listbucket" name='listbucket' value={ownbucket.id} onChange={onInputChanged}
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




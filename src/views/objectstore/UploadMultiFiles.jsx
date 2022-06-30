import React, { Component } from "react";
import UploadService from "./UploadFilesService";
import { withRouter } from "./withRouter";
import { Select } from "@mui/material";

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";
import MenuItem from '@mui/material/MenuItem';
import config from "../../config";
import UserService from "services/UserService";

import axios from 'axios';



function UploadMultiFiles(props) {
  const [ownbucket, setownbucket] = useState([]);
  const [bucketSelect, setBucketSelect] = useState([]);


  const navigate = useNavigate()
  const [selectedFiles, setSelectedFiles] = useState()
  const [progressInfos, setProgressInfos] = useState([])
  const [message, setMessage] = useState([])

  const [fileInfos, setFileInfos] = useState([])
  const [loading, setLoading] = useState(false)
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



  // componentDidMount() {
  //   UploadService.getFiles().then((response) => {
  //     this.setState({
  //       fileInfos: response.data,
  //     });
  //   });
  // }
  const onInputChanged = (event) => {
    const targetValue = event.target.value;
    setBucketSelect(targetValue)
  };

  const selectFiles = (event) => {
    setProgressInfos([])
    setSelectedFiles(event.target.files)
  }

  const upload = (idx, file) => {
    let _progressInfos = [...progressInfos];

    UploadService.upload(file, bucketSelect
      // , (event) => {
      // _progressInfos[idx].percentage = Math.round((100 * event.loaded) / event.total);
      // this.setState({
      //   _progressInfos,
      // });
      //  }
    )
    // .then((response) => {
    //   this.setState((prev) => {
    //     let nextMessage = [...prev.message, "Uploaded the file successfully: " + file.name];
    //     return {
    //       message: nextMessage
    //     };
    //   });
    //   return console.log("ok")

    //   // return UploadService.getFiles();
    // })
    // .then((files) => {
    //   this.setState({
    //     fileInfos: files.data,
    //   });
    // })
    // .catch(() => {
    //   _progressInfos[idx].percentage = 0;
    //   this.setState((prev) => {
    //     let nextMessage = [...prev.message, "Could not upload the file: " + file.name];
    //     return {
    //       progressInfos: _progressInfos,
    //       message: nextMessage
    //     };
    //   });
    // });
  }

  const uploadFiles = () => {
    // const selectedFiles = selectedFiles;

    let _progressInfos = [];

    // for (let i = 0; i < selectedFiles.length; i++) {
    //   _progressInfos.push({ percentage: 0, fileName: selectedFiles[i].name });
    // }
    setLoading(true)

    for (let i = 0; i < selectedFiles.length; i++) {
      upload(i, selectedFiles[i]);
    }
    setTimeout(() => {
      setLoading(false)
      gohome();
    }, 2000);


    // this.setState(
    //   {
    //     progressInfos: _progressInfos,
    //     message: [],
    //   },
    //   () => {
    //     for (let i = 0; i < selectedFiles.length; i++) {
    //upload(i, selectedFiles[i]);
    // }
    // gohome();

    //   }
    // );


  }

  const gohome = () => {
    navigate('/ojectstorage')
  }

console.log(bucketSelect.length)




  return (
    <Box>
      {progressInfos &&
        progressInfos.map((progressInfo, index) => (
          <div className="mb-2" key={index}>
            <span>{progressInfo.fileName}</span>
            <div className="progress">
              <div
                className="progress-bar progress-bar-info"
                role="progressbar"
                aria-valuenow={progressInfo.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progressInfo.percentage + "%" }}
              >
                {progressInfo.percentage}%
              </div>
            </div>
          </div>
        ))}

      <Box className="row my-3">
        <strong>Chọn thư mục : </strong>
        <Select id="listbucket" name='listbucket' value={ownbucket?.id} onChange={onInputChanged}
          size="small"


        >

          {ownbucket?.map((item) => (
            <MenuItem
              key={item.id}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
<br></br>
        <input type="file" multiple onChange={selectFiles} />



        <div className="col-4">
          <Button
            className="btn btn-success btn-sm"
            disabled={(!selectedFiles) || (bucketSelect.length==0)}
            onClick={uploadFiles}
          >
            Tải lên
          </Button>
        </div>
      </Box>

      {message.length > 0 && (
        <div className="alert alert-secondary" role="alert">
          <ul>
            {message.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
      )}

      <div className="card">
        <div className="card-header"></div>
        <ul className="list-group list-group-flush">
          {fileInfos &&
            fileInfos.map((file, index) => (
              <li className="list-group-item" key={index}>
                <a href={file.url}>{file.name}</a>
              </li>
            ))}
        </ul>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px' }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
    </Box>
  );
}


export default UploadMultiFiles;
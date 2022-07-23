import * as React from "react";
import useRecorder from "./useRecorder";
import axios from "axios";
import { useState } from 'react'
import { Input, Button } from "@mui/material";
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from "react";


function SongIdentifi() {
  const [loading, setLoading] = React.useState(false);
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [file, setFile] = useState();
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const options = {
    filterType: 'checkbox',
  };
  const timerRef = React.useRef();

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );


  const submit = () => {
    setLoading(true)

    const routeUpload = 'https://musicrec.apps.xplat.fis.com.vn/upload_image/?is_save=1'
    var formFile = new FormData();
    formFile.append("file", file[0]);
    axios.post(routeUpload, formFile,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        let results = res.data.results
        let listKey = []
        let listData = results.map((item, index) => {
          let tmp = []
          for (var key in item) {
            if (index == 0) {
              listKey.push(key)
            }
            tmp.push(item[key])
          }
          return tmp
        })

        console.log(listData)
        setData(listData)
        setColumns(listKey)
        console.log(listKey)
        setLoading(false)


        console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err);
      })






  }


  return (
    <div >
      <audio src={audioURL} controls />
      <br></br>
      <Button onClick={startRecording} disabled={isRecording}>
        start recording
      </Button>
      <Button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </Button>
      <br></br>

      <Input type="file" id="formFile" name="formFile" onChange={(e) => setFile(e.target.files)} />

      <Button onClick={submit}>
        check
      </Button>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box >
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? '800ms' : '0ms',
              width: '50px',
              height: '50px',
              color: 'red'
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>

        </Box>
        {/* <Button onClick={handleClickLoading} sx={{ m: 2 }}>
          {loading ? 'Stop loading' : 'Loading'}
        </Button> */}
      </Box>


      <MUIDataTable
        title={"Danh sách"}
        data={data}
        columns={columns}
        options={options}
      />





    </div>
  );
}

export default SongIdentifi;


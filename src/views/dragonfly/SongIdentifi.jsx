import * as React from "react";
import useRecorder from "./useRecorder";
import axios from "axios";
import { useState } from 'react'
import { Input,Button } from "@mui/material";

function SongIdentifi() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [file, setFile] = useState();
  const submit = () => {
    
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
     
        <Input type="file" id="formFile"  name="formFile" onChange={(e) => setFile(e.target.files)} />
        
        <Button onClick={submit}>
          check
        </Button>
      



    </div>
  );
}

export default SongIdentifi;


import * as React from "react";
import useRecorder from "./useRecorder";
import axios from "axios";
import { useState } from 'react'

function SongIdentifi() {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [file, setFile] = useState();
  const submit = () => {





    const routeUpload = 'https://musicrec.apps.xplat.fis.com.vn/upload_image/?is_save=1'
    var formFile = new FormData();
    formFile.append("file", file);
    console.log('running...')

    axios.post(routeUpload, formFile,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })


    // axios.post('https://musicrec.apps.xplat.fis.com.vn/upload_image/?is_save=1',
    // formFile, {
    //           headers: {
    //             'Content-Type': 'multipart/form-data'
    //           }
    //         }
    //       ).then(function () {
    //         console.log('SUCCESS!!');
    //       })
    //       .catch(function () {
    //         console.log('FAILURE!!');
    //       });


    //   axios({
    //     method: 'post',
    //     url: 'https://musicrec.apps.xplat.fis.com.vn/upload_image/?is_save=1',
    //     formFile,
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }

    //   })
    //     .then(res => {
    //       if (res.status === 200) {
    //         console.log(res.data)
    //       }
    //     })
    //     .catch(err => console.log(err))





  }


  return (
    <div >
      <audio src={audioURL} controls />
     
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button>
    
     
        <input class="form-control" type="file" id="formFile" multiple name="formFile" onChange={(e) => setFile(e.target.files)} />
        
        <button onClick={submit}>
          check
        </button>
      



    </div>
  );
}

export default SongIdentifi;


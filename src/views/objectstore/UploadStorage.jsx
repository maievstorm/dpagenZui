import React from 'react'
import config from "../../config";
import * as minio from "minio";



export default function UploadStorage  ()
{

 
 const  fileUpload =() => {
   console.log('upp')

  //   const mc = new minio.Client({
  //     endPoint: config.storageapi,
  //     useSSL: true,
  //     accessKey: "s2l92I0TXj01BOGP",
  //     secretKey: "Q25hRHG13VxoKPrFmgLuXMDOi3WFOLFk"
  //   });
 

  //   var file1 = 'F:\\zb.log';

  //   var metaData = {
  //     'Content-Type': 'application/octet-stream'
  // }



  
  // // Using fPutObject API upload your file to the bucket photos.
  // mc.fPutObject('photos', 'icon.png', file1, metaData, function(err, etag) {
  //   if (err) return console.log(err)
  //   console.log('File uploaded successfully.')
  // });
  }

  return (
    <div>
         <button onClick={fileUpload}>Upload</button>

    </div>
   
)
}
 
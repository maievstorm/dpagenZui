import DpzStorageConf from 'components/StorageConf';

class UploadFilesService {
  upload(file,bucket, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    const fileToUpload = this.state.file;
    const objectKey = fileToUpload.name;
    const contentType = fileToUpload.type;
    const fileReader = new FileReader()

    fileReader.readAsArrayBuffer(fileToUpload)
    fileReader.onload = async function (evt) {
      
      if (evt.target.readyState === FileReader.DONE) {

        const uint = new Uint8Array(evt.target.result)
        return DpzStorageConf.putObject(bucket, objectKey, Buffer.from(uint), {
          'Content-Type': contentType,
          'X-Amz-Meta-App': "ReactJS"
        },onUploadProgress)

      }
      fileReader.onerror = function () {
        fileReader.abort()
        // reject(null)
      }
      // fileReader.readAsArrayBuffer(fileToUpload)
    }



  }

}

export default new UploadFilesService();



//   import http from "../http-common";

// class UploadFilesService {
//   upload(file, onUploadProgress) {
//     let formData = new FormData();

//     formData.append("file", file);

//     return http.post("/upload", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       onUploadProgress,
//     });
//   }

//   getFiles() {
//     return http.get("/files");
//   }
// }

// export default new UploadFilesService();
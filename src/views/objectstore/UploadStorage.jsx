//UploadStorage
import axios from 'axios';
import React,{Component} from 'react'; 
import DpzStorageConf from 'components/StorageConf';
class UploadStorage extends Component { 

    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
      // Create an object of formData 
    
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 

      const fileToUpload = this.state.selectedFile
    
      const objectKey =  fileToUpload.name
      const contentType = fileToUpload.type
     
      // Details of the uploaded file 
      console.log(objectKey); 
     
      // Request made to the backend api 
      // Send formData object 
      const fileReader = new FileReader()
      fileReader.onload = async function (evt) {
        if (evt.target.readyState === FileReader.DONE) {
           
            const uint = new Uint8Array(evt.target.result)
            await DpzStorageConf.putObject('youtube1', objectKey, Buffer.from(uint), {
                'Content-Type': contentType,
                'X-Amz-Meta-App': "ReactJS"
            })
            
        }
        fileReader.onerror = function () {
          fileReader.abort()
          // reject(null)
      }
      fileReader.readAsArrayBuffer(fileToUpload)
    }

      //axios.post("api/uploadfile", formData); 

    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
      return ( 
        <div> 
           
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default UploadStorage; 
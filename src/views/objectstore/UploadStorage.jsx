import React, {Component} from 'react'
import MainCard from 'ui-component/cards/MainCard';

class UploadStorage extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
        
             
      <div>

      </div>
 
      
    )
  }
}

export default UploadStorage;
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ActionButtons from "./ActionButton";
import { useState, useEffect } from "react";
import config from "../../../config";
import axios from 'axios';

export const Info = (props) => {
  const divStyle = {
    margin: '5px'
  };
  const [error, setError] = useState("");

  const [daginfo, setDagInfo] = useState({})



  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setDagInfo((daginfo) => ({
      ...daginfo,
      [targetName]: targetValue
    }));
  };


  const validate = () => {
    const getairflowapi = config.rootapi + '/invoice/' + daginfo.DagId;
    axios.get(getairflowapi)
      .then(res => {
        setError("Đã tồn tại tên tiến trình!");

      })
      .catch(err => {
        
        if (!daginfo.DagId || !daginfo.Schedule || !daginfo.tags_name) setError("Thông tin không chính xác!");
        else {
          setError("");
          props.nextStep();
          props.userCallback(daginfo);
        }
      })

  };

  return (
    <div>
      <strong>
        Thông tin tiến trình
      </strong><br></br>
      <span style={{ color: 'red' }}>{error}</span>
      <Box >

        <TextField
          label="Tên tiến trình"
          id="DagId"
          name="DagId"
          value={daginfo.DagId}
          size="small"
          onChange={onInputChanged}
          style={divStyle}

        />
        <TextField
          label="Tần suất chạy"
          id="Schedule"
          name="Schedule"
          size="small"
          value={daginfo.Schedule}
          onChange={onInputChanged}
          style={divStyle}
        />
        {/* <TextField
              label="Người tạo"
              id="owner"
              name="owner"
              value={Daginfo.owner}
              onChange={event => setDagInfo({ ...Daginfo, 'owner': event.target.value })}
              size="small"
              style={divStyle}
          /> */}
        <TextField
          label="Tags"
          id="tags_name"
          name="tags_name"
          value={daginfo.tags_name}
          onChange={onInputChanged}
          size="small"
          style={divStyle}
        />



      </Box>
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

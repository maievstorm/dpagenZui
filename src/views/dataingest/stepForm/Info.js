import React from "react";
import Container from "@material-ui/core/Container";
import Box from '@mui/material/Box';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Info = ({  Daginfo, setDagInfo, navigation }) => {
  const divStyle = {
    margin: '5px'
  };


  return (
    <div>
      <strong>
          Thông tin job
      </strong>
      <Box >

          <TextField
              label="Tên Job"
              id="DagId"
              name="DagId"
              value={Daginfo.DagId}
              size="small"
              onChange={event => setDagInfo({ ...Daginfo.DagId, ['DagId']: event.target.value })}
              style={divStyle}

          />
          <TextField
              label="Schedule"
              id="Schedule"
              name="Schedule"
              size="small"
              // value={Daginfo.Schedule}
              onChange={event => setDagInfo({ ...Daginfo, 'Schedule': event.target.value })}
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
              // value={Daginfo.tags_name}
              onChange={event => setDagInfo({ ...Daginfo, 'tags_name': event.target.value })}
              size="small"
              style={divStyle}
          />


      </Box>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </div>
  );
};
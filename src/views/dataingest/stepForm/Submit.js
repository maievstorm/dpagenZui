import React from "react";
import Container from '@material-ui/core/Container';
import { Divider } from "@mui/material";
import Button from "@material-ui/core/Button";


export const Submit = ({submit,navigation}) => {
  return (
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button onClick={submit} variant="contained" color="primary">Tạo tiến trình</Button>
    </div>
  );
};

import React from "react";
//import { useState, useEffect } from 'react'
import ActionButtons from "./ActionButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from '@mui/material';
import ReviewItem from "./ReviewItem";


export const Review = (props) => {
  //const classes = useStyles();  
  const divStyle = {
    margin: '5px',
  };

  const validate = () => {
    props.lastStep();
    props.userCallback();
  }
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Thông số chi tiết tiến trình</h3>
      <ReviewItem {...props}/>

      {/* <div><pre>{JSON.stringify(conf, null, 2)}</pre></div> */}


      <ActionButtons {...props} lastStep={validate} />

    </div>
  )
};

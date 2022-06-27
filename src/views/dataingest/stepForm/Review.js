import React from "react";
import { useState, useEffect } from 'react'
import ActionButtons from "./ActionButton";

import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
// import { JSONTree } from 'npm ';
// If you're using Immutable.js: `npm i --save immutable`
// import { Map } from 'immutable';
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TablePagination,
  TableContainer
} from '@mui/material'

export const Review = (props) => {
  //const classes = useStyles();  

  const conf = props.conf
  const validate = () => {
        props.lastStep();
        props.userCallback();
    }
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Thông số chi tiết tiến trình</h3>
      {/* {Object.entries(conf).map(([key, value]) => {
        if(typeof(value)==='string'){
          return (
            <>
            <label><strong>{key}: </strong>{value}</label>
            <br/>
            </>
          )
        }
      })} */}
      <div><pre>{JSON.stringify(conf, null, 2) }</pre></div>


      <ActionButtons {...props} lastStep={validate}/>

    </div>
  )
};

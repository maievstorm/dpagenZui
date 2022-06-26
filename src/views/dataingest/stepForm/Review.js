import React from "react";
import { useState, useEffect } from 'react'  
import Container from '@material-ui/core/Container';
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

export const Review = ({conf,submit,navigation}) => {
  //const classes = useStyles();  
  const [page, setPage] = React.useState(0);  
  const [data, setData] = useState([]);   
  const [rowsPerPage, setRowsPerPage] = React.useState(5);  
   
  

  
  const  body= JSON.stringify(conf)
  console.log(body)
  return (
      <div style={{ marginTop: "1rem" }}>
        <h3>Thông số chi tiết tiến trình</h3> 
        {/* <JSONTree data={conf} theme={theme} /> */}
        {/* <Button onClick={submit} variant="contained" color="primary">Tạo tiến trình</Button> */}
         
       

    </div> 
  )
};

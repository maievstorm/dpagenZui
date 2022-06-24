import React from "react";
import { useState, useEffect } from 'react'  
import Container from '@material-ui/core/Container';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';
import { JSONTree } from 'react-json-tree';
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from 'immutable';
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
   
  
  const theme = {
    scheme: 'monokai',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };
  
  return (
      <div style={{ marginTop: "1rem" }}>
        <h3>Dữ liệu</h3> 
        <JSONTree data={conf} theme={theme} />
        {/* <Button onClick={submit} variant="contained" color="primary">Tạo tiến trình</Button> */}
        {/* <Table stickyHeader aria-label="sticky table">  
          <TableHead>  
              <TableRow>  
                <TableCell >Tên tiến trình</TableCell>  
                <TableCell >Danh sách data</TableCell>
                <TableCell >Danh sách truy vấn</TableCell> 
              </TableRow>  
            </TableHead>  
            <TableBody>  
            
              {conf[0]?.slice().map(row => {  
                return (  
  
             <TableRow >  
                  <TableCell component="th" scope="row">{row.DagId}</TableCell>  
                  <TableCell >{row.source}</TableCell>  
                  <TableCell >{row.query}</TableCell>  
               
                  
                </TableRow>  
                );  
  
              })}  
            </TableBody>  
          </Table>  */}

    </div> 
  )
};

import React, { Component } from "react";
import { useState, useEffect } from 'react'   
import axios from 'axios'; // npm instal axios


import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles'; 

import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
    TablePagination,
    TableContainer
} from '@mui/material'



const useStyles = makeStyles({  
 
      root: {  
        width: '100%',  
      },  
        container: {  
        maxHeight: '100%',  
        },  
    
    });  

export default function ChecksongDataTable() {  
    const classes = useStyles();  
    const [page, setPage] = React.useState(0);  
    const [data, setData] = useState([]);   
    const [rowsPerPage, setRowsPerPage] = React.useState(5);  

    const handleChangePage = (event, newPage) => {  
        setPage(newPage);  
      };  
    
      const handleChangeRowsPerPage = event => {  
        setRowsPerPage(+event.target.value);  
        setPage(0);  
      };  
 
    useEffect(() => {   
          axios({method:'get',url:"https://dpzapi.apps.xplat.fis.com.vn/api/v1/checksong"}).then(res=>{
            setData(res.data.data);    
          })  
        }, []);   
    return (  
      <Paper className={classes.root}>  
        <TableContainer className={classes.container}>  
          <Table stickyHeader aria-label="sticky table">  
          <TableHead>  
              <TableRow>  
                <TableCell>check_song_name</TableCell>  
                <TableCell align="right">src_url</TableCell>  
                <TableCell align="right">src_tags</TableCell>  
                <TableCell align="right">src_song_duration</TableCell>  
                <TableCell align="right">src_view_count</TableCell> 
                <TableCell align="right">original_song_name</TableCell>  
                <TableCell align="right">tar_song_duration</TableCell>  
                <TableCell align="right">time_similar</TableCell>  
                <TableCell align="right">accuracy_similar</TableCell>  
                <TableCell align="right">fingerprint_match</TableCell>  
                <TableCell align="right">start_match_target</TableCell>  
                <TableCell align="right">start_match_source</TableCell>   
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {  
                return (  
  
             <TableRow >  
                  <TableCell component="th" scope="row">  
                    {row.check_song_name}  
                  </TableCell>  
                  <TableCell align="right">{row.src_url}</TableCell>  
                  <TableCell align="right">{row.src_tags}</TableCell>  
                  <TableCell align="right">{row.src_song_duration}</TableCell>  
                  <TableCell align="right">{row.src_view_count}</TableCell>  
                  <TableCell align="right">{row.original_song_name}</TableCell>  
                  <TableCell align="right">{row.tar_song_duration}</TableCell>  
                  <TableCell align="right">{row.time_similar}</TableCell>  
                  <TableCell align="right">{row.accuracy_similar}</TableCell>  
                  <TableCell align="right">{row.fingerprint_match}</TableCell>  
                  <TableCell align="right">{row.start_match_target}</TableCell>  
                  <TableCell align="right">{row.start_match_source}</TableCell>  
                  
                </TableRow>  
                );  
  
              })}  
            </TableBody>  
          </Table>  
        </TableContainer>  
        <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
      </Paper>  
    );  
  } 
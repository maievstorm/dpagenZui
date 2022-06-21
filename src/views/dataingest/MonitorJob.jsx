import React  from "react";
import { useState, useEffect } from 'react'   
import axios from 'axios'; // npm instal axios

import {IconPlayerPlay} from '@tabler/icons';



import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles'; 

import {
    Table,
    TableHead,
    TableCell,
    TableBody,
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
    const icons = {
      IconPlayerPlay
    };      

export default function MonitorJob() {  
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
          axios({method:'get',url:"https://flowdpa.apps.xplat.fis.com.vn/api/v1/dags",
           auth: {
            username: 'hung',
            password: '123456a@'
          }}).then(res=>{
            setData(res.data.dags);    
          })  
        }, []);   
    return (  
      <Paper className={classes.root}>  
        <TableContainer className={classes.container}>  
          <Table stickyHeader aria-label="sticky table">  
          <TableHead>  
              <TableRow>  
                <TableCell>dag_id</TableCell>  
                <TableCell align="right">owners</TableCell>  
                <TableCell align="right">max_active_runs</TableCell>  
                <TableCell align="right">schedule_interval</TableCell>  
                <TableCell align="right">Action</TableCell> 
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {  
                return (  
  
             <TableRow >  
                  <TableCell component="th" scope="row">  
                    {row.dag_id}  
                  </TableCell>  
                  <TableCell align="right">{row.owners}</TableCell>  
                  <TableCell align="right">{row.max_active_runs}</TableCell>  
                  <TableCell align="right">{row.schedule_interval}</TableCell>  
                  <TableCell align="right"><icons.IconPlayerPlay/></TableCell>  
                  
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
                count={data?.length}
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
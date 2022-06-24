import React  from "react";
import { useState, useEffect } from 'react'   
import axios from 'axios'; // npm instal axios
import {IconPlayerPlay} from '@tabler/icons';
import config from "../../config";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom"; 
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
      
    const getairflowapi= config.rootapi+'/invoice/subntype/1&airflow';
 
    useEffect(() => {   
          axios({method:'get',url:getairflowapi}
           ).then(res=>{
            setData(res.data.data);    
          })  
        },[] ); 

        const navigate = useNavigate()

        const onClickHandler = () => navigate('/dataingest/createflowjob')
        
    return (  
      
      <Paper className={classes.root}> 
      <ButtonGroup variant="text" aria-label="text button group">
        <Button  onClick={onClickHandler} >Tạo tiến trình</Button>
        <Button >Chỉnh sửa tiến trình</Button>
        <Button>Xoá tiến trình</Button>
      </ButtonGroup> 
       
        <TableContainer className={classes.container}>  
          <Table stickyHeader aria-label="sticky table">  
          <TableHead>  
              <TableRow>  
                <TableCell>id</TableCell>  
                <TableCell >Tên tiến trình</TableCell>  
                {/* <TableCell >Chi tiết tiến trình</TableCell>   */}
                <TableCell >Action</TableCell> 
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {  
                return (  
  
             <TableRow >  
                  <TableCell component="th" scope="row">{row.id}</TableCell>  
                  <TableCell >{row.item_name}</TableCell>  
                  {/* <TableCell >{row.customer_invoice_data}</TableCell>   */}
                  <TableCell ><icons.IconPlayerPlay/></TableCell>  
                  
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
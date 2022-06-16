// material-ui
import { Typography } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import { IconCloudDownload,IconTrash} from '@tabler/icons';



import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
    TablePagination
} from '@mui/material'
import { Box, styled } from '@mui/system'
import { gridSpacing } from 'store/constant';
import { Grid } from '@mui/material';


// project imports
import MainCard from 'ui-component/cards/MainCard';
//minio

var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: 'apilakedpa.apps.xplat.fis.com.vn',
    useSSL: true,
    accessKey: 'ZtPfk0wzKFOuSvhf',
    secretKey: 'tQBDJnzZy2G4yIyv6rAjhnsdfidN2swz',
   
});

// ==============================|| Bigdata Page ||============================== //



var data = []
var stream = minioClient.listObjects('hungbucket','', true, {IncludeVersion:true})
stream.on('data', function(obj) { data.push(obj) } )
stream.on("end", function (obj) { console.log(data) })
stream.on('error', function(err) { console.log(err) } )

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const icons = {
    IconCloudDownload,
    IconTrash
};


const Listbucketpage = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
const [page, setPage] = React.useState(0)

const handleChangePage = (event, newPage) => {
    setPage(newPage)
}

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
}
    return (
        <MainCard>
            <Table >
                 <TableHead>
                    <TableRow>
                        <TableCell>Tên tệp</TableCell>
                        <TableCell>Dung lượng</TableCell>
                        <TableCell>Phiên bản</TableCell>
                        <TableCell>Tải về</TableCell>
                        <TableCell>Xoá</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody> 
                    {data.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        ).map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.size}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.versionId}
                            </TableCell>
                            <TableCell align="left">
                            <icons.IconCloudDownload />
                            </TableCell>
                            <TableCell align="left">
                                <icons.IconTrash/>
                            </TableCell>
                           
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[5, 10, 25]}
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
        </MainCard>
    )
    

}

export default Listbucketpage;

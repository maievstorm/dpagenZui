import React, { useEffect, useState } from 'react'
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@mui/material'
import { Box, styled } from '@mui/system'
import { SimpleCard } from 'app/components'
import axios from 'axios';
import { useDispatch } from "react-redux";
import { testAPI } from '../../../redux/actions/AirflowActions'

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

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'james cassegne',
        date: '8 january, 2019',
        amount: 5000,
        status: 'close',
        company: 'Collboy Tech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
]

const Airflow = () => {
    const dispatch = useDispatch();
    const status = useState("Chua co gi")
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const callAPITest = () => {
        // dispatch(testAPI()).then(data => {console.log("data call api", data)}).catch(e => {
        //     console.log(e) 
        // })
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    useEffect(() => {
        console.log("useEffect");
        callAPITest();
    });

    return(
        <Container>
            <button onClick={() => { 
                axios.get('https://flowdpa.apps.xplat.fis.com.vn/api/v1/dags?limit=100&offset=10&only_active=false',{auth: {username: 'hung', password: '123456a@'}}).then(rel => {console.log(rel);
                })

            }}>Check</button>
            <SimpleCard title="List dags">
                <Box width="100%" overflow="auto">
                    <StyledTable>
                    <TableHead>
                            <TableRow>
                                <TableCell>Dags</TableCell>
                                <TableCell>Owners</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Is Active</TableCell>
                                <TableCell>Schedule Interval</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {subscribarList
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((subscriber, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="left">
                                            {subscriber.name}
                                        </TableCell>
                                        <TableCell align="left">
                                            {subscriber.company}
                                        </TableCell>
                                        <TableCell align="left">
                                            {subscriber.date}
                                        </TableCell>
                                        <TableCell>{subscriber.status}</TableCell>
                                        <TableCell>${subscriber.amount}</TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon color="success">play_arrow</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </StyledTable>
                    <TablePagination
                        sx={{ px: 2 }}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={subscribarList.length}
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
                </Box>
            </SimpleCard>
        </Container>
    )
}

export default Airflow


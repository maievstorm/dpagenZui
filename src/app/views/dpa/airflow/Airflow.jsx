import React from 'react'
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

class Airflow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            setPage: 0,
            rowsPerPage: 5,
            setRowsPerPage: 5,
        };
    }
    componentDidUpdate() {

    }

    handleChangePage = (event, newPage) => {
        this.setState({setPage: newPage})
    }
    handleChangeRowsPerPage = (event) => {
        // this.setState({
        //     setRowsPerPage: event.target.value
        //   }, () => {
        //      // only now the state was updated
        //      console.log("setRowsPerPage2", this.state.setRowsPerPage); 
        //   });
          this.setState((state) => {
            return {setRowsPerPage: event.target.value};
          });
        console.log("setRowsPerPage3", this.state.setRowsPerPage)
        this.setState({setPage: 0})
    }

    render(){
        return(
            <Container>
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
                                        this.state.page * this.state.rowsPerPage,
                                        this.state.page * this.state.rowsPerPage + this.state.rowsPerPage
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
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onPageChange={this.handleChangePage}
                            onRowsPerPageChange={this.handleChangeRowsPerPage}
                        />
                    </Box>
                </SimpleCard>
            </Container>
        )
    }
}

export default Airflow
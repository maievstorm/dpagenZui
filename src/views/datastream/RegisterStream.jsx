import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField,Select,Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';



// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import { DatePicker } from '@mui/lab';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const datatypes = [
    {
        key: 'storage',
        name: 'Lưu trữ đám mây'
    },
    {
        key: 'dwh',
        name: 'Kho dữ liệu'
    },
    {
        key: 'bigdata',
        name: 'Dữ liệu lớn'
    }
    ,
    {
        key: 'sqlserver',
        name: 'Microsof Sql, Azure SQL'
    },
    {
        key: 'oracle',
        name: 'Oracle'
    }
    ,
    {
        key: 'mysql',
        name: 'MySQL'
    }
    ,
    {
        key: 'postgres',
        name: 'PostgresSQL'
    }


]  
 


const RegisterStreaming = () => {
 
    const divStyle = {
        marginTop: '10px',
    
      };


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 6, md: 12 }} style={divStyle}>
                <TextField
                            type="text"
                            name="tentientrinh"
                            id="tentientrinh"
                            label="tentientrinh"
                            fullWidth 
                             
                            />
                        <Grid item xs={3} sm={6} md={6} >
                            <Item style={divStyle} >Nguồn</Item>
                            <strong>Loại CSDL Nguồn: </strong>
                            <Select name='sdbtype'  
                                size="small"
                                style={divStyle}
                            >

                                {datatypes.map((datatype) => (
                                    <MenuItem
                                        key={datatype.key}
                                        value={datatype.key}
                                    >
                                        {datatype.name}
                                    </MenuItem>
                                ))}

                            </Select>
                            {/* 1 */}
                            <TextField
                            type="text"
                            name="sdatabase.server.name"
                            id="sdatabase.server.name"
                            label="Tên máy chủ CSDL nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 2 */}
                            <TextField
                            type="text"
                            name="sdatabase.hostname"
                            id="sdatabase.hostname"
                            label="IP/Host Name CSDL nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 3 */}
                            <TextField
                            type="text"
                            name="sdatabase.port"
                            id="sdatabase.port"
                            label="Port CSDL nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 4 */}
                            <TextField
                            type="text"
                            name="sdatabase.dbname"
                            id="sdatabase.dbname"
                            label="Tên CSDL nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 5 */}
                            <TextField
                            type="text"
                            name="sdatabase.user"
                            id="sdatabase.user"
                            label="Tài khoản đăng nhập nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 6 */}
                            <TextField
                            type="text"
                            name="sdatabase.password"
                            id="sdatabase.password"
                            label="Mật khẩu đăng nhặp nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 7 */}
                            <TextField
                            type="text"
                            name="stable.include.list"
                            id="stable.include.list"
                            label="Bảng dữ liệu nguồn"
                            fullWidth 
                            style={divStyle}
                            />
                            
                        </Grid>
                        <Grid item xs={3} sm={6} md={6} >
                            <Item style={divStyle}>Đích</Item>
                            <strong>Loại CSDL Đích: </strong>
                            <Select name='tdbtype'  
                                size="small"
                                style={divStyle}
                            >

                                {datatypes.map((datatype) => (
                                    <MenuItem
                                        key={datatype.key}
                                        value={datatype.key}
                                    >
                                        {datatype.name}
                                    </MenuItem>
                                ))}

                            </Select>
                            {/* 1 */}
                            <TextField
                            type="text"
                            name="tdatabase.server.name"
                            id="tdatabase.server.name"
                            label="Tên máy chủ CSDL đích"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 2 */}
                            <TextField
                            type="text"
                            name="tdatabase.hostname"
                            id="tdatabase.hostname"
                            label="IP/Host Name CSDL đích"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 3 */}
                            <TextField
                            type="text"
                            name="tdatabase.port"
                            id="tdatabase.port"
                            label="Port CSDL đích"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 4 */}
                            <TextField
                            type="text"
                            name="tdatabase.dbname"
                            id="tdatabase.dbname"
                            label="Tên CSDL đích"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 5 */}
                            <TextField
                            type="text"
                            name="tdatabase.user"
                            id="tdatabase.user"
                            label="Tài khoản đăng nhập đích"
                            fullWidth 
                            style={divStyle}
                            />
                            {/* 6 */}
                            <TextField
                            type="text"
                            name="tdatabase.password"
                            id="tdatabase.password"
                            label="Mật khẩu đăng nhặp đích"
                            fullWidth 
                            style={divStyle}
                            />
                             {/* 7 */}
                             <TextField
                            type="text"
                            name="ttable.include.list"
                            id="ttable.include.list"
                            label="Bảng dữ liệu đích"
                            fullWidth 
                            style={divStyle}
                            />
                        </Grid>
                        
                
                </Grid>
                <Button>Tạo Tiến Trình</Button>
            </Box>

        </div>
    )
}

export default RegisterStreaming

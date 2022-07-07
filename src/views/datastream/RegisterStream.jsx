import * as React from 'react';
import { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Select, Button } from '@mui/material';
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









const RegisterStreaming = () => {

    const divStyle = {
        marginTop: '10px',

    };
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
            name: 'Microsof Sql'
        }, 
        {
            key: 'azuresql',
            name: 'Azure SQL'
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

 
    
    // const [Streamtarget, setStreamtarget] = useState([
    //     {
    //         tdbtype: '',
    //         tdatabaseservername: '',
    //         tdatabasehostname: '',
    //         tdatabaseport: '',
    //         tdatabasedbname: '',
    //         tdatabaseuser: '',
    //         tdatabasepassword: '',
    //         ttableincludelist: ''
    
    //     },
    // ])

    const [Streamsource, setStreamsource] = useState({})
    const [Streamtarget, setStreamtarget] = useState({})

    const sonInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
    
        setStreamsource((Streamsource) => ({
          ...Streamsource,
          [targetName]: targetValue
        }));
      };

      const tonInputChanged = (event) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
    
        setStreamtarget((Streamtarget) => ({
          ...Streamtarget,
          [targetName]: targetValue
        }));
      };  
    


  


    const submit = (e) => {
        e.preventDefault();
        let stream = {
            'data': [
                {
                    'source': Streamsource,
                    'target': Streamtarget
                }

            ]
        }

     

        const body = {
            "conf": { stream },
          }
        
    
        console.log(JSON.stringify(body))

    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 6, md: 12 }} style={divStyle}>
                    <TextField
                        type="text"
                        name="tentientrinh"
                        id="tentientrinh"
                        label="Tên tiến trình"
                        fullWidth
                        value={Streamsource.tentientrinh}
                        onChange={sonInputChanged} 

                    />
                    <Grid item xs={3} sm={6} md={6} >
                        <Item style={divStyle} >Nguồn</Item>
                        <strong>Loại CSDL Nguồn: </strong>
                        <Select name='sdbtype'
                            size="small"
                            style={divStyle}
                            value={Streamsource.sdbtype}
                            onChange={sonInputChanged}    
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
                            name="sdatabaseservername"
                            id="sdatabaseservername"
                            label="Tên máy chủ CSDL nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.sdatabaseservername}
                            onChange={sonInputChanged}
                        />
                        {/* 2 */}
                        <TextField
                            type="text"
                            name="sdatabasehostname"
                            id="sdatabasehostname"
                            label="IP/Host Name CSDL nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.sdatabasehostname}
                            onChange={sonInputChanged}
                        />
                        {/* 3 */}
                        <TextField
                            type="text"
                            name="sdatabaseport"
                            id="sdatabaseport"
                            label="Port CSDL nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.sdatabaseport}
                            onChange={sonInputChanged}
                        />
                        {/* 4 */}
                        <TextField
                            type="text"
                            name="sdatabasedbname"
                            id="sdatabasedbname"
                            label="Tên CSDL nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.sdatabasedbname}
                            onChange={sonInputChanged}
                        />
                        {/* 5 */}
                        <TextField
                            type="text"
                            name="sdatabaseuser"
                            id="sdatabaseuser"
                            label="Tài khoản đăng nhập nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.sdatabaseuser}
                            onChange={sonInputChanged}
                        />
                        {/* 6 */}
                        <TextField
                            type="text"
                            name="sdatabasepassword"
                            id="sdatabasepassword"
                            label="Mật khẩu đăng nhặp nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.sdatabasepassword}
                            onChange={sonInputChanged}
                        />
                        {/* 7 */}
                        <TextField
                            type="text"
                            name="stableincludelist"
                            id="stableincludelist"
                            label="Bảng dữ liệu nguồn"
                            fullWidth
                            style={divStyle}
                            value={Streamsource.stableincludelist}
                            onChange={sonInputChanged}
                        />

                    </Grid>
                    <Grid item xs={3} sm={6} md={6} >
                        <Item style={divStyle}>Đích</Item>
                        <strong>Loại CSDL Đích: </strong>
                        <Select name='tdbtype'
                            size="small"
                            style={divStyle}
                            value={Streamtarget.tdbtype}
                            onChange={tonInputChanged} 
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
                            name="tdatabaseservername"
                            id="tdatabaseservername"
                            label="Tên máy chủ CSDL đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.tdatabaseservername}
                            onChange={tonInputChanged} 
                        />
                        {/* 2 */}
                        <TextField
                            type="text"
                            name="tdatabasehostname"
                            id="tdatabasehostname"
                            label="IP/Host Name CSDL đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.tdatabasehostname}
                            onChange={tonInputChanged} 
                        />
                        {/* 3 */}
                        <TextField
                            type="text"
                            name="tdatabaseport"
                            id="tdatabaseport"
                            label="Port CSDL đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.tdatabaseport}
                            onChange={tonInputChanged} 
                        />
                        {/* 4 */}
                        <TextField
                            type="text"
                            name="tdatabasedbname"
                            id="tdatabasedbname"
                            label="Tên CSDL đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.tdatabasedbname}
                            onChange={tonInputChanged} 
                        />
                        {/* 5 */}
                        <TextField
                            type="text"
                            name="tdatabaseuser"
                            id="tdatabaseuser"
                            label="Tài khoản đăng nhập đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.tdatabaseuser}
                            onChange={tonInputChanged} 
                        />
                        {/* 6 */}
                        <TextField
                            type="text"
                            name="tdatabasepassword"
                            id="tdatabasepassword"
                            label="Mật khẩu đăng nhặp đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.tdatabasepassword}
                            onChange={tonInputChanged} 
                        />
                        {/* 7 */}
                        <TextField
                            type="text"
                            name="ttableincludelist"
                            id="ttableincludelist"
                            label="Bảng dữ liệu đích"
                            fullWidth
                            style={divStyle}
                            value={Streamtarget.ttableincludelist}
                            onChange={tonInputChanged} 
                        />
                    </Grid>


                </Grid>
                <Button onClick={submit}>Tạo Tiến Trình</Button>
            </Box>

        </div>
    )
}

export default RegisterStreaming

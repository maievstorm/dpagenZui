import React from "react";
//import { useState, useEffect } from 'react'
import ActionButtons from "./ActionButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from '@mui/material';

// import { Divider } from "@mui/material";
// import Button from '@mui/material/Button';

// import {
//   Table,
//   TableHead,
//   TableCell,
//   TableBody,
//   TableRow,
//   TablePagination,
//   TableContainer
// } from '@mui/material'

export const Review = (props) => {
  //const classes = useStyles();  
  const divStyle = {
    margin: '5px',
  };

  const conf = props?.conf
  const validate = () => {
    props.lastStep();
    props.userCallback();
  }
  console.log(conf)
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>Thông số chi tiết tiến trình</h3>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

        <TextField
          id="DagId"
          label="Tên tiến trình"
          value={conf?.DagId}
          InputProps={{
            readOnly: true,
          }}
          focused={true}
          size="small"

        />

        <TextField
          label="Tần suất chạy"
          id="Schedule"
          name="Schedule"
          size="small"

          value={conf?.Schedule}
          // onChange={onInputChanged}
          InputProps={{
            readOnly: true,
          }}
          focused={true}

        />

        <TextField
          label="Owner"
          id="Owner"
          name="Owner"
          size="small"

          value={conf?.owner}
          // onChange={onInputChanged}
          InputProps={{
            readOnly: true,
          }}
          focused={true}

        />

        <TextField
          label="Tags"
          id="tags_name"
          name="tags_name"

          focused={true}

          value={conf?.tags}
          // onChange={onInputChanged}
          size="small"
          InputProps={{
            readOnly: true,
          }}

        />

      </Box>
      {
        //source
      }
      {
        conf?.source?.map((form, index) => (
          <Box 
          key = {index}
          component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">

            <strong>Source {index + 1} </strong><br></br>
            <TextField
              label='Source Type'
              name='sourcetype'
              value={form?.sourcetype}
              size="small"
              InputProps={{
                readOnly: true,
              }}
              focused={true}
            />
            <TextField
              label='Đường dẫn kết nối'
              name='connectstring'
              value={form?.connectstring}
              size="small"
              InputProps={{
                readOnly: true,
              }}
              focused={true}
            />
            <TextField
              name='databasename'
              size="small"
              label='Tên cơ sở dữ liệu'
              value={form.databasename}
              InputProps={{
                readOnly: true,
              }}
              focused={true}
            />
            <br></br>
            <TextField
              name='srcusername'
              size="small"
              label='Tài khoản đăng nhập'
              value={form.srcusername}
              InputProps={{
                readOnly: true,
              }}
              focused={true}
            />
            <TextField
              name='srcpassword'
              size="small"
              label='Mật khẩu'
              value={form.srcpassword}
              InputProps={{
                readOnly: true,
              }}
              focused={true} />

            <TextField
              name='tablename'
              size="small"
              multiline
              fullWidth
              label='Tên bảng/Truy vấn/Tên file'
              value={form.tablename}
              InputProps={{
                readOnly: true,
              }}
              focused={true} />
            <TextField
              name='alias'
              size="small"
              label='Tên bảng cho tiến trình'
              value={form.alias}
              InputProps={{
                readOnly: true,
              }}
              focused={true} 
              />
          </Box>
        ))
      }
      {
        //query
      }

      {
        conf?.query?.map((formquery, index) => (
          <Box 
          // component="form"
          //   sx={{
          //     '& .MuiTextField-root': { m: 1, width: '25ch' },
          //   }}
          //   noValidate
          //   autoComplete="off"
          key = {index}

            >
            <strong>Query {index + 1} </strong>
            <br></br>
            <TextField
              label="Tên job tổng hợp"
              id="queryname"
              name="queryname"
              value={formquery?.queryname}
              size="small"
              style={divStyle}
              InputProps={{
                readOnly: true,
              }}
              focused={true} 
            />
            <TextField
              label="Bảng cần tổng hợp"
              value={formquery?.listsourcetable}
              size="small"
              style={divStyle}
              InputProps={{
                readOnly: true,
              }}
              focused={true} 
            />
            <br></br>

            <TextField
              label="Query Detail"
              id="querydetail"
              name="querydetail"
              multiline
              size="small"
              fullWidth
              value={formquery?.querydetail}
              style={divStyle}
              InputProps={{
                readOnly: true,
              }}
              focused={true} 
            />
            <br></br>


            <TextField
              label="Target table"
              size="small"
              value={formquery?.targettable}
              style={divStyle}
              InputProps={{
                readOnly: true,
              }}
              focused={true} 
            />
            <TextField
              label="Write mode"
              size="small"
              value={formquery?.writemode}
              style={divStyle}
              InputProps={{
                readOnly: true,
              }}
              focused={true} 
            />


          </Box>

        ))
      }


      {/* <div><pre>{JSON.stringify(conf, null, 2)}</pre></div> */}


      <ActionButtons {...props} lastStep={validate} />

    </div>
  )
};

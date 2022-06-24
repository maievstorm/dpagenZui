import React from "react";
import Container from "@material-ui/core/Container";
import Box from '@mui/material/Box';
import { Select } from '@mui/material';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IconSquarePlus,IconCircleMinus} from '@tabler/icons'
import MenuItem from '@mui/material/MenuItem';

export const Source = ({ formSrcFields, handleFormSrcChange,removeFields,addFields, navigation }) => {
  const datatypes = [
    {
        key :'storage',
        name : 'Lưu trữ đám mây'
    },
    {
        key :'dwh',
        name : 'Kho dữ liệu'
    },
    {
        key :'bigdata',
        name : 'Dữ liệu lớn'
    }
    ,
    {
        key :'sqlserver',
        name : 'Microsof Sql, Azure SQL'
    } ,
    {
        key :'oracle',
        name : 'Oracle'
    }
    ,
    {
        key :'mysql',
        name : 'MySQL'
    }
    ,
    {
        key :'postgres',
        name : 'PostgresSQL'
    }
    

]
  const divStyle = {
    margin: '5px'
  };

  return (
    <div>
      <p>
      <strong>
          Đăng ký dữ liệu
      </strong>
      </p>
      
      <Box >
          {formSrcFields.map((form, index) => {
              return (
                  <div key={index}  >
                      <strong>{index+1} </strong> 
                      <Select name='sourcetype' value={form.sourcetype} onChange={event => handleFormSrcChange(event, index)}
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


                      <TextField
                          name='connectstring'
                          size="small"
                          label='Đường dẫn kết nối'
                          onChange={event => handleFormSrcChange(event, index)}
                          value={form.connectstring}
                          style={divStyle}
                      />
                        <TextField
                          name='databasename'
                          size="small"
                          label='Tên cơ sở dữ liệu'
                          onChange={event => handleFormSrcChange(event, index)}
                          value={form.databasename}
                          style={divStyle}
                      />
                      <TextField
                          name='srcusername'
                          size="small"
                          label='Tài khoản đăng nhập'
                          onChange={event => handleFormSrcChange(event, index)}
                          value={form.srcusername}
                          style={divStyle}
                      />
                        <TextField
                          name='srcpassword'
                          size="small"
                          label='Mật khẩu'
                          onChange={event => handleFormSrcChange(event, index)}
                          value={form.srcpassword}
                          style={divStyle}
                      />
                      <TextField
                          name='tablename'
                          size="small"
                          label='Tên bảng/tên file'
                          onChange={event => handleFormSrcChange(event, index)}
                          value={form.tablename}
                          style={divStyle}
                      />
                      <TextField
                          name='alias'
                          size="small"
                          label='Tên bảng cho truy vấn'
                          onChange={event => handleFormSrcChange(event, index)}
                          value={form.alias}
                          style={divStyle}
                      />
                      <Button style={divStyle} name="removesource" onClick={() => removeFields(index)}><IconCircleMinus/></Button>
                      <br></br>
                  </div>
              )
          })}
          <Button style={divStyle} name = "addsoruce" onClick={addFields}><IconSquarePlus/></Button>
      </Box>

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

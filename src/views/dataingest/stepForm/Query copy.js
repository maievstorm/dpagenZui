import React from "react";

import Box from '@mui/material/Box';
import { Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IconSquarePlus,IconCircleMinus} from '@tabler/icons'
import MenuItem from '@mui/material/MenuItem';
import MultipleSelectCheckmarks from '../MultipleSelectCheckmarks';
import ActionButtons from "./ActionButton";


export const Query = (props) => {
  const divStyle = {
    margin: '5px'
  };
  const writemodetype = [
    {
        key: 'append',
        name: 'append'
    },
    {
        key: 'overwrite',
        name: 'overwrite'
    } 
]

  return (
    <div>
      <strong>
          Đăng ký thủ tục tổng hợp dữ liệu
      </strong>
      <div  >
          {formQuery?.map((formquery, index) => (
              <div key={index} >
                  <strong>{index+1} </strong> 
                  <div >
                      {/* <strong>Query {index}</strong> */}
                      <TextField
                          label="Tên job tổng hợp"
                          id="queryname"
                          name="queryname"
                          value={formquery.queryname}
                          size="small"
                          onChange={event => handleformQuery(event, index)}
                          style={divStyle}
                      />
                        <br></br>
                      

                      {/* <TextField
                          label="Danh sách bảng cần tổng hợp"
                          id="listsourcetable"
                          name="listsourcetable"
                          value={formquery.listsourcetable}
                          onChange={event => handleformQuery(event, index)}
                          size="small"
                          style={divStyle}
                      />  */}

                      
                      <MultipleSelectCheckmarks 
                        headerName={'Danh sách bảng cần tổng hợp'} 
                        data={formSrcFields}
                        formQuery={formQuery}
                        setformQuery = {setformQuery}
                        index = {index}
                        source = {'listsourcetable'}
                      /> 
                      
                        <Button name="btnremovequery" onClick={() => removeQuery(index)}><IconCircleMinus/></Button>
                        <br></br>
                        <TextField
                          label="Query Detail"
                          id="querydetail"
                          name="querydetail"
                          multiline
                          size="small"
                          fullWidth
                          value={formquery.querydetail}
                          onChange={event => handleformQuery(event, index)}
                          style={divStyle}
                      />

                      <Select name='targettable' 
                              value={formquery.targettable}  
                              onChange={event => handleformQuery(event, index)}
                              size="small"
                              style={divStyle}
                      >
                          
                            {formSrcFields.map((formSrcField) => (
                                  <MenuItem
                                  key={formSrcField.alias}
                                  value={formSrcField.alias}
                                  >
                                  {formSrcField.alias}
                                  </MenuItem>
                              ))}

                      </Select>

                      Write mode
                      <Select name='writemode'
                          value={formquery.writemode}
                          onChange={event => handleformQuery(event, index)}
                          size="small"
                          style={divStyle}
                      >

                          {writemodetype.map((writemode) => (
                              <MenuItem
                                  key={writemode.key}
                                  value={writemode.key}
                              >
                                  {writemode.name}
                              </MenuItem>
                          ))}

                      </Select>
                  </div>
                
              </div>
              
          ))
          }
          <Button style={divStyle} name="btnaddquery" onClick={addFieldQuery}><IconSquarePlus/></Button>
      </div>
      <ActionButtons {...props}/>

    </div>
  );
};

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function ReviewItem(props) {
    const conf = props?.conf
    const edit = props?.edit === undefined ? true : props?.edit === false ? true : false
    const onInputChanged = props?.onInputChanged

    const divStyle = {
        margin: '5px',
        color: 'red'
    };
    const scheduletypes = [
        {
          key: 'None',
          name: 'None'
        },
        {
          key: '@once',
          name: 'Một lần'
        },
        {
          key: '@hourly',
          name: 'Hằng giờ'
        },
        {
          key: '@daily',
          name: 'Hằng ngày'
        },
        {
          key: '@weekly',
          name: 'Hằng tuần'
        },
        {
          key: '@monthly',
          name: 'Hằng tháng'
        }
    
    
      ]
    return (
        <div>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">

                <TextField
                    id="DagId"
                    name="DagId"
                    label="Tên tiến trình"
                    value={conf?.DagId}
                    InputProps={{
                        readOnly: true,
                    }}
                    // onChange={onInputChanged}
                    focused={true}
                    size="small"

                />
                {
                    !edit && <Select id="Schedule" name='Schedule' value={conf.Schedule} onChange={onInputChanged}
                    size="small"
                    style={divStyle}
                    headername={'Tần suất chạy'}
                  >
          
                    {scheduletypes.map((scheduletype) => (
                      <MenuItem
                        key={scheduletype.key}
                        value={scheduletype.key}
                      >
                        {scheduletype.name}
                      </MenuItem>
                    ))}
          
                  </Select>
                }

                {
                    edit && <TextField
                        label="Tần suất chạy"
                        id="Schedule"
                        name="Schedule"
                        size="small"

                        value={conf?.Schedule}
                        // onChange={onInputChanged}
                        InputProps={{
                            readOnly: edit,
                        }}
                        focused={true}

                    />
                }


                <TextField
                    label="Owner"
                    id="Owner"
                    name="Owner"
                    size="small"

                    value={conf?.owner}
                    // onChange={onInputChanged}
                    InputProps={{
                        readOnly: edit,
                    }}
                    focused={true}

                />

                <TextField
                    label="Tags"
                    id="tags_name"
                    name="tags"

                    focused={true}

                    value={conf?.tags}
                    onChange={onInputChanged}
                    size="small"
                    InputProps={{
                        readOnly: edit,
                    }}

                />

            </Box>
            {
                //source
            }
            {
                conf?.source?.map((form, index) => (
                    <Box
                        key={index}
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
                                readOnly: edit,
                            }}
                            focused={true}
                        />
                        <TextField
                            label='Đường dẫn kết nối'
                            name='connectstring'
                            value={form?.connectstring}
                            size="small"
                            InputProps={{
                                readOnly: edit,
                            }}
                            focused={true}
                        />
                        <TextField
                            name='databasename'
                            size="small"
                            label='Tên cơ sở dữ liệu'
                            value={form.databasename}
                            InputProps={{
                                readOnly: edit,
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
                                readOnly: edit,
                            }}
                            focused={true}
                        />
                        <TextField
                            name='srcpassword'
                            size="small"
                            label='Mật khẩu'
                            value={form.srcpassword}
                            InputProps={{
                                readOnly: edit,
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
                                readOnly: edit,
                            }}
                            focused={true} />
                        <TextField
                            name='alias'
                            size="small"
                            label='Tên bảng cho tiến trình'
                            value={form.alias}
                            InputProps={{
                                readOnly: edit,
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
                        key={index}

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
                                readOnly: edit,
                            }}
                            focused={true}
                        />
                        <TextField
                            label="Bảng cần tổng hợp"
                            value={formquery?.listsourcetable}
                            size="small"
                            style={divStyle}
                            InputProps={{
                                readOnly: edit,
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
                                readOnly: edit,
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
                                readOnly: edit,
                            }}
                            focused={true}
                        />
                        <TextField
                            label="Write mode"
                            size="small"
                            value={formquery?.writemode}
                            style={divStyle}
                            InputProps={{
                                readOnly: edit,
                            }}
                            focused={true}
                        />


                    </Box>

                ))
            }
        </div>
    )
}
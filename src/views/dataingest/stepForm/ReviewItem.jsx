import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from "react";
import { scheduletypes, writemodetype } from "./constant";
import { datatypes } from "./constant";
import { IconSquarePlus, IconCircleMinus } from '@tabler/icons'
import Button from '@mui/material/Button';
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks";

export default function ReviewItem(props) {
    const conf = props?.conf
    const edit = props?.edit === undefined ? true : props?.edit === false ? true : false
    const onInputChanged = props?.onInputChanged

    const divStyle = {
        margin: '5px',
        color: 'red'
    };
    const formSrcFields = props?.formSrcFields
    const formQuery = props?.formQuery


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
                    !edit && <Select id="Schedule" name='Schedule' value={conf?.Schedule} onChange={onInputChanged}
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

            <Box>
                {
                    formSrcFields?.map((form, index) => (
                        <Box
                            key={index}
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off">

                            <strong>Source {index + 1} </strong><br></br>
                            {
                                !edit && <Select name='sourcetype' value={form.sourcetype} onChange={event => props.handleFormSrcChange(event, index)}
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
                            }
                            {
                                edit &&
                                <TextField
                                    label='Source Type'
                                    name='sourcetype'
                                    onChange={event => props.handleFormSrcChange(event, index)}

                                    value={form?.sourcetype}
                                    size="small"
                                    InputProps={{
                                        readOnly: edit,
                                    }}
                                    focused={true}
                                />
                            }
                            <TextField
                                label='Đường dẫn kết nối'
                                name='connectstring'
                                value={form?.connectstring}
                                size="small"
                                onChange={event => props.handleFormSrcChange(event, index)}

                                InputProps={{
                                    readOnly: edit,
                                }}
                                focused={true}
                            />
                            <TextField
                                name='databasename'
                                size="small"
                                label='Tên cơ sở dữ liệu'
                                onChange={event => props.handleFormSrcChange(event, index)}

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
                                onChange={event => props.handleFormSrcChange(event, index)}

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
                                onChange={event => props.handleFormSrcChange(event, index)}

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
                                onChange={event => props.handleFormSrcChange(event, index)}

                                value={form.tablename}
                                InputProps={{
                                    readOnly: edit,
                                }}
                                focused={true} />
                            <TextField
                                name='alias'
                                size="small"
                                label='Tên bảng cho tiến trình'
                                onChange={event => props.handleFormSrcChange(event, index)}

                                value={form.alias}
                                InputProps={{
                                    readOnly: edit,
                                }}
                                focused={true}
                            />
                            <Button style={divStyle} name="removesource" onClick={() => props?.removeFields(index)}><IconCircleMinus /></Button>
                        </Box>

                    ))

                }
                <Button style={divStyle} name="addsoruce" onClick={props?.addFields}><IconSquarePlus /></Button>

            </Box>
            <Box>
                {
                    formQuery?.map((formquery, index) => (
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
                                onChange={event => props.handleformQuery(event, index)}

                                InputProps={{
                                    readOnly: edit,
                                }}
                                focused={true}
                            />
                            {
                                !edit && <MultipleSelectCheckmarks
                                    headerName={'Danh sách bảng cần tổng hợp'}
                                    data={props.formSrcFields}
                                    formQuery={props.formQuery}
                                    setformQuery={props.setformQuery}
                                    index={index}
                                    source={'listsourcetable'} />
                            }
                            {
                                edit && <TextField
                                    label="Bảng cần tổng hợp"
                                    value={formquery?.listsourcetable}
                                    size="small"
                                    style={divStyle}

                                    InputProps={{
                                        readOnly: edit,
                                    }}
                                    focused={true}
                                />
                            }

                            <br></br>

                            <TextField
                                label="Query Detail"
                                id="querydetail"
                                name="querydetail"
                                multiline
                                size="small"
                                fullWidth
                                value={formquery?.querydetail}
                                onChange={event => props.handleformQuery(event, index)}

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
                                onChange={event => props.handleformQuery(event, index)}

                                style={divStyle}
                                InputProps={{
                                    readOnly: edit,
                                }}
                                focused={true}
                            />
                            {
                                !edit && <Select name='writemode'
                                    value={formquery.writemode}
                                    onChange={event => props.handleformQuery(event, index)}
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
                            }
                            {
                                edit && <TextField
                                    label="Write mode"
                                    size="small"
                                    value={formquery?.writemode}
                                    style={divStyle}
                                    InputProps={{
                                        readOnly: edit,
                                    }}
                                    focused={true}
                                />
                            }


                        </Box>

                    ))
                }
            </Box>
        </div>
    )
}
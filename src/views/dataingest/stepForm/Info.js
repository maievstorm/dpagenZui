import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ActionButtons from "./ActionButton";
import { useState, useEffect } from "react";
import config from "../../../config";
import axios from 'axios';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import UserService from "services/UserService";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
<<<<<<< HEAD
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
=======
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

>>>>>>> 000deeea1ad11888d70ad94734356ad2dc344994

export const Info = (props) => {
  const handleChange = (newValue) => {
    setDagInfo({...daginfo,'schedule_interval':newValue});
  };
  const divStyle = {
    margin: '5px'
  };
  const [error, setError] = useState("");

  const [daginfo, setDagInfo] = useState({})

  const [subscription_id, setSubscription_id] = useState([]);

  useEffect(() => {
    let router = config.rootapi + '/subscription/subbyusername/' + UserService.getUsername()
    axios({
      method: 'get',
      url: router
    })
      .then(res => {
        setSubscription_id(res.data.data)
      })
      .catch(error => console.log(error))
  }, [])


  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setDagInfo((daginfo) => ({
      ...daginfo,
      [targetName]: targetValue
    }));
  };
  console.log('daginfo:', daginfo)

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


  const validate = () => {
    const getairflowapi = config.rootapi + '/invoice/' + daginfo.DagId;
    axios.get(getairflowapi)
      .then(res => {
        setError("Đã tồn tại tên tiến trình!");

      })
      .catch(err => {
        if (!daginfo.DagId || !daginfo.Schedule || !daginfo.tags || !daginfo.subscription_id) setError("Thông tin không chính xác!");
        else {
          setError("");
          props.nextStep();
          props.userCallback(daginfo);
        }
      })

  };

  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <strong>
        Thông tin tiến trình
      </strong><br></br>
      <span style={{ color: 'red' }}>{error}</span>

      <Box >


        <TextField
          label="Tên tiến trình"
          id="DagId"
          name="DagId"
          value={daginfo.DagId}
          size="small"
          onChange={onInputChanged}
          style={divStyle}

        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tần suất chạy</InputLabel>
          <Select id="Schedule" name='Schedule' value={daginfo.Schedule} onChange={onInputChanged}
            size="small"
            style={divStyle}
            headername={'Tần suất chạy'}
            label='Tần suất chạy'

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
          <br></br>
        </FormControl>
<<<<<<< HEAD
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Lịch chay"
          name="schedule_interval"
          value={value}
         // onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <br></br>
=======

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Date&Time picker"
            value={daginfo.schedule_interval}
            name='schedule_interval'
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <br></br>

>>>>>>> 000deeea1ad11888d70ad94734356ad2dc344994
        <TextField
          label="Tags"
          id="tags"
          name="tags"
          value={daginfo.tags}
          onChange={onInputChanged}
          size="small"
          style={divStyle}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Subscription</InputLabel>

          <Select id="subscription_id" name='subscription_id' value={daginfo.subscription_id} onChange={onInputChanged}
            size="small"
            style={divStyle}
            headername={'Subscription id'}
          >

            {subscription_id.map((scheduletype) => (
              <MenuItem
                key={scheduletype.subscription_id}
                value={scheduletype.subscription_id}
              >
                {scheduletype.subscription_id}
              </MenuItem>
            ))}

          </Select>
        </FormControl>



      </Box>
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

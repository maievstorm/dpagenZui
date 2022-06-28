import React from "react";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import ActionButtons from "./ActionButton";
import { height } from "@mui/system";

export const Finish = (props) => {
  const loading = props.loading
  console.log(props.loading)
  const timerRef = React.useRef();

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickLoading = () => {
    props.setLoading((prevLoading) => !prevLoading);
  };

  
  return (
    <div style={{ marginTop: "1rem" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'80px' }}>
        <Box sx={{ height: 80 }}>
          <Fade
            in={loading}
            style={{
              transitionDelay: loading ? '800ms' : '0ms',
              width:'50px',
              height:'50px',
              color:'red'
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
          
        </Box>
        {/* <Button onClick={handleClickLoading} sx={{ m: 2 }}>
          {loading ? 'Stop loading' : 'Loading'}
        </Button> */}
      </Box>
      {/* <ActionButtons {...props} /> */}
    </div>
  );
};

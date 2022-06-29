import UserService from "../services/UserService";

// --------------------------
//import React from 'react';
//import { AppBar,Toolbar,Button,CssBaseline,Typography,Link } from "@mui/material";
import Logo from 'ui-component/Logo';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pricing from "./Pricing";

// const useStyles =() => ({
//     root: {
//         boxShadow: " 5px 5px #2196F3",
//         backgroundColor: "white",
//         border: '1px solid' 
//       } ,

//     navlinks: {
//       marginLeft: 10,
//       display: "flex",
//     },
//    logo: {
//       flexGrow: "1",
// //       cursor: "pointer",
//       },
//     link: {
//       //textDecoration: "none",
//       color: "black",
//       fontSize: "15px",
//       marginLeft: 10,
//       "&:hover": {
//         color: "black",
//         borderBottom: "1px solid white",
//       },
//     },
//   });


// export default class Welcome extends React.Component {



//     render() {
//         return (
//             <div >
//               <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
//             </div>
//         )
//     }
// }


// function Welcome() {
//     // const classes = useStyles();

//     return (
//       <div>
//       <AppBar position="static"  style={{backgroundColor : 'white'}}>
//         <CssBaseline />
//         <Toolbar>
//           <Typography variant="h4" >
//             <Logo/>
//           </Typography>
//             <div >
//               <Button >
//                 Về chúng tôi
//               </Button>
//               <Button  >
//                 Sản phẩm
//               </Button>
//               <Button  >
//                 Liên hệ
//               </Button>
//               <Button >
//                 Đăng ký
//               </Button>

//             </div>
//         </Toolbar>
//       </AppBar>
//       <Button  onClick={() => UserService.doLogin()}>Đăng nhập</Button>
//       </div>

//     );
//   }
//   export default Welcome;


const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];


function Welcome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
       
      </List> */}
      <Button sx={{ color: '#2196F3' }}>
        Liên hệ
      </Button>
      <Divider />
      <Button sx={{ color: '#2196F3' }}>
        Đăng ký
      </Button>
      <Divider />
      <Button sx={{ color: '#2196F3' }} onClick={() => UserService.doLogin()}>Đăng nhập</Button>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{ backgroundColor: 'white' }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Logo />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* <Logo /> */}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#2196F3' }}>
                {item}
              </Button>

            ))} */}
            <Button sx={{ color: '#2196F3' }}>
              Liên hệ
            </Button>
            <Button sx={{ color: '#2196F3' }}>
              Đăng ký
            </Button>
            <Button sx={{ color: '#2196F3' }} onClick={() => UserService.doLogin()}>Đăng nhập</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
    <Pricing></Pricing>
    </div>
  );
}

Welcome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Welcome;

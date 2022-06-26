import UserService from "../services/UserService";
import React from 'react';
import { AppBar,Toolbar,Button,CssBaseline,Typography } from "@mui/material";
import Logo from 'ui-component/Logo';
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


function Welcome() {
    // const classes = useStyles();
  
    return (
      <AppBar position="static"  style={{backgroundColor : 'white'}}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" >
            <Logo/>
          </Typography>
            <div >
              <Button to="/about" >
                Về chúng tôi
              </Button>
              <Button  >
                Sản phẩm
              </Button>
              <Button  >
                Liên hệ
              </Button>
              <Button >
                Đăng ký
              </Button>
              <Button  onClick={() => UserService.doLogin()}>Đăng nhập</Button>
            </div>
        </Toolbar>
      </AppBar>
    );
  }
  export default Welcome;
import UserService from "../services/UserService";
import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";

import Logo from 'ui-component/Logo';
const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: " 5px 5px #2196F3",
        backgroundColor: "white",
        border: '1px solid' 
      } ,
      
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
//    logo: {
//       flexGrow: "1",
//       cursor: "pointer",
//     },
    link: {
      //textDecoration: "none",
      color: "black",
      fontSize: "15px",
      marginLeft: theme.spacing(10),
      "&:hover": {
        color: "black",
        borderBottom: "1px solid white",
      },
    },
  }));
 

// export default class Welcome extends React.Component {



//     render() {
//         return (
//             <div style={styles.paperContainer}>
//               <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
//             </div>
//         )
//     }
// }


function Welcome() {
    const classes = useStyles();
  
    return (
      <AppBar position="static"  className={classes.root}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            <Logo/>
          </Typography>
            <div className={classes.navlinks}>
              <Button to="/about" className={classes.link}>
                Về chúng tôi
              </Button>
              <Button  className={classes.link}>
                Sản phẩm
              </Button>
              <Button  className={classes.link}>
                Liên hệ
              </Button>
              <Button className={classes.link}>
                Đăng ký
              </Button>
              <Button  className={classes.link }   onClick={() => UserService.doLogin()}>Đăng nhập</Button>
            </div>
        </Toolbar>
      </AppBar>
    );
  }
  export default Welcome;
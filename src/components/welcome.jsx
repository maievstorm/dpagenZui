import UserService from "../services/UserService";
import React from 'react';
const styles = {
    paperContainer: {
        height: 1356,
        backgroundImage: `url(${"./dbzgb.jpg"})`
    }
};

export default class Welcome extends React.Component {
    render() {
        return (
            <div style={styles.paperContainer}>
              <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
            </div>
        )
    }
}
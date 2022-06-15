import UserService from "../services/UserService";


const Welcome = () => (
  <div className="jumbotron">
   
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login</button>
    </p>
  </div>
)

export default Welcome

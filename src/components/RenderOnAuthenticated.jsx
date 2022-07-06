import UserService from "../services/UserService";

const RenderOnAuthenticated = ({ children }) => (UserService.isLoggedIn()) ? children: null;

console.log(UserService.isLoggedIn())
 

export default RenderOnAuthenticated
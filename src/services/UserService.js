import Keycloak from 'keycloak-js';
import BaseAxios from './BaseAxios';

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
// const initKeycloak = (onAuthenticatedCallback) => {
//   _kc.init({
//     onLoad: 'check-sso',
//     silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
//     pkceMethod: 'S256',
//   })
//     .then((authenticated) => {
//       if (!authenticated) {
//         console.log("user is not authenticated..!");
//       }
//       onAuthenticatedCallback();
//     })
//     .catch(console.error);
// };

const initKeycloak = (onAuthenticatedCallback) => {
  const token = localStorage.getItem('kc_token');
  const refreshToken = localStorage.getItem('kc_refreshToken');
  // pass to keycloak init
  _kc.init({ onLoad: 'login-required', token, refreshToken }).then(
  success=>{
    localStorage.setItem('kc_token', _kc.token);
    localStorage.setItem('kc_refreshToken', _kc.refreshToken);
    onAuthenticatedCallback();
  }
  )
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;
 

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));
const listroles =() =>  _kc.tokenParsed?.realm_access;


const applyService = async (data) => {
  try{
      await BaseAxios({
        method:'post',
        url:'/requestsub',
        data:data
      });
  }catch(err){
      console.log(err);
  }
}

const getOffer = async () => {
  let response
  try{
    response = await BaseAxios({
        method:'get',
        url:'/offer',
      });
  }catch(err){
      console.log(err);
  }
  return response
}


const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  listroles,
  applyService,
  getOffer
};

export default UserService;

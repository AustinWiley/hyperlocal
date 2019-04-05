/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/home";
const LOGIN_FAILURE_PAGE = "/";
const CALLBACK_PAGE = window.location.pathname + "/callback";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "reallycoolauth.auth0.com",
        clientID: "2SX696cmEE1CmSS1n1q7gqXjJLV9Ut8X",
        redirectUri: CALLBACK_PAGE,
        audience: "https://reallycoolauth.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid email profile"
    });

    constructor() {
        this.login = this.login.bind(this);
    };

    login() {
        this.auth0.authorize();
    }

    handleAuthentication = () => {
        this.auth0.parseHash((err, authResults) => {
          if (authResults && authResults.accessToken && authResults.idToken) {
            let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime())
            localStorage.setItem("access_token", authResults.accessToken);
            localStorage.setItem("id_token", authResults.idToken);
            localStorage.setItem("expires_at", expiresAt);
            window.location.hash = "";
            window.location.pathname = LOGIN_SUCCESS_PAGE;
          } else if (err) {
            window.location.pathname = LOGIN_FAILURE_PAGE;
            console.log(err);
          }
        });
      }
        
      isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiresAt time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }

      logout() {
          localStorage.removeItem("access_token");
          localStorage.removeItem("id_token");
          localStorage.removeItem("expires_at");
          location.pathname = LOGIN_FAILURE_PAGE;
      }

      getProfile() {
          if (localStorage.getItem("id_token")) {
              return jwtDecode(localStorage.getItem("id_token"));
          } else {
              return {};
          }
      }

};
import {LocalStorageManager} from "../utilities/LocalStorageManager";
import {myAxios} from "../config/myAxios";

export const AuthenticationService = {
    isAuthenticated: function () {
        return !!LocalStorageManager.getAccessToken();
    },

    authenticate: function (user) {
        const url = `${process.env.REACT_APP_BASE_URL}api/login`;
        return myAxios.post(url, user);
    },

    signup: function (user) {
        const url = `${process.env.REACT_APP_BASE_URL}api/signup`;
        return myAxios.post(url, user);
    },

    logout: function () {
        const url = `${process.env.REACT_APP_BASE_URL}api/logout`;
        return myAxios.post(url);
    }
};
export const LocalStorageManager = {
    item: "accessToken",
    user: "userInfo",
    setAccessToken(token) {
        localStorage.setItem(this.item, token);
    },

    getCurrentIdUser() {
        return this.getUserInfo().idU;
    },

    // isCurrentUser() {
    //     return localStorage.getItem(this.user);
    // },

    getUserInfo(){
        return  JSON.parse(localStorage.getItem(this.user));
    },

    getMode() {
        return this.getUserInfo().mode;
    },

    getModeName() {
        return this.getUserInfo().modeName;
    },

    getCurrentUserName() {
        return this.getUserInfo().name;
    },

    setCurrentUser(obj) {
        localStorage.setItem(this.user, JSON.stringify(obj));
    },

    isLogin() {
        try {
            this.getCurrentIdUser()
            return true;
        }  catch (e) {
            return false;
        }
    },

    getAccessToken() {
        return localStorage.getItem(this.item);
    },

    clearAccessToken() {
        localStorage.clear();
    }
};
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

    getCurrentUserName() {
        return this.getUserInfo().name;
    },

    setCurrentUser(obj) {
        localStorage.setItem(this.user, JSON.stringify(obj));
    },

    getAccessToken() {
        return localStorage.getItem(this.item);
    },

    clearAccessToken() {
        localStorage.clear();
    }
};
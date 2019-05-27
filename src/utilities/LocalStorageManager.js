export const LocalStorageManager = {
    item: "accessToken",
    id: "UserId",
    setAccessToken(token) {
        localStorage.setItem(this.item, token);
    },

    getCurrentIdUser() {
        return localStorage.getItem(this.id);
    },

    setCurrentIdUser(id) {
        localStorage.setItem(this.id, id);
    },

    getAccessToken() {
        return localStorage.getItem(this.item);
    },

    clearAccessToken() {
        localStorage.clear();
    }
};
export const LocalStorageManager = {
  item: "accessToken",
  setAccessToken(token) {
    localStorage.setItem(this.item, token);
  },

  getAccessToken() {
    return localStorage.getItem(this.item);
  },

  clearAccessToken() {
    localStorage.clear();
  }
};
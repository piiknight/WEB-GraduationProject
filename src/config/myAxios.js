import axios from "axios";
import { LocalStorageManager } from "utilities/LocalStorageManager";

export const myAxios = {
  baseAPI: process.env.REACT_APP_API_URL,

  sendRequest: function(config) {
    // config.headers = {
    //   "Content-Type": "application/json",
    //   Accept: "application/json"
    // };

    // if (LocalStorageManager.getAccessToken()) {
    //   config.headers.Authorization = `Bearer ${LocalStorageManager.getAccessToken()}`;
    // }

    return new Promise(resolve => {
      axios
        .request(config)
        .then(response => {
          resolve({ data: response.data, error: null });
        })
        .catch(error => {
          if (error && error.response) {
            resolve({ data: null, error: error.response });
          }
        });
    });
  },

  post: function(url, data, customAPI) {
    const config = {
      url,
      method: "post",
      baseURL: customAPI || this.baseAPI,
      data
    };

    return this.sendRequest(config);
  },

  put: function(url, data, customAPI) {
    const config = {
      url,
      method: "put",
      baseURL: customAPI || this.baseAPI,
      data
    };

    return this.sendRequest(config);
  },

  get: function(url, params, customAPI) {
    const config = {
      url,
      method: "get",
      baseURL: customAPI || this.baseAPI,
      params
    };

    return this.sendRequest(config);
  },
  delete: function(url, params, customAPI) {
    const config = {
      method: "delete",
      url,
      baseURL: customAPI || this.baseAPI,
      params
    };

    return this.sendRequest(config);
  }
};

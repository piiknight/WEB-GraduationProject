import { myAxios } from "config/myAxios";

export const UserService = {
  userAPI: `${process.env.REACT_APP_API_URL}user`,

  getAll() {
    const url = `${UserService.userAPI}`;
    return myAxios.get(url);
  },

  deleteOne(id) {
    const url = `${UserService.userAPI}/${id}`;
    return myAxios.delete(url);
  },

  addOne(object) {
    return myAxios.post(`${UserService.userAPI}/`, object);
  },

  updateOne(object) {
    return myAxios.put(`${UserService.userAPI}/${object.idU}`, object);
  }

};

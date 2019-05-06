import { myAxios } from "config/myAxios";

export const CongviecService = {
  congviecAPI: `${process.env.REACT_APP_API_URL}congviec`,

  getAll() {
    const url = `${CongviecService.congviecAPI}`;
    return myAxios.get(url);
  },

  deleteOne(id) {
    const url = `${CongviecService.congviecAPI}/${id}`;
    return myAxios.delete(url);
  },

  addOne(object) {
  	console.log("addOne");
    return myAxios.post(`${CongviecService.congviecAPI}/`, object);
  },

  updateOne(object) {
    return myAxios.put(`${CongviecService.congviecAPI}/${object.idCV}`, object);
  }

};

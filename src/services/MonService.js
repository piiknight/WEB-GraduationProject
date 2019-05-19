import {myAxios} from "config/myAxios";

export const MonService = {
    congviecAPI: `${process.env.REACT_APP_API_URL}mon`,

    getAll() {
        const url = `${MonService.congviecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${MonService.congviecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${MonService.congviecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${MonService.congviecAPI}/${object.idMon}`, object);
    },

    getById(id) {
        const url = `${MonService.congviecAPI}/${id}`;
        return myAxios.get(url);
    }

};

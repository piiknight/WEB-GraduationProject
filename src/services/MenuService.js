import {myAxios} from "config/myAxios";

export const MenuService = {
    congviecAPI: `${process.env.REACT_APP_API_URL}menu`,

    getAll() {
        const url = `${MenuService.congviecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${MenuService.congviecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${MenuService.congviecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${MenuService.congviecAPI}/${object.idMenu}`, object);
    }

};

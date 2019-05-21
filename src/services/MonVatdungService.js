import {myAxios} from "config/myAxios";

export const MonVatdungService = {
    congviecAPI: `${process.env.REACT_APP_API_URL}mon-vd`,

    getAllByIdMon(id) {
        const url = `${MonVatdungService.congviecAPI}/mon-id/${id}`;
        return myAxios.get(url);
    },

    getAll() {
        const url = `${MonVatdungService.congviecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${MonVatdungService.congviecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${MonVatdungService.congviecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${MonVatdungService.congviecAPI}/${object.idMVD}`, object);
    },

    getById(id) {
        const url = `${MonVatdungService.congviecAPI}/${id}`;
        return myAxios.get(url);
    }

};

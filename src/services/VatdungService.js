import {myAxios} from "config/myAxios";

export const VatdungService = {
    congviecAPI: `${process.env.REACT_APP_API_URL}vatdung`,

    getAllType() {
        const url = `${VatdungService.congviecAPI}/type`;
        return myAxios.get(url);
    },

    getAll() {
        const url = `${VatdungService.congviecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${VatdungService.congviecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${VatdungService.congviecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${VatdungService.congviecAPI}/${object.idVD}`, object);
    }

};

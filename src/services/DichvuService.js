import {myAxios} from "config/myAxios";

export const DichvuService = {
    congviecAPI: `${process.env.REACT_APP_API_URL}dichvu`,

    getAll() {
        const url = `${DichvuService.congviecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${DichvuService.congviecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        console.log("addOne: " + JSON.stringify(object));
        return myAxios.post(`${DichvuService.congviecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${DichvuService.congviecAPI}/${object.idDV}`, object);
    }

};

import {myAxios} from "config/myAxios";

export const LoaiTiecService = {
    tiecAPI: `${process.env.REACT_APP_API_URL}loai-tiec`,

    getAll() {
        const url = `${LoaiTiecService.tiecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${LoaiTiecService.tiecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${LoaiTiecService.tiecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${LoaiTiecService.tiecAPI}/${object.idLoai}`, object);
    }

};

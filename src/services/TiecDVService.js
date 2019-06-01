import {myAxios} from "config/myAxios";

export const TiecDVService = {
    tiecDVAPI: `${process.env.REACT_APP_API_URL}tiec-dv`,

    getAll() {
        const url = `${TiecDVService.tiecDVAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${TiecDVService.tiecDVAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${TiecDVService.tiecDVAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${TiecDVService.tiecDVAPI}/${object.idTDV}`, object);
    }

};

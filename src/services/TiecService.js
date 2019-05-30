import {myAxios} from "config/myAxios";

export const TiecService = {
    tiecAPI: `${process.env.REACT_APP_API_URL}tiec`,


    updateStatus(tiec) {
        return myAxios.put(`${TiecService.tiecAPI}/status/${tiec.idTiec}`, tiec);
    },

    getAllByIdNN(id) {
        const url = `${TiecService.tiecAPI}/nn/${id}`;
        return myAxios.get(url);
    },

    getAll() {
        const url = `${TiecService.tiecAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${TiecService.tiecAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${TiecService.tiecAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${TiecService.tiecAPI}/${object.idTiec}`, object);
    }

};

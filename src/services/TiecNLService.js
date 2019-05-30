import {myAxios} from "config/myAxios";

export const TiecNLService = {
    tiecNLAPI: `${process.env.REACT_APP_API_URL}tiec-nl`,


    getAll() {
        const url = `${TiecNLService.tiecNLAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${TiecNLService.tiecNLAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${TiecNLService.tiecNLAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${TiecNLService.tiecNLAPI}/${object.idTNL}`, object);
    }

};

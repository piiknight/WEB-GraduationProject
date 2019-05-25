import {myAxios} from "config/myAxios";

export const NNVDungService = {
    myAPI: `${process.env.REACT_APP_API_URL}nn-vd`,

    getAllByIdNN(id) {
        const url = `${NNVDungService.myAPI}/nn/${id}`;
        return myAxios.get(url);
    },

    getAll() {
        const url = `${NNVDungService.myAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${NNVDungService.myAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${NNVDungService.myAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${NNVDungService.myAPI}/${object.idNNVD}`, object);
    }

};

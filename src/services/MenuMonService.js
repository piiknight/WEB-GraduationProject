import {myAxios} from "config/myAxios";

export const MenuMonService = {
    defaulAPI: `${process.env.REACT_APP_API_URL}menu-mon`,
    relaAPI: `${process.env.REACT_APP_API_URL}menu-mon/menu-id`,

    getAllByIdMenu(id) {
        const url = `${MenuMonService.relaAPI}/${id}`;
        return myAxios.get(url);
    },

    getAll() {
        const url = `${MenuMonService.defaulAPI}`;
        return myAxios.get(url);
    },

    deleteOne(id) {
        const url = `${MenuMonService.defaulAPI}/${id}`;
        return myAxios.delete(url);
    },

    addOne(object) {
        return myAxios.post(`${MenuMonService.defaulAPI}/`, object);
    },

    updateOne(object) {
        return myAxios.put(`${MenuMonService.defaulAPI}/${object.idMM}`, object);
    }

};

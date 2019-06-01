export const ConvertTime = {
    toString(data) {
        let obj = new Date(data);
        if (!obj) return "Can't read time";
        return obj.getHours() + ":" + obj.getMinutes() + "  "
            + obj.getDate() + "/" + (obj.getMonth() + 1) + "/" + obj.getFullYear()
    },


    getDay(data) {
        let obj = new Date(data);
        if (!obj) return "Can't read time";
        return obj.getDate() + "/" + (obj.getMonth() + 1) + "/" + obj.getFullYear()
    },
};
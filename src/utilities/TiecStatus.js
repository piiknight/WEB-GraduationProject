export const TiecStatus = {
    REQUEST: 0,
    ACCEPT: 1,
    PAY: 2,
    ENDED: 3,

    getStatus: function(id){
        switch (id) {
            case this.REQUEST:
                return "REQUEST";
            case this.ACCEPT:
                return "ACCEPT";
            case this.PAY:
                return "PAY";
            case this.ENDED:
                return "ENDED";
        }
    }
};
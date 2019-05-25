export const TiecStatus = {
    REQUEST: 0,
    PENDING: 1,
    ACCPET: 2,
    DEALING: 3,
    VALID: 4,
    PAY: 5,
    ENDED: 6,

    getStatus: function(id){
        switch (id) {
            case this.REQUEST:
                return "REQUEST";
            case this.PENDING:
                return "PENDING";
            case this.ACCPET:
                return "ACCPET";
            case this.DEALING:
                return "DEALING";
            case this.VALID:
                return "VALID";
            case this.PAY:
                return "PAY";
            case this.ENDED:
                return "ENDED";
        }
    }
};
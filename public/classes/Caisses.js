"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caisses = void 0;
class Caisses {
    constructor(solde, transactions) {
        this.solde = solde;
        this.transactions = transactions;
    }
    getTransac() {
        return this.transactions;
    }
    addTransac(transac) {
        this.getTransac().push(transac);
    }
}
exports.Caisses = Caisses;

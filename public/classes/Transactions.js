"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(type, montant, motif) {
        this.typeTransac = type;
        this.montantTtransac = montant;
        this.motifTransac = motif;
    }
    getType() {
        return this.typeTransac;
    }
    getMontant() {
        return this.montantTtransac;
    }
    getMotif() {
        return this.motifTransac;
    }
    setText() {
        return `${this.getMontant} a été ${this.getType} === 'debit' ? retiré : déposé; suite a ${motif}`;
    }
}
exports.Transaction = Transaction;

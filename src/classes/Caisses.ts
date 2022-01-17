import { Transaction } from "./Transactions";

export class Caisses {
    private solde : number;
    private transactions : Transaction[];
    constructor(solde : number, transactions: Transaction[] ) {
        this.solde = solde;
        this.transactions = transactions;
    }
    getTransac(){
        return this.transactions;
    }

    getSolde(){
        return this.solde;
    }
    addTransac(transac: Transaction){
        this.transactions.push(transac);

        if (transac.getType() === 'debit') {
            this.solde -= transac.getMontant();
        }
        else{
            this.solde += transac.getMontant();
        }
    }
}
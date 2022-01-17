import { Caisses } from "./classes/Caisses"
import { Transaction } from "./classes/Transactions"

const form = document.querySelector('form') as HTMLFormElement
const typeOp = document.querySelector('#typeOperation') as HTMLInputElement
const montant = document.querySelector('#montant') as HTMLInputElement
const motif = document.querySelector('#motif') as HTMLInputElement
const liste = document.querySelector('.listeOrdonnee') as HTMLInputElement
let localStore = window.localStorage.account;
let listForm : object [];

let maCaisse = new Caisses(100000, []);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let laTransaction = new Transaction(typeOp.value, montant.valueAsNumber, motif.value)
    maCaisse.addTransac(laTransaction);
    render(liste);

    
});

const render = (container : HTMLElement): void => {
    const li = document.createElement('li');
    const titreOp = document.createElement('h4');
    const parag = document.createElement('p');
    titreOp.innerText = `${typeOp.value} === debit ? Debit : Credit`;
    parag.innerText = ` `;
}
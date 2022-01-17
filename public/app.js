"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Caisses_1 = require("./classes/Caisses");
const form = document.querySelector('form');
const typeOp = document.querySelector('#typeOperation');
const montant = document.querySelector('#montant');
const motif = document.querySelector('#motif');
const liste = document.querySelector('.listeOrdonnee');
let localStore = window.localStorage.account;
let listForm;
let maCaisse = new Caisses_1.Caisses(100000, []);
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

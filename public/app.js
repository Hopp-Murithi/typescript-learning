import { Invoice } from './classes/invoice.js';
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const amount = document.querySelector("#amount");
const details = document.querySelector("#details");
form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents page from refreshing when we submit a form
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//instances of the invoice
const invOne = new Invoice("Murithi", "website work", 2500);
const invTwo = new Invoice("Hope", "System design work", 250000);
console.log(invOne, invTwo);
let invoices = []; //instantiate invoices to take an array. if you pass string or number it will throw an error
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.map((inv) => {
    console.log(inv.format());
});
console.log(invoices);

"use strict";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const amount = document.querySelector("#amount");
const details = document.querySelector("#details");
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page from refreshing when we submit a form
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

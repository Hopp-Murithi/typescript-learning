const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;


form.addEventListener('submit', (e:Event)=>{
  e.preventDefault(); //prevents page from refreshing when we submit a form
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
});
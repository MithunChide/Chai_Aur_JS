const body = document.querySelector("body");
// console.log(body)
// console.log("Mithun")
const buttons = document.querySelectorAll('.button')
// console.log(buttons);

buttons.forEach( (button) => {
  button.addEventListener ('click', (e) => {
    // console.log(e);
    // console.log(e.target);
   if (e.target.id === "orange") {
    body.style.backgroundColor = e.target.id
   }
   else if ( e.target.id === "white") {
    body.style.backgroundColor = e.target.id
   }
   else if ( e.target.id === "green") {
    body.style.backgroundColor = e.target.id
   }
   else {
    body.style.backgroundColor = e.target.id
   }


  })
})
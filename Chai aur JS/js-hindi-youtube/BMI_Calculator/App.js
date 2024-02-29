
const form = document.querySelector('form')
// console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();

   const Height = parseInt(document.querySelector("#Height").value);
   const Weight = parseInt(document.querySelector("#Weight").value);
   const Results = document.querySelector("#results");
 
   if (Height === ' ' || Height < 0 || isNaN(Height)){
     Results.innerHTML = `Please give the valid Height ${Height}`
   } else if (Weight === ' ' || Weight < 0 || isNaN(Weight)){
    Results.innerHTML = `Please give the valid Weight ${Weight}`
   } else {
    const bmi = (Weight/((Height*Height)/10000)).toFixed(2);
    //show the reults
    Results.innerHTML = `<span>${bmi}</span>`
    if (bmi <= 18.6) {
        guide.innerHTML = `You are underweight`
    } else if (bmi >= 24.9 ) {
        guide.innerHTML = `You are Overweight`
    } else {
        guide.innerHTML = `You are in Normal Range`
    }
   }

});
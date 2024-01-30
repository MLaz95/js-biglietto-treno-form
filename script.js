// take user info
const kmInput = document.querySelector("#distance");
const ageInput = document.querySelector("#age");
const buttonElement = document.querySelector("#submit");


// button click triggers the funcion
buttonElement.addEventListener('click',
    function(){
        // distance * 0.21 = price
        let price = kmInput.value * 0.21

        // if age < 18 then price - 20%
        if (ageInput.value < 18){
        price *= 1 - 0.2;
        console.log(price);
    
        // if age > 65 then price - 40%
        } else if (ageInput.value > 65){
        price *= 1 - 0.4;
        console.log(price);
        }

        // print info on screen
        document.getElementById("ticket-price").innerHTML = `Ticket Cost ${price.toFixed(2)}€.`;
    }
)


// checks if the user's inputs are numbers
// if(Number.isNaN(km) || Number.isNaN(age)){
//     document.getElementById("ticket-price").innerHTML = "Non posso calcolare il prezzo del tuo biglietto con questi parametri.<br>Ricarica la pagina per riprovare.";

// checks if the user's age is possible
// } else if (age > 120){
//     document.getElementById("ticket-price").innerHTML = "La tua età sembra errata, ricarica la pagina per riprovare.";

// } else {
    // let price = km * 0.21

    // if (age < 18){
    // price *= 1 - 0.2;
    // document.getElementById("discount").innerHTML = `Hai ricevuto lo sconto minorenni del 20%`;

    // } else if (age > 65){
    // price *= 1 - 0.4;
    // document.getElementById("discount").innerHTML = `Hai ricevuto lo sconto senior del 40%`;
    // }

//     document.getElementById("ticket-price").innerHTML = `Il prezzo del tuo biglietto è ${price.toFixed(2)}€.`;
// }
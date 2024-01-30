// take user info
const kmInput = document.querySelector("#distance");
const ageInput = document.querySelector("#age");
const buttonElement = document.querySelector("#confirm");
const qrElement = document.querySelector("#qr_box");
const priceElement = document.getElementById("ticket-price");
const ticketInfoElement = document.getElementById("ticket-info");
const discountElement = document.querySelector("#discount");


// button click triggers the funcion
buttonElement.addEventListener('click',
    function(){
        // hides info in case the form has been used before
        qrElement.className += " d-none";
        ticketInfoElement.innerHTML = "";
        discountElement.innerHTML = "";

        // checks that inputs are valid
        if(kmInput.value < 0 || ageInput.value < 0 || ageInput.value > 122){
            priceElement.innerHTML = `Cannot calculate fare with current information, please try again.`;       
        } else if(kmInput.value == null || kmInput.value == "" || ageInput.value == null || ageInput.value == ""){
            priceElement.innerHTML = `Please input all the required information`;

        // calculates ticket price 
        } else {
            // distance * 0.21 = price
            let price = kmInput.value * 0.21;
            // if age < 18 then price - 20%
            if (ageInput.value < 18){
            price *= 1 - 0.2;
            discountElement.innerHTML = `The Junior discount has been applied.`;
        
            // if age > 65 then price - 40%
            } else if (ageInput.value > 65){
            price *= 1 - 0.4;
            discountElement.innerHTML = `The Senior discount has been applied.`;
            }

            // print info on screen
            ticketInfoElement.innerHTML = `Seat XX, Carriage N`;
            priceElement.innerHTML = `Ticket Cost ${price.toFixed(2)}€.`;
            qrElement.classList.remove("d-none");
        }
    }
)
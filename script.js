// take user info
const kmInput = document.querySelector("#distance");
const ageInput = document.querySelector("#age");
const buttonElement = document.querySelector("#confirm");

// button click triggers the funcion
buttonElement.addEventListener('click',
    function(){
        // checks that inputs are valid
        if(kmInput.value < 0 || ageInput.value < 0 || ageInput.value > 122){
            document.getElementById("ticket-price").innerHTML = `Cannot calculate fare with current information, please try again.`;       
        } else if(kmInput.value == null || kmInput.value == "" || ageInput.value == null || ageInput.value == ""){
            document.getElementById("ticket-price").innerHTML = `Please input all the required information`;
            
        // calculates ticket price 
        } else {
                // distance * 0.21 = price
                let price = kmInput.value * 0.21;
                // if age < 18 then price - 20%
                if (ageInput.value < 18){
                price *= 1 - 0.2;
                document.querySelector("#discount").innerHTML = `The Junior discount has been applied.`;
            
                // if age > 65 then price - 40%
                } else if (ageInput.value > 65){
                price *= 1 - 0.4;
                document.querySelector("#discount").innerHTML = `The Senior discount has been applied.`;
                }

                // print info on screen
                document.getElementById("ticket-info").innerHTML = `Seat XX, Carriage N`;
                document.getElementById("ticket-price").innerHTML = `Ticket Cost ${price.toFixed(2)}€.`;
                document.querySelector("#qr_box").className += "d-block";
        }
    }
)
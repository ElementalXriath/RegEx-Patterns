/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/



const change = () => {
    let phone = document.getElementById("phone")
    let text = document.getElementById("text")

    let regPhone= /\d\d\d-\d\d\d-\d\d\d\d/

    phone.addEventListener('keyup', () => {
        if (regPhone.test(phone.value)) {
            phone.classList.remove("red");
            phone.classList.add("green");
            text.textContent = "Success"
        }
    })
   
}


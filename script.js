// To access input box
const inputBox = document.getElementById("result");
// To access buttons
const buttonsArray = document.getElementsByClassName("button");
// Define a string to calculate actual value
let string = "";

// To run a loop we need to convert the buttonsArray to an array
const arrButtons = Array.from(buttonsArray);

// Running a loop

arrButtons.forEach(button => {
    // Adding event listner to button
    // to add button values we need to create function
    button.addEventListener('click', function (e) {
        const value = e.target.innerHTML;
        if (value == "=") {
            string = eval(string);
        } else if (value == "AC") {
            string = "";
        } else if (value == "DEL") {
            string = string.substring(0, string.length - 1);
        }
        else {
            string += e.target.innerHTML;
        }
        inputBox.value = string;
    });

});
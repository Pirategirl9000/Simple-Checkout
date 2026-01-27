"use strict";

// define a function that gets an HTML element
function getElement(selector) { 
    return document.querySelector(selector);
}

// define a function that handles the click event of the Join button
function calculateButtonClick(event) {
    // get user entries from text boxes
    const customer_name = getElement("#receipt_form").value.trim();
    const grocery_item = getElement("#gorcery_item").value.trim();

    // Not constant since we need to parse it
    let unit_price = getElement("#unit_price").value.trim();
    let quantity = getElement("#quantity").value.trim();
    let cash = getElement("#cash").value.trim();
    
    // check user entries
    let invalid = false;
    if (customer_name === "") {
        getElement("#customer_name_error").textContent = "Required";
        invalid = true;
    } else { 
        getElement("#customer_name_error").textContent = "";
    }

    if (grocery_item === "") {
        getElement("#grocery_item_error").textContent = "Required";
        invalid = true;
    } else { 
        getElement("#grocery_item_error").textContent = "";
    }

    // First we check to see if it's an empty input before we parse it to a number
    // This is because an empty string parsed to a number becomes 0
    if (unit_price === "") {
        getElement("#unit_price_error").textContent = "Required";
        invalid = true;
    } else {
        unit_price = Number(unit_price);

        if (isNaN(unit_price)) {
            getElement("#unit_price_error").textContent = "Must be numeric";
            invalid = true;
        }

    }

    if (quantity === "") {
        getElement("#quantity_error").textContent = "Required";
        invalid = true;
    } else {
        quantity = Number(quantity);

        if (isNaN(quantity)) {
            getElement("#quantity_error").textContent = "Must be numeric";
        }
    }

    if (cash === "") {
        getElement("#cash_error").textContent = "Required";
        invalid = true;
    } else {
        cash = Number(cash);
        if (isNaN(cash)) {
            getElement("#cash_error").textContent = "Must be numeric";
        }
    }



    // cancel form submit if any user entries are invalid
    if (invalid) {
        event.preventDefault(); 
    }
};

// add code that's run when the web page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // specify the function that's run when the Join button is clicked
    getElement("#submit_button").addEventListener("click", joinButtonClick);
});
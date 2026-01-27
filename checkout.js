"use strict";

// define a function that gets an HTML element
function getElement(selector) { 
    return document.querySelector(selector);
}

// define a function that handles the click event of the Join button
function joinButtonClick(event) {
    // get user entries from text boxes
    const customer_name = getElement("#receipt_form").value;
    const grocery_item = getElement("#gorcery_item").value;
    const unit_price = getElement("#unit_price").value;
    const quantity = getElement("#quantity").value;
    const cash = getElement("#cash").value;
    
    // check user entries
    let invalid = false;
    if (email1 === "") {
        getElement("#email_1_error").textContent = "Email is required.";
        invalid = true;
    } else { 
        getElement("#email_1_error").textContent = "";
    }

    if (email1 !== email2) {
        getElement("#email_2_error").textContent = "Emails must match.";
        invalid = true;
    } else { 
        getElement("#email_2_error").textContent = ""; 
    }

    // cancel form submit if any user entries are invalid
    if (invalid) {
        event.preventDefault(); 
    }
};

// add code that's run when the web page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // specify the function that's run when the Join button is clicked
    getElement("#join_button").addEventListener("click", joinButtonClick);
});
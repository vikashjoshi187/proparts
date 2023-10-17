// const form = document.getElementById("signupform");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");

// form.addEventListener("submit", (e) => {
//     let valid = true;

//     if (!validateUsername(username.value)) {
//         valid = false;
//     }

//     if (!validateEmail(email.value)) {
//         valid = false;
//     }

//     if (!validatePassword(password.value)) {
//         valid = false;
//     }

//     if (!valid) {
//         e.preventDefault(); // Prevent form submission if validation fails
//         alert("Please fix the validation errors before submitting.");
//     }
//     else {
//         swal("Good job!", "product Add successfully!", "success");
//     }
// });

// function validateUsername(username) {
//     const namePattern = /^[A-Za-z\s]+$/;
//     const usernamewarning = document.getElementById("usernamewarning");

//     if (username.trim === "" || !namePattern.test(username)) {
//         usernamewarning.textContent = "*Username is not valid.";
//         usernamewarning.style.color = "red";
//         return false;
//     } else {
//         usernamewarning.textContent = "";
//         return true;
//     }
// }

// function validateEmail(email) {
//     const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     const emailwarning = document.getElementById("emailwarning");

//     if (!emailPattern.test(email)) {
//         emailwarning.textContent = "*Email address is not valid.";
//         emailwarning.style.color = "red";
//         return false;
//     } else {
//         emailwarning.textContent = "";
//         return true;
//     }
// }

// function validatePassword(password) {
//     // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//     const passwordwarning = document.getElementById("passwordwarning");

//     if (!passwordPattern.test(password)) {
//         passwordwarning.textContent = "Password must be at least 8 ";
//         passwordwarning.style.color = "red";
//         return false;
//     } else {
//         passwordwarning.textContent = "";
//         return true;
//     }
// }



// =====================================================


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupform");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");
    const gstNumber = document.getElementById("gst_number");
    const upiId = document.getElementById("upi_id");
    const panNumber = document.getElementById("pan_number");

    form.addEventListener("submit", (e) => {
       // e.preventDefault(); // Prevent automatic form submission

        let valid = true;

        if (!validateUsername(username.value)) {
            valid = false;
        }

        if (!validateEmail(email.value)) {
            valid = false;
        }

        if (!validatePassword(password.value)) {
            valid = false;
        }

        if (!validatePhone(phone.value)) {
            valid = false;
        }

        if (!validateGSTNumber(gstNumber.value)) {
            valid = false;
        }

        if (!validateUPIId(upiId.value)) {
            valid = false;
        }

        if (!validatePanNumber(panNumber.value)) {
            valid = false;
        }

        if (!valid) {
            //form.submit(); // Submit the form if all fields are valid
             e.preventDefault();
            // alert("Please fix the validation errors before submitting.");
        } else {
            swal("Good job!", "product Add successfully!", "success");
   
        }
    });

    function validateUsername(username) {
        const namePattern = /^[A-Za-z\s]+$/;
        const usernamewarning = document.getElementById("usernamewarning");

        if (username.trim === "" || !namePattern.test(username)) {
            usernamewarning.textContent = "Username is not valid.";
            return false;
        } else {
            usernamewarning.textContent = "";
            return true;
        }
    }

    function validateEmail(email) {
        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const emailwarning = document.getElementById("emailwarning");

        if (!emailPattern.test(email)) {
            emailwarning.textContent = "Email address is not valid.";
            return false;
        } else {
            emailwarning.textContent = "";
            return true;
        }
    }

    function validatePassword(password) {
    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const passwordwarning = document.getElementById("passwordwarning");

    if (!passwordPattern.test(password)) {
        passwordwarning.textContent = "Password must be at least 8 ";
        passwordwarning.style.color = "red";
        return false;
    } else {
        passwordwarning.textContent = "";
        return true;
    }
}

    // function validatePassword(password) {
    //     const passwordPattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}$/;
    //     const passwordwarning = document.getElementById("passwordwarning");

    //     if (!passwordPattern.test(password)) {
    //         passwordwarning.textContent = "Password must be at least 6 characters, including uppercase, lowercase, and a number.";
    //         return false;
    //     } else {
    //         passwordwarning.textContent = "";
    //         return true;
    //     }
    // }

    function validatePhone(phone) {
        const phonePattern = /^\d{10}$/; 
        const phonewarning = document.getElementById("phonewarning");

        if (!phonePattern.test(phone)) {
            phonewarning.textContent = "Phone number is not valid.";
            return false;
        } else {
            phonewarning.textContent = "";
            return true;
        }
    }

    function validateGSTNumber(gstNumber) {
         const gstPattern = /^[A-Z0-9]{15}$/;
        const gstdwarning = document.getElementById("gstdwarning");

        if (!gstPattern.test(gstNumber)) {
            gstdwarning.textContent = "GST Number is not valid.";
            return false;
        } else {
            gstdwarning.textContent = "";
            return true;
        }
    }

    function validateUPIId(upiId) {
        const upiPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
        const upiwarning = document.getElementById("upiwarning");

        if (!upiPattern.test(upiId)) {
            upiwarning.textContent = "UPI ID is not valid.";
            return false;
        } else {
            upiwarning.textContent = "";
            return true;
        }
    }

    function validatePanNumber(panNumber) {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const panwarning = document.getElementById("panwarning");

        if (!panPattern.test(panNumber)) {
            panwarning.textContent = "PAN Number is not valid.";
            return false;
        } else {
            panwarning.textContent = "";
            return true;
        }
    }
});
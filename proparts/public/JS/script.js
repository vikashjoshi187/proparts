// Sign up validation ===========================================================================================

function validation(event) {

  event.preventDefault();

  var signUpUser = document.getElementById("signUpUser");

  if (signUpUser.value.trim() == "") {
    signUpUser.placeholder ="Please Enter your name";
  } else {
    var reg = /^[A-Za-z\s]+$/;
    if (reg.test(signUpUser.value)){
       
    }else{
      signUpUser.placeholder="Name is wrong enter valid name";
    }
  }

  var signUpEmail = document.getElementById("signUpEmail");

  if (signUpEmail.value.trim() == "") {
    signUpEmail.placeholder = "Enter Email";
  } else {
    var reg = /^[[0-9a-zA-Z_]+@[a-z]+\.[a-z]{2,3}]+$/;
    if (reg.test(signUpEmail.value)){
      
    }
     else {
      signUpEmail.placeholder = "Email is not valid";
    }
  }
  
  var signUpPassword = document.getElementById("signUpPassword");

  if (signUpPassword.value.trim() == "") {
    signUpPassword.placeholder = "Enter Password";
    return false;
  } else {
    var reg =
      /^(?=.+?[0-9])(?=.+?[A-Z])(?=.+?[a-z])(?=.+?[~!@#$%^&*()_+]).{8}$/;
    if (reg.test(signUpPassword.value)){
      
      return true;
    } else {
      signUpPassword.placeholder = "Password is not valid";
    }
  }
}

// signIn validation ============================================================================================

function signInValidation(event){
  event.preventDefault();
  var signInEmail = document.getElementById("signInEmail");
  var signInPassword = document.getElementById("signInPassword");

  if(signInEmail.value.trim()==""){
     signInEmail.placeholder = "Enter Email";
  }else{
    var reg = /^[0-9a-zA-Z_]+@[a-z]+\.[a-z]{2,3}$/;
    if(reg.test(signInEmail.value)){

    }else{
      signInEmail.placeholder = "Wrong Email Enter Again";
    }
  }

  if(signInPassword.value.trim()==""){
    signInPassword.placeholder = "Enter Email";
 }else{
   var reg = /^(?=.+?[0-9])(?=.+?[A-Z])(?=.+?[a-z])(?=.+[!@#$%^&*()_+~]).{8}}$/;

   if(reg.test(signInPassword.value)){

   }else{
    signInPassword.placeholder = "Wrong Password Enter Again";
   }
 }
}

// shippingaddress validation ==================================================================================

function shippingValidation(event){
  event.preventDefault();
    var shippingName = document.getElementById("shippingName");
    var shippingPrice = document.getElementById("shippingPrice");
    var shippingMobile = document.getElementById("shippingMobile");
    var shippingPin = document.getElementById("shippingPin");
    var shippingAddress = document.getElementById("shippingAddress");
    
    if(shippingName.value.trim()==""){
      shippingName.placeholder = "Enter Name of product";
    }else{
      var reg = /^[A-Za-z\s]$/;

      if(reg.test(shippingName.value)){

      }else{
        shippingName.placeholder = "Wrong Name Enter Again";
      }
    }

    if(shippingPrice.value.trim()==""){
      shippingPrice.placeholder = "Enter Price of product";
    }else{
      var reg = /^[1-9][0-9]{6}$/;

      if(reg.test(shippingPrice.value)){

      }else{
        shippingPrice.placeholder = "Wrong price Enter Again";
      }
    }


    if(shippingMobile.value.trim()==""){
      shippingMobile.placeholder = "Enter Mobile number";
    }else{
      var reg = /^[67989][0-9]{9}$/;
      if(reg.test(shippingMobile.value)){

      }else{
        shippingMobile.placeholder = "Wrong Mobile Number Enter Again";
      }
    }

    if(shippingPin.value.trim()==""){
      shippingPin.placeholder = "Enter Pin Number";
    }else{
      var reg = /^[1-9]{6}$/;
      if(reg.test(shippingPin.value)){

      }else{
        shippingPin.placeholder = "Wrong Pin Number Enter Again";
      }
    }

    if(shippingAddress.value.trim()==""){
      shippingAddress.placeholder = "Enter Address";
    }else{
      var reg = /^[a-zA-Z0-9,/()\s'-]$/;
      if(reg.test(shippingAddress.value)){

      }else{
        shippingAddress.placeholder = "Wrong Address Enter Again";
      }
    }
    
    
}
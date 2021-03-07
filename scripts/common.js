console.log("sign up clicked");
// Get the modal
var signUpModal = document.getElementById("signUpModal");

// Get the button that opens the modal
var signUpBtn = document.getElementById("signUpButton");

// Get the button that opens the modal
var signUpBtnLink = document.getElementById("signUpButtonLink");

// Get the <span> element that closes the modal
var signUpSpanClose = document.getElementsByClassName("signUp-close")[0];

// When the user clicks on the button, open the modal
signUpBtn.onclick = function() {
  signUpModal.style.display = "block";
};

// When the user clicks on the button, open the modal
signUpBtnLink.onclick = function() {
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
signUpSpanClose.onclick = function() {
  signUpModal.style.display = "none";
};

// Get the modal
var signInModal = document.getElementById("signInModal");

// Get the button that opens the modal
var signInBtn = document.getElementById("signInButton");

// Get the <span> element that closes the modal
var signInSpanClose = document.getElementsByClassName("signIn-close")[0];

// When the user clicks on the button, open the modal
signInBtn.onclick = function() {
  signInModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
signInSpanClose.onclick = function() {
  signInModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }

  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
};


// Get the modal
var createPostModal = document.getElementById("createPostModal");

// Get the button that opens the modal
var createPostBtn = document.getElementById("createPostButton");

// Get the button that opens the modal
var createPostButtonLink = document.getElementById("createPostButton");

// Get the <span> element that closes the modal
var createPostSpanClose = document.getElementsByClassName(
  "createPost-close"
)[0];

// When the user clicks on the button, open the modal
createPostBtn.onclick = function() {
  createPostModal.style.display = "block";
};

// When the user clicks on the button, open the modal
createPostButtonLink.onclick = function() {
  createPostModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
createPostSpanClose.onclick = function() {
  createPostModal.style.display = "none";
};

function displayAllPosts() {
  window.location.href = "./html/postslist.html";
}

// Get the modal
var deletePostModal = document.getElementById("deletePostModal");

var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);

var selectedPost;
for (var i = 0; i < deleteIconsArray.length; i++) {
  console.log(
    "test" +
      deleteIconsArray[i].parentElement.parentElement.parentElement
        .parentElement
  );
  selectedPost =
    deleteIconsArray[i].parentElement.parentElement.parentElement.parentElement;


  var deletePostModalSpanClose = document.getElementsByClassName(
    "deleteModal-close"
  )[0];
}

function handleDelete(event) {
  console.log("Event data=" + event.closest(".post-card"));
  event.preventDefault();
  return false;
}

// When the user clicks on <span> (x), close the modal
deletePostModalSpanClose.onclick = function() {
  deletePostModal.style.display = "none";
};

var noButtonOnModal = document.getElementsByClassName("btn-danger")[0];

noButtonOnModal.onclick = function() {
  deletePostModal.style.display = "none";
  event.preventDefault();
  return false;
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
};

var selectedPostId;

function handleDelete(id) {
  console.log("value of id=" + id);
  deletePostModal.style.display = "block";
  selectedPostId = id;
}

function handleYesButton(){
    console.log('yes invoked='+selectedPostId);
    deletePostModal.style.display = "none";
    var postDiv = document.getElementById(selectedPostId);
    postDiv.style.display = "none";
    selectedPostId = undefined;
}

function loadPost(id){
    window.location.href = "./post.html";
}

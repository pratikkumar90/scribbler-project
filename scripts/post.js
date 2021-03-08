function editText() {
  var titleDiv = document.getElementsByClassName("title")[0];
  var titleContent = "UPDATED: " + titleDiv.innerHTML;
  titleDiv.innerHTML =
    '<input class="title-update-area" type="text" value="' +
    titleContent +
    '">';

  var contentDiv = document.getElementsByClassName("content")[0];
  var content = contentDiv.innerHTML;

  content = "UPDATED: " + content.replace(/(\r\n|\n|\r)/gm, "");
  content = content.replace(/\s+/g, ' ').trim();
  
  contentDiv.innerHTML =
    '<textarea class="content-text-area" rows="4" >' + content + "</textarea>";

  var editButton = document.getElementsByClassName("update-button")[0];

  editButton.innerHTML =
    '<button class="btn btn-danger saved btn-common" id="editPost" onclick="saveText()">Save <i class="fa fa-save"></i></button>';
}

function saveText() {
  var titleUpdateDiv = document.getElementsByClassName("title")[0];
  var titleUpdateArea = document.getElementsByClassName("title-update-area")[0];
  var titleValue = titleUpdateArea.getAttribute("value");
  titleUpdateDiv.innerHTML = titleValue;

  var contentDiv = document.getElementsByClassName("content")[0];
  var contentArea = document.getElementsByClassName("content-text-area")[0];
  contentDiv.innerHTML = contentArea.innerHTML;

  var saveButton = document.getElementsByClassName("update-button")[0];

  saveButton.innerHTML =
    '<button class="btn btn-danger saved btn-common" id="editPost" onclick="editText()">Edit <i class="fa fa-edit"></i></button>';
}

var likeCounter = 0;

function updateLike() {
  likeCounter++;
  var likesText = document.getElementsByClassName("likes-text")[0];
  likesText.innerHTML = likeCounter + " likes this!";

  var likeButton = document.getElementById("likeButton");
  likeButton.innerHTML = "Liked " + '<i class="fa fa-thumbs-up"></i>';
}

var commentArray = new Array();
function saveComment() {
  var commentArea = document.getElementById("commentArea");
  var comment = commentArea.value;
  commentArea.value = "";
  commentArray.push(comment);

  var commentArea = document.getElementsByClassName("all-comments")[0];

  var newCommentArea = "";
  for (var i = commentArray.length - 1; i >= 0; i--) {
    if (i != undefined) {
      newCommentArea +=
        '<p class="comment-section">' + commentArray[i] + "</p>";
    }
  }

  commentArea.innerHTML = newCommentArea;
  commentArea.className = "all-comments";
}

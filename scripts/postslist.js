// Search for the modals
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Search for the button to open modals
var signUpBtn  = document.getElementById("signUpBtn");
var signInBtn  = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

// Search the button to close modal
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

//Open the modal
openModal = modal => {
    modal.style.display = "block";
};

//Close the modal
closeModal = modal => {
    modal.style.display = "none";
};

// Event to handle the click on Signin/signup buttons
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

// Event to handle close button
closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

// Event to handle the click on outer area which closes the modal
window.addEventListener("click", function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
});


//Handling the link inside the sign in modal
signUpLink.onclick = function() {
  closeModal(signInModal);
  openModal(signUpModal);
};

// Search the modals and obtain the reference here
var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

// Search for the delete icons that opened the modal
var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);

// Delete the seleted post
var selectedPost;
openDeletePostModal = (deletePostModal, clickedIcon) => {
  selectedPost = "";
  openModal(deletePostModal);
  selectedPost = clickedIcon.closest(".post");
};

deletePost = () => {
  selectedPost.remove();
  closeModal(deletePostModal);
};

// Event handlers
deleteIconsArray.map(deleteIcon => {
    deleteIcon.addEventListener("click", e =>
      openDeletePostModal(deletePostModal, e.target)
    );
});

window.addEventListener("click", function(event) {
    if (event.target == deletePostModal) {
      deletePostModal.style.display = "none";
    }
});

cancelDelete.addEventListener("click", () => closeModal(deletePostModal));
confirmDelete.addEventListener("click", () => deletePost());

// Search the dots
var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);

dotsArray.map(dot => {
    dot.addEventListener("click", e => navigateToPost(e.target));
});

navigateToPost = postThread => {
    var post = postThread.closest(".post");
    var author = post.querySelector(".username p").textContent.trim();
    var postTitle = post.querySelector(".title p").textContent.trim();
    var postContent = post.querySelector(".content").textContent.trim();
    
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("postTitle", postTitle);
    sessionStorage.setItem("postContent", postContent);
    window.location.href = "../html/post.html";
};
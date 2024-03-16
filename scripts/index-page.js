// testing console below
console.log("hello");

// comment box code
const commentForm = document.getElementById("commentForm");
const dynamicContent = document.getElementById("dynamicContent");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.nameInput.value;
  const newComment = event.target.commentInput.value;
  const listElement = document.createElement("li");
  listElement.innerText = userName;
  dynamicContent.appendChild(listElement);
});

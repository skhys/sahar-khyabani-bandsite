const commentForm = document.getElementById("commentForm");
const dynamicContent = document.getElementById("dynamicContent");
console.log(form);

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const commentInputVal = event.target.commentInput.value;
  const listElement = document.createElement("li");
  listElement.innerText = commentInputVal;
  dynamicContent.appendChild(listElement);
});

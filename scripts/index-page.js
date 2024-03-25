import { saharBandSite } from "./band-site-api.js";

const commentsContainer = document.querySelector(".comment");

function displayComment(comment) {
  const groupElement = document.createElement("div");
  groupElement.classList.add("comment__group");

  const avatarElement = document.createElement("div");
  avatarElement.classList.add("avatar");
  const avatarImg = document.createElement("img");
  if (comment.avatar) {
    avatarImg.src = comment.avatar;
  } else {
    avatarImg.classList.add("default-avatar");
  }
  avatarElement.appendChild(avatarImg);
  groupElement.appendChild(avatarElement);

  const detailContainer = document.createElement("div");
  detailContainer.classList.add("comment__detail");

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("comment__info");

  const nameElement = document.createElement("p");
  nameElement.classList.add("comment__name");
  nameElement.textContent = comment.name;
  infoContainer.appendChild(nameElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("comment__date");
  dateElement.textContent = new Date(comment.timestamp).toLocaleDateString();
  infoContainer.appendChild(dateElement);
  detailContainer.appendChild(infoContainer);

  const textElement = document.createElement("p");
  textElement.classList.add("comment__text");
  textElement.textContent = comment.comment;
  detailContainer.appendChild(textElement);

  groupElement.appendChild(detailContainer);

  commentsContainer.appendChild(groupElement);
}

async function displayComments() {
  const comments = await saharBandSite.getComments();
  commentsContainer.innerHTML = "";
  comments.forEach((comment) => {
    displayComment(comment);
  });
}

const commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const userName = document.getElementById("nameInput").value;
  const newComment = document.getElementById("commentInput").value;
  const submittedComment = { name: userName, comment: newComment };
  await saharBandSite.postComment(submittedComment);
  displayComments();
  event.target.reset();
});

displayComments();

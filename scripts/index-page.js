import { saharBandSite } from "./band-site-api.js";

const comments = await saharBandSite.getComments();

// const comments = [
//   {
//     name: "Victor Pinto",
//     date: "11/02/2023",
//     text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Christina Cabrera",
//     date: "10/28/2023",
//     text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Isaac Tadesse",
//     date: "10/20/2023",
//     text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

const commentsContainer = document.querySelector(".comment");
console.log(commentsContainer);

function displayComment(comment) {
  const groupElement = document.createElement("div");
  groupElement.classList.add("comment__group");

  const nameElement = document.createElement("p");
  nameElement.classList.add("comment__name");
  nameElement.textContent = comment.name;
  commentsContainer.appendChild(nameElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("comment__date");
  dateElement.textContent = comment.timestamp;
  commentsContainer.appendChild(dateElement);

  const textElement = document.createElement("p");
  textElement.classList.add("comment__text");
  textElement.textContent = comment.text;
  commentsContainer.appendChild(textElement);

  commentsContainer.appendChild(groupElement);
}

function displayComments() {
  // commentsContainer.innerHTML = "";

  comments.forEach((comment) => {
    displayComment(comment);
  });
  // for (let i = 0; i < comments.length; i++) {
  //   displayComments(comments[i]);
  // }
}

displayComments();
// function displayName() {
//   // commentsContainer.innerHTML = "";

//   userName.forEach((name) => {
//     displayName(name);
//   });
//   // for (let i = 0; i < comments.length; i++) {
//   //   displayComments(comments[i]);
//   // }
// }

// const commentElement = (item) => {
// const commentElement = document.createElement('div');
// commentElement.classList.add('comment__title');
// const commentName
// }

// test comment box code
// const commentForm = document.getElementById("commentForm");
// const dynamicContent = document.getElementById("dynamicContent");

// commentForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const userName = event.target.nameInput.value;
//   const newComment = event.target.commentInput.value;
//   const listElement = document.createElement("li");
//   listElement.innerText = userName;
//   listElement.innerText = newComment;
//   dynamicContent.appendChild(listElement);
// });

const commentForm = document.getElementById("commentForm");
const dynamicContent = document.getElementById("dynamicContent");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = document.getElementById("nameInput").value;
  const newComment = document.getElementById("commentInput").value;
  const listItem = document.createElement("li");
  listItem.innerText = userName + ": " + newComment;
  dynamicContent.appendChild(listItem);
});

// import { BandSiteApi } from "./band-site-api.js";
import { saharBandSite } from "./band-site-api.js";

document.addEventListener("DOMContentLoaded", async function () {
  const apiKey = "572fcc84-b65f-40d3-a206-084391a44203";
  const bandSiteApi = new BandSiteApi(apiKey);

  const appendComment = (commentsList, comment) => {
    const listItem = document.createElement("li");
    listItem.classList.add("comment");

    // const avatarDiv = document.createElement("div");
    // avatarDiv.classList.add("avatar");
    // const avatarImg = document.createElement("img");
    // avatarImg.src = comment.avatar || '../assets.jpg';
    // avatarImg.alt = "Avatar";
    // avatarDiv.appendChild(avatarImg);
    // listItem.appendChild(avatarDiv);

    const commentContentDiv = document.createElement("div");
    commentContentDiv.classList.add("comment-content");
    const commentText = document.createElement("p");
    commentText.textContent = comment.text;
    commentContentDiv.appendChild(commentText);
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent = new Date(comment.date).toLocaleString();
    commentContentDiv.appendChild(dateSpan);
    listItem.appendChild(commentContentDiv);

    commentsList.appendChild(listItem);
  };

  const displayComments = async () => {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";

    const comments = await bandSiteApi.getComments();

    comments.forEach((comment) => {
      appendComment(commentsList, comment);
    });
  };

  displayComments();

  const commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText) {
      const newComment = {
        text: commentText,
        // avatar: ".img"
      };

      await bandSiteApi.postComment(newComment);

      commentInput.value = "";

      displayComments();
    }
  });
});

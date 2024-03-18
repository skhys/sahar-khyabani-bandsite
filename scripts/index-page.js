// testing console below
console.log("hello");

const comments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentsContainer = document.querySelector(".comment");
console.log(commentsContainer);

function displayComment(comment) {
  const nameElement = document.createElement("p");
  nameElement.classList.add("comment__name");
  nameElement.textContent = comment.name;
  commentsContainer.appendChild(nameElement);

  const dateElement = document.createElement("p");
  dateElement.classList.add("comment__date");
  dateElement.textContent = comment.date;
  commentsContainer.appendChild(dateElement);

  const textElement = document.createElement("p");
  textElement.classList.add("comment__text");
  textElement.textContent = comment.text;
  commentsContainer.appendChild(textElement);
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

// comment box code
const commentForm = document.getElementById("commentForm");
const dynamicContent = document.getElementById("dynamicContent");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.nameInput.value;
  const newComment = event.target.commentInput.value;
  const listElement = document.createElement("li");
  listElement.innerText = userName;
  listElement.innerText = newComment;
  dynamicContent.appendChild(listElement);
});

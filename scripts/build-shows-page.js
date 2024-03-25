import { saharBandSite } from "./band-site-api.js";

const shows = await saharBandSite.getShows();

const showsContainer = document.querySelector(".show__list");
console.log(showsContainer);

function displayShow(show) {
  const showElement = document.createElement("div");
  showElement.classList.add("show");

  const dateElement = document.createElement("p");
  dateElement.classList.add("show__dateheader");
  dateElement.textContent = "DATE";
  showElement.appendChild(dateElement);

  const dateTextElement = document.createElement("p");
  dateTextElement.classList.add("show__date");
  const date = new Date(show.date);
  dateTextElement.textContent = date.toDateString();
  showElement.appendChild(dateTextElement);

  const venueElement = document.createElement("p");
  venueElement.classList.add("show__venueheader");
  venueElement.textContent = "VENUE";
  showElement.appendChild(venueElement);

  const venueTextElement = document.createElement("p");
  venueTextElement.classList.add("show__venue");
  venueTextElement.textContent = show.place;
  showElement.appendChild(venueTextElement);

  const locationElement = document.createElement("p");
  locationElement.classList.add("show__locationheader");
  locationElement.textContent = "LOCATION";
  showElement.appendChild(locationElement);

  const locationTextElement = document.createElement("p");
  locationTextElement.classList.add("show__location");
  locationTextElement.textContent = show.location;
  showElement.appendChild(locationTextElement);

  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("type", "submit");
  buttonElement.textContent = "BUY TICKETS";
  showElement.appendChild(buttonElement);

  showsContainer.appendChild(showElement);
}

function displayShows() {
  for (let i = 0; i < shows.length; i++) {
    displayShow(shows[i]);
  }
}

displayShows();

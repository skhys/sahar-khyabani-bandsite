const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

/* <main class="show">
<h2 class="show__title">Shows</h2>
<div class="show__list">
  <!-- <p class="show__subtitle">DATE</p>
  <p class="show__subtitle">VENUE</p>
  <p class="show__subtitle">LOCATION</p> -->
</div>
<!-- append js here -->
<!-- <span class="show__dateheader">DATE</span>
<p class="show__date">Mon Sept 09 2024</p>
<span class="show__venueheader">VENUE</span>
<p class="show__venue">Ronald Lane</p>
<span class="show__locationheader">LOCATION</span>
<p class="show__location">San Francisco, CA</p>
<button type="submit">BUY TICKETS</button> -->
</main> */

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
  dateTextElement.textContent = show.date;
  showElement.appendChild(dateTextElement);

  const venueElement = document.createElement("p");
  venueElement.classList.add("show__venueheader");
  venueElement.textContent = "VENUE";
  showElement.appendChild(venueElement);

  const venueTextElement = document.createElement("p");
  venueTextElement.classList.add("show__venue");
  venueTextElement.textContent = show.venue;
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
  buttonElement.textContent = show.button;
  showElement.appendChild(buttonElement);

  showsContainer.appendChild(showElement);
}

function displayShows() {
  for (let i = 0; i < shows.length; i++) {
    displayShow(shows[i]);
  }
  //   showsContainer.innerHTML = "";

  //   shows.forEach((show) => {
  //     displayShow(show);
  //   });
}

// console.log(shows[0]);

displayShows();
// shows.push({});

// displayShows();

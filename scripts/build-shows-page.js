const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const showContainer = document.querySelector(".show");
console.log(showsContainer);

function displayShow(show) {
  const showElement = document.createElement("div");
  showElement.classList.add("show__list");

  const dateElement = document.createElement("p");
  dateElement.classList.add("show__date");
  dateElement.textContent = show.date;
  show.appendChild(dateElement);

  const venueElement = document.createElement("h5");
  venueElement.classList.add("show__venue");
  venueElement.textContent = show.venue;
  venueElement.appendChild(venueElement);

  const locationElement = document.createElement("h5");
  locationElement.classList.add("show__location");
  locationElement.textContent = show.location;
  locationElement.appendChild(locationElement);

  showContainer.appendChild(showElement);
}

function displayShows() {
  showContainer.innerHTML = "";

  shows.forEach((show) => {
    displayShow(show);
  });
}

// displayShows();
// shows.push({
// })

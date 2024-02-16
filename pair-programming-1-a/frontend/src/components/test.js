// app.js

const apiUrl = 'http://localhost:4000/api/tours';

const tour = {
    image: "./images/tour-2.jpeg",
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 5100
};

const addTour = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(tour),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  console.log('New Tour added:', json);
};

// Example Usage
addTour();
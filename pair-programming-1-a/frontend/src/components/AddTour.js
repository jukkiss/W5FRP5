import React, { useState } from 'react';

function AddTour({ onAddTour }) {
  // Update state hooks to match newTour properties
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [cost, setCost] = useState('');
  const apiUrl = 'http://localhost:4000/api/tours';

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !info || !location || !duration || !cost) {
      alert('Please fill out all fields');
      return;
    }

    const newTour = {
      image: "./images/tour-2.jpeg",
      date: "august 26th, 2020",
      title,
      info,
      location,
      duration: parseInt(duration),
      cost: parseFloat(cost)
    };

    const addTour = async () => {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTour),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      console.log('New Tour added:', json);
    };

    // Example Usage
    addTour();

    // Clear form fields after submission
    setTitle('');
    setInfo('');
    setLocation('');
    setDuration('');
    setCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="title">Tour Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="info">Tour Info</label>
        <textarea
          id="info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="duration">Duration (days)</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="cost">Cost ($)</label>
        <input
          type="text"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Tour</button>
    </form>
  );
}

export default AddTour;

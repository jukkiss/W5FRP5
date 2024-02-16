import React, { useState } from 'react';

function AddTour({ onAddTour }) {
  // State to hold form inputs
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !info || !price) {
      alert('Please fill out all fields');
      return;
    }

    // Calling the onAddTour function passed as a prop, which should handle the actual data submission
    onAddTour({ name, info, price });

    // Clear form fields after submission
    setName('');
    setInfo('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Tour Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Tour</button>
    </form>
  );
}

export default AddTour;

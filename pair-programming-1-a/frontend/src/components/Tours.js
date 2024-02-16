import Tour from "./Tour";
import Title from "./Title";
import { useState, useEffect } from "react";
import AddTour from "./AddTour";




function Tours() {
  const [toursData, setToursData] = useState([]);
  const apiUrl = "http://localhost:4000/tours";
  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setToursData(data))
      .catch(error => console.error("Error fetching tours:", error));
  }, []);

  const handleDeleteItem = (itemId) => {
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} handleDelete={handleDeleteItem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
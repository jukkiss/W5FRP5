import { useState } from "react";
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);

  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;

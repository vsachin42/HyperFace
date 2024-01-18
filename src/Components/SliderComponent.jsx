import React, { useState } from 'react';
import '../SliderComponent.css'; // Import your custom styles

const SliderComponent = () => {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {data.map((item, index) => (
          <div
            key={index}
            className={`card ${index >= currentIndex && index < currentIndex + 2 ? 'active' : ''}`}
          >
            {/* Your card content */}
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="arrow-button prev">&#8249;</button>
      <button onClick={nextSlide} className="arrow-button next">&#8250;</button>
    </div>
  );
};

export default SliderComponent;

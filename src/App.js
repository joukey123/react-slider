import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prev) => (prev >= data.length - 1 ? (prev = 0) : prev + 1));
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {data.map((item, itemIndex) => {
          const { id, image, name, title, quote } = item;
          let className = "nextSlide";
          if (index === itemIndex) {
            className = "activeSlide";
          }
          if (
            index === itemIndex - 1 ||
            (index === 0 && itemIndex === data.length - 1)
          ) {
            className = "lastSlide";
          }
          return (
            <article key={id} className={className}>
              <img src={image} alt={name} className="person-img " />
              <h4>
                {name}
                {id}
              </h4>
              <p className="title">{title}</p>
              <p className="text"> {quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() =>
            setIndex((prev) =>
              prev <= 0 ? (prev = data.length - 1) : prev - 1
            )
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() =>
            setIndex((prev) =>
              prev >= data.length - 1 ? (prev = 0) : prev + 1
            )
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

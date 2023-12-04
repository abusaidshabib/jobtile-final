import { useEffect, useState } from "react";
import "../../../CSS/HeroSection.css";
import { Link } from "react-router-dom";

// grid 2xl:grid-cols-2 lg:grid-cols-1 2xl:gap-32 gap-16 place-items-center

const HeroSection = () => {
  const heroData = [
    {
      _id: "6403614491eaa00db9e4fc70",
      title: "Expertly Curated",
      paragraph:
        "Our designers create customized interiors to suit your unique style.",
      class: "slide2 slider",
    },
    {
      _id: "6403614491eaa00db9e4fc71",
      title: "Innovative Design Solutions",
      paragraph: "Discover fresh, creative ideas to elevate your living space.",
      class: "slide3 slider",
    },
    {
      _id: "6403614491eaa00db9e4fc6f",
      title: "Design Your Dream",
      paragraph: "Let us transform your space into a stylish sanctuary.",
      class: "slide1 slider",
    },
    {
      _id: "6403614491eaa00db9e4fc72",
      title: "Luxury Redefined",
      paragraph:
        "Experience the ultimate in elegance and sophistication with our design expertise.",
      class: "slide4 slider",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <div className="carousel text-main-v3">
      {heroData.slice(0, 3).map((obj, index) => {
        return (
          <div
            key={obj._id}
            className={`${obj.class} ${
              slideIndex === index + 1 ? "active" : ""
            }`}
          >
            <div className="px-40">
              <h1 className="text-center text-7xl tracking-wider font-bold font-neural">
                {obj.title}
              </h1>
              <p className="text-xl text-main-v3 py-4">{obj.paragraph}</p>
              <Link
                className="py-3 px-5 border rounded bg-main-v1 text-main-v3 font-semibold"
                to="/"
              >
                Shop now
              </Link>
            </div>
          </div>
        );
      })}

      <div className="navigation">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "btn active" : "btn"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

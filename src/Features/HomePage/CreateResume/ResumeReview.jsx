import { useCallback, useEffect, useState } from "react";

const ResumeReview = () => {
  const testimonials = [
    {
      id: 1,
      company: "Fardin Sarker",
      testimonial:
        "Our team has greatly benefited from this software. It has streamlined our project management and improved collaboration.",
    },
    {
      id: 2,
      company: "SM Shawon",
      testimonial:
        "I highly recommend this software to any organization. It has helped us save time and resources in managing our remote team.",
    },
    {
      id: 3,
      company: "Shishir Islam",
      testimonial:
        "This software has made it easy to track our team's progress and ensure that all tasks are completed on time.",
    },
    {
      id: 4,
      company: "Md Mamun",
      testimonial:
        "Our HR department loves this software for employee performance evaluation and tracking. It's a game-changer!",
    },
    {
      id: 5,
      company: "Moon Sarkar",
      testimonial:
        "We've seen a significant improvement in project efficiency since implementing this software. It's a must-have for any project manager.",
    },
    {
      id: 6,
      company: "Imran Mondol",
      testimonial:
        "OptiServe relies on this software to manage our distributed teams. It has enhanced our productivity and team coordination.",
    },
    {
      id: 7,
      company: "Md T Abir",
      testimonial:
        "As a developer, I appreciate the tools provided by this software. It simplifies task assignment and tracking.",
    },
    {
      id: 8,
      company: "Zakir Khan",
      testimonial:
        "Our projects have become more agile and transparent thanks to this software. It's a lifesaver for our team.",
    },
    {
      id: 9,
      company: "Mehedi Hasan",
      testimonial:
        "Our marketing team has seen improved results in campaigns and lead tracking using this software.",
    },
    {
      id: 10,
      company: "Shujoy Das",
      testimonial:
        "This software has empowered our support team to provide prompt and efficient service to our customers.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to switch to the next image
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextIndex = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  });

  // Function to switch to the previous image
  const prevIndex = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    // Automatically switch to the next image every 2 seconds
    const interval = setInterval(nextIndex, 2000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(interval);
    };
  }, [currentIndex, nextIndex]);

  return (
    <div className="2xl:p-36 lg:p-24 md:p-16 p-8 flex flex-col items-center w-full relative">
      <p className="text-5xl font-young text-center w-3/5">
        Reviewed by the community. Trusted by professionals
      </p>
      <div className="min-h-full min-w-full overflow-hidden relative p-8 grid items-center">
        <div className="flex flex-col items-center">
          <p className="xl:text-3xl lg:text-2xl text-xl text-center font-urbanist font-medium">
            Helps us to improving productivity
          </p>
          <p className="xl:text-xl lg:text-lg text-xl text-center font-urbanist py-5">
            {testimonials[currentIndex]?.testimonial}
          </p>
          <p className="font-urbanist text-lg font-medium capitalize">
            -{testimonials[currentIndex]?.company}
          </p>
        </div>
      </div>
      <button className="prev-button" onClick={prevIndex}>
        &lt;
      </button>
      <button className="next-button" onClick={nextIndex}>
        &gt;
      </button>
    </div>
  );
};

export default ResumeReview;

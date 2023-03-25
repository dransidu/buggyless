import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const data = [
    {
      url: "/testimonials/face1.jpg",
      title: "amazing experience! Thank you Ushan!",
      description:
        "I am really satisfied with my web development. The best on the net! I like web development more and more each day because it makes my life a lot easier.",
      name: "Winthrop D",
    },
    {
      url: "/testimonials/face2.jpg",
      title: "Greate Experienced!",
      description:
        "I am so pleased with this product. I made back the purchase price in just 48 hours! Web development has really helped our business.",
      name: "Mariette N ",
    },
    {
      url: "/testimonials/face3.jpg",
      title: "amazing experience! Thank you Ushan!",
      description:
        "Thanks to web development, we've just launched our 5th website! Web development is great. It's exactly what I've been looking for. The very best.",
      name: "Orin L",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 5000;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const activeDot = (slidesIndex) => {
    let classes = "mx-1 rounded-full p-1.5 ease-in duration-300 ";
    return (classes +=
      currentIndex == slidesIndex
        ? "w-[25px] h-[5px] bg-secondary dark:bg-primary"
        : "w-[5px] h-[5px] bg-gray-100");
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);
  return (
    <div
      className="bg-primary dark:bg-secondary from-[#9fbfff] to-white"
      id="testimonails"
    >
      <div className=" max-w-5xl flex flex-col items-center mx-auto  py-16">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white dark:text-secondary-100 text-center">
          Testimonials
        </h2>
        {/* Testimonial Card */}
        <div className="w-[90vw] md:w-full h-full  md:h-[500px] bg-center bg-cover duration-500 bg-white  flex flex-row items-center justify-between text-center  rounded-lg m-10 shadow-xl ">
          {/* Left Arrow */}
          <div className="text-2xl rounded-lg p-2 bg-secondary dark:bg-primary text-white cursor-pointer -ml-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              onClick={prevSlide}
              size={30}
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="flex flex-col items-center p-5 md:p-20 space-y-5">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/testimonials/quoate2.png"}
                width={80}
                height={80}
                alt="quoat"
              />
              <h2 className="text-xl text-[#323232] font-bold ">{`${data[currentIndex].title}`}</h2>
            </div>
            <p className="text-[#656565]">{`${data[currentIndex].description}`}</p>
            <div className="flex">
              <Image
                src={"/testimonials/star.png"}
                alt="star"
                width={20}
                height={20}
              />
              <Image
                src={"/testimonials/star.png"}
                alt="star"
                width={20}
                height={20}
              />
              <Image
                src={"/testimonials/star.png"}
                alt="star"
                width={20}
                height={20}
              />
              <Image
                src={"/testimonials/star.png"}
                alt="star"
                width={20}
                height={20}
              />
              <Image
                src={"/testimonials/star.png"}
                alt="star"
                width={20}
                height={20}
              />
            </div>
            <div>
              <Image
                className="rounded-full w-16 h-16"
                src={`${data[currentIndex].url}`}
                width={50}
                height={50}
                alt={`${data[currentIndex].url}`}
              />
              <p className="text-[#6C6C6C] font-bold">{`${data[currentIndex].name}`}</p>
            </div>
          </div>
          {/* Right Arrow */}
          <div className="text-2xl rounded-lg p-2 bg-secondary dark:bg-primary text-white cursor-pointer -mr-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              onClick={nextSlide}
              size={30}
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex w-full m-auto  justify-center py-2 ">
          {data.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <div className={activeDot(slideIndex)}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

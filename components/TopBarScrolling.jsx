"use client";

import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function TopBarScrolling({ apiKey }) {
  const [data, setData] = useState([]);

  // Updated slide objects with unique ids or you can use index as key below.
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/LdQh8w7r/image.png",
      name: "Juice DAO",
      mcValue: "667M",
      percentage: "(+72%)",
    },
    {
      id: 2,
      img: "https://i.ibb.co/PGWG7ftp/image-1.png",
      name: "Retardio",
      mcValue: "130M",
      percentage: "(+59%)",
    },
    {
      id: 3,
      img: "https://i.ibb.co/xqmjXVrd/image-2.png",
      name: "Poopy guys",
      mcValue: "53M",
      percentage: "(+45%)",
    },
    {
      id: 4,
      img: "https://i.ibb.co/hRfbQm0S/image-3.png",
      name: "Ape",
      mcValue: "29M",
      percentage: "(+38%)",
    },
    {
      id: 5,
      img: "https://i.ibb.co/5hWHFvjz/image-4.png",
      name: "high eye order",
      mcValue: "13M",
      percentage: "(+22%)",
    },
    {
      id: 6,
      img: "https://i.ibb.co/LdQh8w7r/image.png",
      name: "Juice DAO",
      mcValue: "667M",
      percentage: "(+72%)",
    },
    {
      id: 7,
      img: "https://i.ibb.co/PGWG7ftp/image-1.png",
      name: "Retardio",
      mcValue: "130M",
      percentage: "(+59%)",
    },
    {
      id: 8,
      img: "https://i.ibb.co/xqmjXVrd/image-2.png",
      name: "Poopy guys",
      mcValue: "53M",
      percentage: "(+45%)",
    },
    {
      id: 9,
      img: "https://i.ibb.co/hRfbQm0S/image-3.png",
      name: "Ape",
      mcValue: "29M",
      percentage: "(+38%)",
    },
    {
      id: 10,
      img: "https://i.ibb.co/5hWHFvjz/image-4.png",
      name: "high eye order",
      mcValue: "13M",
      percentage: "(+22%)",
    },
  ];

  const settings = {
    arrows: true,
    dots: false, // Use dots if you want pagination

    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,

    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true, // enable dots on smaller screens if needed
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-5">
      {slides.map((item, index) => (
        // Using index as key to ensure uniqueness if the id values repeat.
        <div key={index}>
          <div className="flex gap-[15px]  font-semibold items-center ">
            <span className="text-[#ffde30] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] text-[14px]">
              #{item.id}
            </span>
            <img src={item.img} alt="" className="w-[25px] h-[25px]" />
            <span className="text-white 2xl:text-[14px] xl:text-[14px] lg:text-[14px] text-[14px]">
              {item.name}
            </span>
            <h4 className="text-white 2xl:text-[14px] xl:text-[14px] lg:text-[14px] text-[14px] font-bold">
              <span className="font-bold text-[#ffde30 ]">MCAP</span>
              {item.mcValue}
            </h4>
            <span className="text-[#64FF4A] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] text-[14px]">
              {item.percentage}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TopBarScrolling;

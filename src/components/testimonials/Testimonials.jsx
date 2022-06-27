import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eveniet voluptates laudantium dolorem nam exercitationem animi recusandae placeat! Nobis, consectetur! Modi quidem odit rerum ad consequatur maiores sapiente officiis eveniet!",
  },
  {
    avatar: AVTR2,
    name: "Henri Dieie",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eveniet voluptates laudantium dolorem nam exercitationem animi recusandae placeat! Nobis, consectetur! Modi quidem odit rerum ad consequatur maiores sapiente officiis eveniet!",
  },
  {
    avatar: AVTR3,
    name: "Dwayne Johnson",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eveniet voluptates laudantium dolorem nam exercitationem animi recusandae placeat! Nobis, consectetur! Modi quidem odit rerum ad consequatur maiores sapiente officiis eveniet!",
  },
  {
    avatar: AVTR4,
    name: "Rodriguez Ryane",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eveniet voluptates laudantium dolorem nam exercitationem animi recusandae placeat! Nobis, consectetur! Modi quidem odit rerum ad consequatur maiores sapiente officiis eveniet!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonaials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

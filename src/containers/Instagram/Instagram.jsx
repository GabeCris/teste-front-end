import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../components/Carousel/Carousel";
import data from "../../data/carousel_instagram";
import "./instagram.scss";

const Instagram = () => {
    return (
        <section className="instagram-container">
            <div className="title-follow container">
                <h2 className="title-section">Instagram</h2>
                <a href="" className="link">
                    +Seguir
                </a>
            </div>

            <Carousel amount={6} auto={true}>
                {data.map((item) => (
                    <SwiperSlide>
                        <img src={item.path} alt={item.alt} />
                    </SwiperSlide>
                ))}
                {data.map((item) => (
                    <SwiperSlide>
                        <img src={item.path} alt={item.alt} />
                    </SwiperSlide>
                ))}
            </Carousel>
        </section>
    );
};

export default Instagram;

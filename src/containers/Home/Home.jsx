import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import data from "../../data/carrossel_home";
import { useEffect } from "react";

const Home = () => {
    return (
        <section className="home">
            <Header></Header>
            <Hero></Hero>
            <Carousel amount={1} auto={true}>
                {data.map((item) => (
                    <SwiperSlide>
                        <img className="swiper-img" src={item.path} alt="" />
                    </SwiperSlide>
                ))}
            </Carousel>
            <img
                className="icon-down"
                src="./assets/icons/icon-down.svg"
                alt=""
            />
        </section>
    );
};

export default Home;

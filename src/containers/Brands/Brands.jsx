import React from "react";
import Brand from "../../components/Brand/Brand";
import data from "../../data/carrossel_brands";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../components/Carousel/Carousel";
import "./brands.scss";

const Brands = () => {
    return (
        <section className="brands-container container">
            <div className="row">
                <h2 className="title-section">Principais marcas</h2>
                <a className="link">Ver todos</a>
            </div>
            {
                <Carousel amount={6} auto={false}>
                    {data.map((item) => (
                        <SwiperSlide>
                            <Brand src={item.path} alt={item.alt}></Brand>
                        </SwiperSlide>
                    ))}
                    {data.map((item) => (
                        <SwiperSlide>
                            <Brand src={item.path} alt={item.alt}></Brand>
                        </SwiperSlide>
                    ))}
                </Carousel>
            }
        </section>
    );
};

export default Brands;

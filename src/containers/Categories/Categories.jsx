import React from "react";
import "./categories.scss";
import Carousel from "../../components/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import data from "../../data/carrossel_category";
import Text from "../../components/Text/Text";

const Categories = () => {
    return (
        <section className="categories-container container">
            <h2 className="title-section">Categorias</h2>
            <Carousel amount={4} auto={false}>
                {data.map((item) => (
                    <SwiperSlide>
                        <img className="swiper-img" src={item.path} alt={item.alt} />
                        <Text text={item.text}></Text>
                    </SwiperSlide>
                ))}
            </Carousel>
        </section>
    );
};

export default Categories;

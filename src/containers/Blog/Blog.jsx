import React from "react";
import CardBlog from "../../components/CardBlog/CardBlog";
import Carousel from "../../components/Carousel/Carousel";
import "./blog.scss";
import { SwiperSlide } from "swiper/react";
import data from "../../data/carousel_blog";

const Blog = () => {
    return (
        <section className="blog-container container">
            <h2 className="title-section">Confira o nosso blog</h2>
            <Carousel amount={4} auto={false}>
                {data.map((item) => (
                    <SwiperSlide>
                        <CardBlog path={item.path} alt={item.alt}></CardBlog>
                    </SwiperSlide>
                ))}
            </Carousel>
        </section>
    );
};

export default Blog;

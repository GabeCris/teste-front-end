import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import Text from "../../components/Text/Text";
import "./showcase.scss";
import data from "../../data/carrossel_filter_showcase";
import { useState, useEffect } from "react";
import CardShowCase from "../../components/CardShowCase/CardShowCase";
import Modal from "../../components/Modal/Modal";
import { useContext } from "react";
import { Context } from "../../contexts/useModal/useModal";

const ShowCase = () => {
    const [select, setSelect] = useState(0);
    const [products, setProducts] = useState([]);
    const { modal, list, setList } = useContext(Context);

    useEffect(() => {
        fetch(
            `https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json`
        )
            .then((response) => response.json())
            .then((data) => {
                setList(data.products);
            });
    }, []);

    return (
        <section className="showcase-container container">
            {modal == true && <Modal></Modal>}
            <section className="filter-container">
                <h2 className="title-section">Meu cachorro...</h2>

                <Carousel amount={5} auto={false}>
                    {data.map((item, index) => (
                        <SwiperSlide>
                            <p
                                className={`text ${
                                    index == select ? "selected" : ""
                                }`}
                                onClick={() => setSelect(index)}
                            >
                                {item.text}
                            </p>
                        </SwiperSlide>
                    ))}
                </Carousel>
            </section>
            <section className="cards-container">
                <Carousel amount={4} auto={true}>
                    {list.map((item, index) => (
                        <SwiperSlide>
                            <CardShowCase
                                path={item.photo}
                                text={item.productName}
                                price={item.price}
                                id={index}
                            ></CardShowCase>
                        </SwiperSlide>
                    ))}
                </Carousel>
                <a className="link">Ver todos</a>
            </section>
        </section>
    );
};

export default ShowCase;

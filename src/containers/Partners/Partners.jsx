import React from "react";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import "./partners.scss";
import { SwiperSlide } from "swiper/react";
import data from "../../data/carousel_partner";

const Partners = () => {
    return (
        <section className="partners-container">
            <div className="partners-box">
                {
                    <Carousel amount={1} auto={true}>
                        {data.map((item) => (
                            <SwiperSlide>
                                <img src={item.path} alt={item.alt} />
                            </SwiperSlide>
                        ))}
                    </Carousel>
                }
                <div className="partners-content">
                    <h2 className="title-section">Parceiros</h2>
                    <p className="partners-text">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <Button text="Confira"></Button>
                </div>
            </div>
            <div className="signature-box">
                <div className="signature-content">
                    <h2 className="title-section">Assinatura Cãoselheiro</h2>
                    <p className="signature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Auctor adipiscing quis non sed.
                    </p>
                    <Button text="Saiba mais"></Button>
                </div>
                <img src="./assets/dog.svg" alt="" />
            </div>
        </section>
    );
};

export default Partners;

import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import "./hero.scss";
import Button from "../../components/Button/Button";
const Hero = () => {
    return (
        <section className="hero-container">
            <h1 className="text-hero">
                As melhores guias para os melhores passeios.
            </h1>
            <Button text={"Confira"} />
        </section>
    );
};

export default Hero;

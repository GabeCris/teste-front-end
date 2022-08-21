import React from "react";
import Button from "../Button/Button";
import "./cardblog.scss";

const CardBlog = ({ path, alt }) => {
    return (
        <section className="card-blog">
            <img className="image-card" src={path} alt={alt} />
            <div className="card-content">
                <h2 className="card-title">
                    Lorem ipsum dolor sit amet consectetur.
                </h2>
                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur elit adipiscing
                    dignissim posuere vitae.
                </div>
                <Button text="Ler artigo"></Button>
            </div>
        </section>
    );
};

export default CardBlog;

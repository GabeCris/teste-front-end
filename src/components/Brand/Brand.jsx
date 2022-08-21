import React from "react";
import "./brand.scss";

const Brand = ({ src, alt }) => {
    return (
        <section className="brand-card">
            <img src={src} alt={alt} />
        </section>
    );
};

export default Brand;

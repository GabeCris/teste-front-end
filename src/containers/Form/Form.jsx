import React from "react";
import "./form.scss";
import Button from "../../components/Button/Button";

const Form = () => {
    return (
        <section className="form-container">
            <img src="./assets/dog-form.svg" alt="" />
            <section className="box-form">
                <h2 className="title-section">
                    Se inscreva para receber novidades e promoções
                </h2>
                <label className="label-form">
                    <img src="./assets/icons/icon-username.svg" alt="" />
                    <input type="text" placeholder="Digite seu nome" />
                </label>
                <label className="label-form">
                    <img src="./assets/icons/icon-mail.svg" alt="" />
                    <input type="text" placeholder="Digite seu e-mail" />
                </label>
                <Button text="Enviar"></Button>
            </section>
        </section>
    );
};

export default Form;

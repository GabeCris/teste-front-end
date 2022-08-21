import React from "react";
import "./cardshowcase.scss";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { Context } from "../../contexts/useModal/useModal";
import { useContext } from "react";

const CardShowCase = ({ path, text, price, functionModal, id }) => {
    const [favorite, setFavorite] = useState(false);
    const [oldValue, setOldValue] = useState(0);
    const [subsValue, setSubsValue] = useState(0);

    const { idDetails, setIdDetails, setModal, modal } = useContext(Context);

    const changeFavorite = () => {
        setFavorite(!favorite);
    };

    useEffect(() => {
        setDiscount();
        setSubscribersValue();
    });

    const setDiscount = () => {
        //valor antes dos 40% off
        setOldValue(price + price * 0.4);
    };

    const setSubscribersValue = () => {
        //valor para assinantes com 10% de desconto
        setSubsValue(price - price * 0.1);
    };

    const changeModal = () => {
        console.log("MEU ID É", id);
        setIdDetails(id);
        setModal(!modal);
    };

    return (
        <div className="card-container" onClick={changeModal}>
            <aside className="discount">40% off</aside>
            <img
                className="card-favorite"
                src={`./assets/icons/icon${
                    favorite ? "-heart-filled" : "-heart"
                }.svg`}
                alt=""
                onClick={changeFavorite}
            />
            <img src={path} alt="" className="image-card" />
            <h2 className="card-description">{text}</h2>
            <p className="card-price-underlined">De R$ {oldValue}</p>
            <p className="card-price">R${price}</p>
            <div className="subs-container">
                <p className="card-price-subs">R$ {subsValue}</p>
                <p className="subs-text">Para assinantes</p>
            </div>
            <Button text="Adicionar"></Button>
        </div>
    );
};

export default CardShowCase;

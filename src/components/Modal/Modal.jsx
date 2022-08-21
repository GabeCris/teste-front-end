import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contexts/useModal/useModal";
import "./modal.scss";

const Modal = () => {
    const { modal, setModal, list, idDetails } = useContext(Context);
    const [itemChanged, setItemChange] = useState("");

    useEffect(() => {
        filterProductById();
    }, []);

    const filterProductById = () => {
        list.filter((item, index) => index == idDetails).map((item) =>
            setItemChange(item)
        );
    };

    return (
        <section className="modal-container" onClick={() => setModal(!modal)}>
            <div className="box-modal">
                <img src={itemChanged.photo} alt="" />
                <section className="box-content">
                    <h1 className="title-modal">{itemChanged.productName}</h1>
                    <p className="price-modal">R$ {itemChanged.price}</p>
                    <p className="description-modal">
                        {itemChanged.descriptionShort}
                    </p>
                    <h4 className="more-modal">
                        Veja mais detalhes do produto
                    </h4>
                </section>
                <img
                    className="close-modal"
                    src="./assets/icons/icon-close.svg"
                    alt=""
                />
            </div>
        </section>
    );
};

export default Modal;

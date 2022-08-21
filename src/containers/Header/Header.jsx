import React from "react";
import "./header.scss";

const Header = () => {
    const urlIcons = "./assets/icons";
    const utilitiesIcons = ["box", "heart", "user", "cart"];
    const categories = [
        "brincar",
        "morder",
        "comer",
        "passear",
        "casa e conforto",
        "educação",
        "ofertas",
        "coleção de outono",
    ];

    return (
        <header className="header-container">
            <div className="benefits">
                <ul className="items">
                    <li className="item">
                        <img
                            src={`${urlIcons}/icon-shield.svg`}
                            alt="ícone de proteção"
                        />
                        <p className="text">
                            Compra<span>&nbsp;100% segura</span>
                        </p>
                    </li>
                    <li className="item">
                        <img
                            src={`${urlIcons}/icon-truck.svg`}
                            alt="Ícone de caminhão"
                        />
                        <p className="text">
                            <span>Frete grátis&nbsp;</span>acima de R$200
                        </p>
                    </li>
                    <li className="item">
                        <img
                            src={`${urlIcons}/icon-card.svg`}
                            alt="ícone de cartão"
                        />
                        <p className="text">
                            <span>Parcele&nbsp;</span>suas compras
                        </p>
                    </li>
                </ul>
            </div>
            <main className="main-header">
                <img src="./assets/logo.svg" alt="" />
                <label className="searchbar">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                    />
                    <img
                        src={`${urlIcons}/icon-search.svg`}
                        alt="Ícone de caixa"
                    />
                </label>
                <nav className="utilities">
                    {utilitiesIcons.map((item) => (
                        <img src={`${urlIcons}/icon-${item}.svg`} />
                    ))}
                </nav>
            </main>
            <nav className="navigation-header">
                <ul className="items">
                    {categories.map((item, index) => (
                        <li className="item">
                            {index === 7 && (
                                <img src={`${urlIcons}/icon-crown.svg`} />
                            )}
                            <p className="text">{item}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer-container">
            <section className="footer-about">
                <div className="social-media-container">
                    <h2 className="title-section">
                        Nos siga nas nossas redes sociais
                    </h2>
                    <div className="social-media-icons">
                        <img
                            src="./assets/icons/icon-facebook.svg"
                            alt="Ir para facebook do cãoselheiro"
                        />
                        <img
                            src="./assets/icons/icon-instagram.svg"
                            alt="Ir para instagram do cãoselheiro"
                        />
                        <img
                            src="./assets/icons/icon-youtube.svg"
                            alt="Ir para youtube do cãoselheiro"
                        />
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="title-section">Sobre o Cãoselheiro</h2>
                    <p className="text">
                        Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja
                        online de uma empresa que nasceu para contribuir para
                        uma melhor qualidade de vida dos cães e seus familiares
                        humanos. Seus sócios são profissionais de educação
                        canina que trabalham seguindo metodologias positivas de
                        treinamento animal, encorajando e recompensando os
                        acertos de nossos amigos em seus processos de
                        adestramento. Aqui você encontrará apenas itens de
                        qualidade comprovada e utilizados pessoalmente por seus
                        idealizadores. Fique à vontade!
                    </p>
                </div>
            </section>
            <section className="footer-information">
                <div className="top-info">
                    <div className="partners-info">
                        <h3 className="title-section">Assinatura parceiros</h3>
                    </div>
                    <div className="institutional-info">
                        <h3 className="title-section">Institucional</h3>
                        <ul>
                            <li className="item">Quem somos</li>
                            <li className="item">Política de privacidade</li>
                            <li className="item">Política comercial</li>
                            <li className="item">Política de devolução</li>
                            <li className="item">Regras de frete</li>
                        </ul>
                    </div>
                    <div className="attendance-info">
                        <h3 className="title-section">Atendimento</h3>
                        <ul>
                            <li className="item">Fale conosco</li>
                            <li className="item">(11) 97212-1314</li>
                            <li className="item">
                                ocaoselheiro@ocaoselheiro.com.br
                            </li>
                            <li className="item">Trabalhe conosco</li>
                        </ul>
                    </div>
                </div>
                <div className="mid-info">
                    <div className="payment-info">
                        <h3 className="title-section">Formas de pagamento</h3>
                        <div className="cards-info">
                            <img
                                src="./assets/cards/card-elo.svg"
                                alt="Opção de cartão da elo"
                            />
                            <img
                                src="./assets/cards/card-visa.svg"
                                alt="Opção de cartão da visa"
                            />
                            <img
                                src="./assets/cards/card-mastercard.svg"
                                alt="Opção de cartão da mastercard"
                            />
                            <img
                                src="./assets/cards/card-any.svg"
                                alt="Opção de cartão qualquer"
                            />
                            <img
                                src="./assets/cards/card-diners.svg"
                                alt="Opção de cartão da diners club"
                            />
                            <img
                                src="./assets/cards/card-ae.svg"
                                alt="Opção de cartão da american express"
                            />
                        </div>
                    </div>
                    <div className="security-info">
                        <h3 className="title-section">Segurança</h3>
                        <img src="./assets/encrypt-logo.svg" alt="" />
                    </div>
                </div>
                <div className="bottom-info">
                    <div className="copy">
                        <p className="text">O Cãoselheiro Comércio LTDA</p>
                        <p className="text">CNPJ: 30.324.633/0001-16</p>
                        <p className="text">
                            © Todos os direitos reservados. 2021
                        </p>
                    </div>
                    <div className="logos">
                        <img src="./assets/econverse-logo.svg" alt="" />
                        <img src="./assets/vtex-logo.svg" alt="" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

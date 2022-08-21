import React, { createContext, useState } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
    const [idDetails, setIdDetails] = useState(0);
    const [modal, setModal] = useState(false);
    const [list, setList] = useState([]);

    return (
        <Context.Provider
            value={{ idDetails, setIdDetails, modal, setModal, list, setList }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;

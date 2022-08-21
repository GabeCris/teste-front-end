import React from "react";
import styles from "./text.module.scss";

const Text = ({ text, size }) => {
    const style = {
        fontSize: size,
    };

    return (
        <p className={styles.text} style={style}>
            {text}
        </p>
    );
};

export default Text;

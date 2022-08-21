import { Swiper } from "swiper/react";
import {
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./carousel.scss";

const Carousel = ({ children, amount, effect, auto }) => {
    return (
        <Swiper
            modules={[
                EffectFade,
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
            ]}
            navigation
            effect={effect}
            pagination={{ clickable: true }}
            slidesPerView={amount}
            loop={true}
            autoplay={auto}
        >
            {children}
        </Swiper>
    );
};

export default Carousel;

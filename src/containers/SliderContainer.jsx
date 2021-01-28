import React, { useState } from "react";
import Slider from "../components/Slider";

export default function SliderContainer() {
    const [categories] = useState([
        {
            title: 'Бургеры',
            images: [
                require('./slides/burgers/burger-1.jpeg'),
                require('./slides/burgers/burger-2.jpeg'),
                require('./slides/burgers/burger-3.jpeg')
            ]
        },
        {
            title: 'Пицца',
            images: [
                require('./slides/pizza/pizza-1.jpeg'),
                require('./slides/pizza/pizza-2.jpeg'),
                require('./slides/pizza/pizza-3.jpeg')
            ],
        },
        {
            title: 'Чай',
            images: [
                require('./slides/tea/tea-1.jpeg'),
                require('./slides/tea/tea-2.jpeg'),
                require('./slides/tea/tea-3.jpeg')
            ]
        }
    ]);

    return <Slider categories={categories} />;
}

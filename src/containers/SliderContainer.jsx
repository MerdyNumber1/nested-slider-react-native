import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";

export default function SliderContainer() {
    const [slides, setSlides] = useState([]);
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
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeSlideInCategory, setActiveSlideInCategory] = useState(0);

    const onSnapToItem = (index, imageId) => {
        setActiveCategory(categories.find(category => category.images.find((image, index) => {
            if(image === imageId) {
                setActiveSlideInCategory(index);
                return true;
            }
        })))
    }

    useEffect(() => {
        const slides = []
        categories.forEach((category, i) =>
            slides.push(...category.images)
        )
        setSlides(slides)
    }, [categories])

    return (
        <Slider
            slides={slides}
            activeTitle={activeCategory.title}
            categories={categories}
            onSnapToItem={onSnapToItem}
            activeCategory={activeCategory}
            activeDot={activeSlideInCategory}
        />
    );
}

import React, { useState, useMemo } from "react";
import Slider from "../components/Slider";

export default function SliderContainer() {
    const [categories] = useState([
        {
            id: 1,
            title: 'Бургеры',
            slides: [
                {
                    id: 1,
                    image: require('./slides/burgers/burger-1.jpeg')
                },
                {
                    id: 2,
                    image: require('./slides/burgers/burger-2.jpeg')
                },
                {
                    id: 3,
                    image: require('./slides/burgers/burger-3.jpeg')
                },
            ]
        },
        {
            id: 2,
            title: 'Пицца',
            slides: [
                {
                    id: 4,
                    image: require('./slides/pizza/pizza-1.jpeg')
                },
                {
                    id: 5,
                    image: require('./slides/pizza/pizza-2.jpeg')
                },
                {
                    id: 6,
                    image: require('./slides/pizza/pizza-3.jpeg')
                },
            ],
        },
        {
            id: 3,
            title: 'Чай',
            slides: [
                {
                    id: 7,
                    image: require('./slides/tea/tea-1.jpeg')
                },
                {
                    id: 8,
                    image: require('./slides/tea/tea-2.jpeg')
                },
                {
                    id: 9,
                    image: require('./slides/tea/tea-3.jpeg')
                },
            ]
        }
    ]);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeSlideInCategory, setActiveSlideInCategory] = useState(0);

    const onSnapToItem = (index, slideId) => {
        const newActiveCategory = categories.find(category => category.slides.find((slide, index) => {
            if (slide.id === slideId) {
                setActiveSlideInCategory(index);
                return true;
            }
        }));

        if (activeCategory.id !== newActiveCategory.id) setActiveCategory(newActiveCategory);
    }
    const onChangeCategory = (categoryId, carouselRef) => {
        setActiveCategory(categories.find(category => {
            if(category.id === categoryId) {
                carouselRef.snapToItem(getSlidesLengthBeforeCategory(categoryId))
                return true
            }
        }))
    }
    const onDotActivate = (dotIndex, categoryId, carouselRef) => {
        carouselRef.snapToItem(getSlidesLengthBeforeCategory(categoryId) + dotIndex)
        setActiveSlideInCategory(dotIndex)
    }

    const getSlidesLengthBeforeCategory = (categoryId) => {
        let activeSlide = 0;
        categories.every(category => category.id !== categoryId ? activeSlide += category.slides.length : false)
        return activeSlide
    }

    const slides = useMemo(() => categories.flatMap(category => category.slides), [categories])

    return (
        <Slider
            activeTitle={activeCategory.title}
            activeCategory={activeCategory}
            activeDot={activeSlideInCategory}
            slides={slides}
            categories={categories}
            onSnapToItem={onSnapToItem}
            onChangeCategory={onChangeCategory}
            onDotActivate={onDotActivate}
        />
    );
}

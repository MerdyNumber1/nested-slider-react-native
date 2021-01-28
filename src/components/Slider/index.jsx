import React, {useState} from "react";
import Swiper from 'react-native-swiper';
import {View, Text, StyleSheet, Image} from "react-native";
import {vw} from 'react-native-expo-viewport-units';

export default function Slider({categories}) {
    const [activeCategory, setActiveCategory] = useState(0);
    const onChangeSlide = (index) => index === category.length && setActiveCategory(activeCategory + 1)

    const category = categories[activeCategory];

    return (
        <View style={styles.sliderContainer}>
            <Swiper>
                {categories.map((category, index) => {
                    return (
                        <View key={`${category.title}-${index}`}>
                            <Text>{category.title}</Text>
                            <Swiper loop={false}>
                                {category.images.map((image, imageIndex) =>
                                    <View key={`${image}-${imageIndex}`}>
                                        <Image style={styles.slideImage} source={image}/>
                                    </View>
                                )}
                            </Swiper>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        width: '92%',
        maxWidth: 300,
        height: vw(92),
        maxHeight: 300,
        backgroundColor: 'green'
    },
    slideImage: {
        width: '100%',
        height: '100%'
    }
})

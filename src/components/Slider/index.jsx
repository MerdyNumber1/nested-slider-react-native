import React, {useState, useEffect} from "react";
import Swiper from 'react-native-swiper';
import {View, Text, StyleSheet, Image} from "react-native";
import {vw} from 'react-native-expo-viewport-units';

// export default function Slider({categories}) {
//     const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
//     const [slideIndex, setSlideIndex] = useState(0);
//
//     useEffect(() => {
//         if(slideIndex === 0) {
//             setActiveCategoryIndex(activeCategoryIndex === 0 ? categories.length - 1 : activeCategoryIndex - 1);
//             setSlideIndex(categories[activeCategoryIndex].length - 1);
//         } else if(slideIndex === activeCategory.length - 1) {
//             setActiveCategoryIndex(activeCategoryIndex === categories.length - 1 ? 0 : activeCategoryIndex + 1);
//         }
//     }, [slideIndex])
//
//     const activeCategory = categories[activeCategoryIndex];
//
//     return (
//         <View style={styles.sliderContainer}>
//             {categories.map((category, categoryIndex) =>
//                 <Text key={`${category.title}-${categoryIndex}`} onPress={() => setActiveCategoryIndex(categoryIndex)}>
//                     {category.title}
//                 </Text>
//             )}
//             <Swiper onIndexChanged={(index) => setTimeout(() => setSlideIndex(index), 0)} index={slideIndex}>
//                 {activeCategory.images.map((image, imageIndex) =>
//                     <View key={`${image}-${imageIndex}`}>
//                         <Image style={styles.slideImage} source={image}/>
//                     </View>
//                 )}
//             </Swiper>
//         </View>
//     )
// }
//
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
        height: '100%',
    },
    test: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    }
})

import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.Component {

    _renderItem = ({item, index}) => {
        return (
            <View>
                <Image style={styles.slideImage} source={item}/>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.sliderContainer}>
                {this.props.categories.map(category =>
                    <Text key={category.title}>{category.title} {category.title === this.props.activeTitle && ' - active'}</Text>
                )}
                <Carousel
                    loop
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={this.props.slides.reverse()}
                    renderItem={this._renderItem}
                    sliderWidth={300}
                    itemWidth={300}
                    onSnapToItem={(index) => this.props.onSnapToItem(index, this.props.slides[index])}
                />
                {this.props.activeCategory.images.map((image, index) =>
                    <Text onPress={() => this._carousel.snapToItem(8)} key={`${index}-dot`}>{index} {this.props.activeDot === index && ' - active'}</Text>
                )}
            </View>
        );
    }
}

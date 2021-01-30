import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { vw } from 'react-native-expo-viewport-units';


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
    _renderSlide = ({item: slide}) => {
        return (
            <View>
                <Image style={styles.slideImage} source={slide.image}/>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.sliderContainer}>
                {this.props.categories.map(category =>
                    <Text key={category.title} onPress={() => this.props.onChangeCategory(category.id, this._carousel)}>
                        {category.title} {category.title === this.props.activeTitle && ' - active'}
                    </Text>
                )}
                <Carousel
                    loop
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={this.props.slides}
                    renderItem={this._renderSlide}
                    sliderWidth={300}
                    itemWidth={300}
                    onSnapToItem={(index) => this.props.onSnapToItem(index, this.props.slides[index].id)}
                    initialNumToRender={1}
                    maxToRenderPerBatch={3}
                    removeClippedSubviews
                />
                {this.props.activeCategory.slides.map((image, index) =>
                    <Text
                        onPress={() =>
                            this.props.onDotActivate(index, this.props.activeCategory.id, this._carousel
                        )}
                        key={`${index}-dot`}
                    >
                        {index} {this.props.activeDot === index && ' - active'}
                    </Text>
                )}
            </View>
        );
    }
}

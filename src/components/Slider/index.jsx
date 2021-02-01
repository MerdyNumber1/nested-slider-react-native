import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { vw } from 'react-native-expo-viewport-units';
import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.PureComponent {
    _renderSlide = ({ item: slide }) => {
        return (
            <View>
                <Image style={styles.slideImage} source={slide.image}/>
            </View>
        );
    }

    render() {
        const sliderWidth = vw(92) > 300 ? 300 : vw(92);

        return (
            <View style={styles.container}>
                <View style={styles.categoryTitles}>
                    {this.props.categories.map(category =>
                        <Text
                            style={[
                                styles.categoryTitle,
                                this.props.activeTitle === category.title && styles.categoryTitleActive
                            ]}
                            key={category.title}
                            onPress={() =>
                                this.props.onChangeCategory(category.id, this._carousel)
                            }
                        >
                            {category.title}
                        </Text>
                    )}
                </View>
                <Carousel
                    loop
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={this.props.slides}
                    renderItem={this._renderSlide}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    onSnapToItem={(index) => this.props.onSnapToItem(index, this.props.slides[index].id)}
                />
                <View style={styles.dots}>
                    {this.props.activeCategory.slides.map((image, index) =>
                        <TouchableOpacity
                            style={[styles.dot, this.props.activeDot === index && styles.dotActive]}
                            onPress={() =>
                                this.props.onDotActivate(index, this.props.activeCategory.id, this._carousel
                            )}
                            key={`${index}-dot`}
                        />
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '92%',
        maxWidth: 300,
        minWidth: 200,
        height: vw(92),
        maxHeight: 300,
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    categoryTitles: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    categoryTitle: {
        marginTop: 10,
        marginRight: 10,
    },
    categoryTitleActive: {
        fontWeight: 'bold'
    },
    dots: {
        width: '100%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: 'grey',
        marginLeft: 5,
        marginRight: 5
    },
    dotActive: {
      backgroundColor: 'black'
    },
    slideImage: {
        width: '100%',
        height: '100%',
    }
})

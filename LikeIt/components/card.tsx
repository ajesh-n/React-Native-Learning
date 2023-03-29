import React, { FunctionComponent } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CardProps {
    image: ImageSourcePropType,
}

const Card : FunctionComponent<CardProps> = ( {image} ): JSX.Element => {
    return (
        <View style={styles.card}>
            <Image style={styles.card_image} source={image}></Image>
            <View style={styles.card_footer}>
                <Text style={{ flex: 1, fontSize: 20 }}>Comment</Text>
                <Icon style={styles.icon} name="heart" size={20} color="red" />
                <Text style={{ fontSize: 20 }}>Like</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        backgroundColor: 'white',
        marginHorizontal: 50,
        marginVertical: 30,
        borderRadius: 20,
    },
    card_image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: undefined,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    card_footer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    icon: {
        marginEnd: 5
    }
});

export default Card;

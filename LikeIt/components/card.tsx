import React, { FunctionComponent } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CardProps {
    image: ImageSourcePropType,
    id: Number,
    liked: Boolean,
    onPicLike: (id: Number) => void
}

const Card: FunctionComponent<CardProps> = ({ image, id, liked, onPicLike }): JSX.Element => {
    return (
        <View style={styles.card} >
            <Image style={styles.card_image} source={image}></Image>
            <View style={styles.card_footer}>
                <Text style={{ flex: 1, fontSize: 20 }}>Comment</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => onPicLike(id)}>
                    <Icon style={styles.icon} name="heart" size={20} color={liked ? 'red' : 'grey'} />
                    <Text style={{ fontSize: 20 }}>Like</Text>
                </TouchableOpacity>
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

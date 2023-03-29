import React from 'react';
import { ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from './components/card';
import Header from './components/header';



type CardPropType = {
  image: ImageSourcePropType,
  id: Number,
  liked: Boolean
}

interface AppState {
  cards: CardPropType[]
}

interface IProps {
}

class App extends React.Component<IProps, AppState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: [
        { image: require('./assets/pic_1.jpg'), id: 1, liked: false },
        { image: require('./assets/pic_2.jpg'), id: 2, liked: false },
        { image: require('./assets/pic_3.jpg'), id: 3, liked: false }
      ],
    };
  }


  onPicLike = (id: Number) => {
    this.setState((prevState) => ({
      cards: prevState.cards.map((card) => {
        if (card.id === id) {
          card.liked = !card.liked;
        }
        return card
      }),
    })
    );
  };

  render(): React.ReactNode {
    return (
      <SafeAreaView style={{ backgroundColor: '#C5CAE9', flex: 1 }}>
        <Header />
        <ScrollView style={styles.container}>
          {
            this.state.cards.map(
              (card) => <Card image={card.image} id={card.id} liked={card.liked} onPicLike={this.onPicLike} />
            )
          }
        </ScrollView>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
});

export default App;

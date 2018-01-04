import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class ChooseDeck extends React.Component {
  static navigationOptions = () => ({
    title: "Decks"
  })

  cardCountFor(deck) {
    return(this.props.cards.filter((card) => card.deck === deck).length)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.decks.map((deck) => {
          return(<Button
            key={deck.name}
            onPress={() => this.props.navigation.navigate('DeckDetails', {deck: deck.name})}
            title={`${deck.name} (${this.cardCountFor(deck.name)} cards)`} />)
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(ChooseDeck)
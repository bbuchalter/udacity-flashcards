import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck, // TODO: Would like this to use currentDeckName
  })
  render() {
    const deckName = this.props.currentDeckName
    const cards = this.props.cardsForDeck
    return (
      <View style={styles.container}>
        <Text>{deckName}</Text>
        <Text>{cards.length} cards</Text>
        {cards.length && <Button
          onPress={() => this.props.navigation.navigate('Quiz', {deck: deckName})}
          title="Start Quiz"/>}
        <Button
          onPress={() => this.props.navigation.navigate('NewCard', {deck: deckName})}
          title="Add Card"/>
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

function mapStateToProps(state, {navigation}) {
  const currentDeckName = navigation.state.params.deck
  return {
    currentDeckName: currentDeckName,
    cardsForDeck: state.cards.filter((card) => card.deck === currentDeckName)
  }
}
export default connect(mapStateToProps)(DeckDetails)
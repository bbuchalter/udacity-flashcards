import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
  })
  render() {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    return (
      <View style={styles.container}>
        <Text>{deckName}</Text>
        <Text>{cards.length} cards</Text>
        {cards.length && <Button
          onPress={() => this.props.navigation.navigate('QuizQuestion', {deck: deckName})}
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

function mapStateToProps(state) {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(DeckDetails)
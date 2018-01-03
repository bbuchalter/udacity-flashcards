import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class QuizQuestion extends React.Component {
  static navigationOptions = () => ({
    title: "Quiz"
  })
  render() {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    const cardIndex = this.props.navigation.state.params.cardIndex
    const question = cards[cardIndex].question

    return (
      <View style={styles.container}>
        <Text>{cardIndex + 1} of {cards.length}</Text>
        <Text>{question}</Text>
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

export default connect(mapStateToProps)(QuizQuestion)
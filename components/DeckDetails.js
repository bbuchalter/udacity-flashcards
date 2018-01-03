import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
  })
  render() {
    const deckName = this.props.navigation.state.params.deck
    const cardCount = this.props.cards.filter((card) => card.deck === deckName).length
    return (
      <View style={styles.container}>
        <Text>{deckName}</Text>
        <Text>{cardCount} cards</Text>
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
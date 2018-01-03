import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'

class ChooseDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose Deck:</Text>
        {this.props.decks.map((deck) => {
          return(<Button
            key={deck.name}
            onPress={() => this.props.navigation.navigate('DeckDetails', {deck: deck.name})}
            title={deck.name} />)
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
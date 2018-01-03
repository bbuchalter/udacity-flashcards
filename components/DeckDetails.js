import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

class DeckDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.deck,
  })
  render() {
    const deckName = this.props.navigation.state.params.deck
    return (
      <View style={styles.container}>
        <Text>Deck Details: {deckName}</Text>
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
export default DeckDetails
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default class NewDeck extends React.Component {
  state = {
    deckName: ''
  }

  _submit() {
    console.log('creating deck named ', this.state.deckName)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your deck?</Text>
        <TextInput
          value={this.state.deckName}
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
          onChangeText={(deckName) => this.setState({deckName})} />
        <Button
          onPress={() => this._submit()}
          title="Create Deck"/>
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

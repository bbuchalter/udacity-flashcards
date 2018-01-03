import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

class DeckDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck Details: {this.props.navigation.state.params.deck}</Text>
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
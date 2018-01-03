import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { createDeck } from '../actions'

class NewDeck extends React.Component {
  static navigationOptions = () => ({
    title: "New Deck"
  })
  state = {
    name: ''
  }

  _submit() {
    this.props.create(this.state)
    this.props.navigation.navigate('ChooseDeck')
    this.setState({name: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your deck?</Text>
        <TextInput
          value={this.state.name}
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
          onChangeText={(name) => this.setState({name})} />
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

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    create: (state) => dispatch(createDeck({
      ...state
    })),
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
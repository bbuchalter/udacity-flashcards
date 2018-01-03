import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { createCard } from '../actions'

class NewCard extends React.Component {
  static navigationOptions = () => ({
    title: "New Card"
  })

  state = {
    question: '',
    answer: ''
  }

  deckName() {
    this.props.navigation.state.params.deck
  }

  _submit() {
    this.props.create(this.state)
    this.props.navigation.navigate('DeckDetails', {deck: this.deckName()})
    this.setState({question: '', answer: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What is the question?</Text>
        <TextInput
          value={this.state.question}
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
          onChangeText={(question) => this.setState({question})} />
        <Text>What is the answer?</Text>
        <TextInput
          value={this.state.answer}
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
          onChangeText={(answer) => this.setState({answer})} />
        <Button
          onPress={() => this._submit()}
          title="Create Card"/>
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
    create: (state) => dispatch(createCard({
      ...state
    })),
  }
}

export default connect(null, mapDispatchToProps)(NewCard)
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/Notifications'

class Quiz extends React.Component {
  state = {
    showQuestion: true,
    correctCount: 0,
    cardIndex: 0
  }

  static navigationOptions = () => ({
    title: "Quiz"
  })

  submit(answeredCorrectly) {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    let newCorrectCount = this.state.correctCount

    if(answeredCorrectly) {
      newCorrectCount += 1
    }

    this.setState((prevState) => {
      return({
        cardIndex: (prevState.cardIndex+1),
        correctCount: newCorrectCount
      })
    })
  }

  question(cardIndex) {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    return(
      <View style={styles.container}>
        {this.progress()}
        <Text>{cards[cardIndex].question}</Text>
        <Button onPress={() => this.setState({showQuestion: false})} title="Show Answer" />
        {this.responseButtons}
      </View>
    )
  }

  answer(cardIndex) {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    return(
      <View style={styles.container}>
        {this.progress()}
        <Text>{cards[cardIndex].answer}</Text>
        <Button onPress={() => this.setState({showQuestion: true})} title="Show Question" />
        {this.responseButtons}
      </View>
    )
  }

  responseButtons =
    <View style={styles.container}>
      <Button onPress={() => this.submit(true)} title="Correct" />
      <Button onPress={() => this.submit(false)} title="Incorrect" />
    </View>

  restart() {
    this.setState({
      showQuestion: true,
      correctCount: 0,
      cardIndex: 0
    })
  }

  results() {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    const percentageCorrect = Math.round((this.state.correctCount/cards.length) * 100)

    clearLocalNotification()
      .then(setLocalNotification)

    return(
      <View style={styles.container}>
        <Text>
          You finished the quiz and answered {percentageCorrect}% correct!
        </Text>
        <Button
          onPress={() => this.restart()}
          title="Restart Quiz"/>
      </View>
    )
  }

  progress() {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    const cardIndex = this.state.cardIndex
    return(
      <Text>{cardIndex + 1} of {cards.length}</Text>
    )
  }

  render() {
    const deckName = this.props.navigation.state.params.deck
    const cards = this.props.cards.filter((card) => card.deck === deckName)
    const cardIndex = this.state.cardIndex

    return (
      <View style={styles.container}>
        {cardIndex < cards.length
          ? this.state.showQuestion
            ? this.question(cardIndex)
            : this.answer(cardIndex)
          : this.results()
        }
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

export default connect(mapStateToProps)(Quiz)
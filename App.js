import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import ChooseDeck from './components/ChooseDeck'
import NewDeck from './components/NewDeck'
import DeckDetails from './components/DeckDetails'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { decks, cards } from './reducers'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { setLocalNotification } from './utils/Notifications'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CardsStatusBar barStyle="light-content" />
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}

const store = createStore(
  combineReducers({ decks, cards }),
  composeWithDevTools()
)

function CardsStatusBar({...props}) {
  return(
    <View style={{height: Constants.statusBarHeight}}>
      <StatusBar translucent {...props} />
    </View>
  )
}

const DeckTabs = TabNavigator({
  ChooseDeck: {
    screen: ChooseDeck,
    navigationOptions: {
      tabBarLabel: "Choose Deck"
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: "Create Deck"
    }
  },
})

const MainNavigation = StackNavigator({
  Home: {
    screen: DeckTabs,
  },
  DeckDetails: {
    screen: DeckDetails
  },
  NewCard: {
    screen: NewCard
  },
  Quiz: {
    screen: Quiz
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import ChooseDeck from './components/ChooseDeck'
import NewDeck from './components/NewDeck'
import { decks } from './reducers'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export default class App extends React.Component {
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
  combineReducers({ decks }),
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
  }
})

const MainNavigation = StackNavigator({
  Home: {
    screen: DeckTabs,
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import ChooseDeck from './components/ChooseDeck'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardsStatusBar barStyle="light-content" />
        <MainNavigation />
      </View>
    );
  }
}

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

import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';

class ListScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>List !</Text>
        </View>
      );
    }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details !</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="Details" onPress={ () =>{
             const action = NavigationActions.navigate({ routeName: 'Details'});
             this.props.navigation.navigate('Home', {}, action);
            }
        } />
      </View>
    );
  }
}

const HomeStack = StackNavigator({
    List: { screen: ListScreen },
    Details: { screen: DetailsScreen }
}, 
{ 
    headerMode: 'none'
})

export default TabNavigator({
  Home: { screen: HomeStack },
  Settings: { screen: SettingsScreen },
});
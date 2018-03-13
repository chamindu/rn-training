import { } from 'react-navigation'

import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [
              {id: '1', title: 'Item 1', desc: 'This is item one.'},
              {id: '2', title: 'Item 2', desc: 'This is item two.'},
              {id: '3', title: 'Item 3', desc: 'This is item three.'},
              {id: '4', title: 'Item 4', desc: 'This is item four.'},
              {id: '5', title: 'Item 5', desc: 'This is item five.'}
          ]
      }
  }
  
  render() {
      const Nav =  StackNavigator(
          {
              List: {
                   screen: ListScreen
              },
              Details: {
                  screen: DetailsScreen
              }
          },
          {
            initialRouteName: 'List',
          }
      )

      return (<Nav screenProps={this.state} />)
  }
}

const ListItem = ({onPress, id, title}) => (
    <TouchableOpacity onPress={ () => onPress(id)}>
        <Text>{title}</Text>
    </TouchableOpacity>
);

class ListScreen extends React.Component {
    static navigationOptions = {
        title: 'List'
    };
    constructor(props) {
        super(props);
        this.onItemPress = this.onItemPress.bind(this);
    }

    onItemPress(id) {
        const { navigation } = this.props;
        navigation.navigate('Details', { itemId: id });
    }

    render() {
        return(
            <FlatList 
                data={this.props.screenProps.data} 
                renderItem={({item}) => <ListItem title={item.title} id={item.id} onPress={this.onItemPress} />}
                keyExtractor={item => item.id}
            />
        );
    }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Item ' + navigation.state.params.itemId
  });
  render() {
    const { data } = this.props.screenProps;
    const { itemId } = this.props.navigation.state.params;
    const item = data.find( el => el.id === itemId);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{item.id}</Text>
        <Text>{item.desc}</Text>
      </View>
    );
  }
}

export default HomeScreen;
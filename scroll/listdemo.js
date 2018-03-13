import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]
        };
    }
    render() {
        return (<View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View> );  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
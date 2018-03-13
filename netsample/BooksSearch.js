import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class BooksSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { query : ''};
        this.onQueryChange = this.onQueryChange.bind(this);
        this.onQuerySubmit = this.onQuerySubmit.bind(this);
    }

    onQueryChange(text) {
        this.setState({ query: text });
    }

    onQuerySubmit() {
        this.props.onQuery(this.state.query);
    }

    render() {
        return (
            <TextInput 
                value={this.state.query} 
                onChangeText={this.onQueryChange}
                returnKeyType='search'
                onSubmitEditing={this.onQuerySubmit}
             />
        );
    }
}
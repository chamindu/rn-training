import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import BookSearch from './BooksSearch';
import BookList from './BooksList';

export default class BooksScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            books: [],
            query: '',
            startIndex: 0
        };

        this.onQuery = this.onQuery.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
    }

    onQuery(query) {
        this.setState({ query, startIndex:0, isLoading:true }, this.loadData); 
        this.loadData();
    }

    async onRefresh() {
        this.setState({ startIndex:0, isLoading:true  }, this.loadData);
    }

    async loadData(loadMore = false) {
        const query = this.state.query;
        const startIndex = this.state.startIndex;
        let url = 'https://www.googleapis.com/books/v1/volumes?maxResults=40&startIndex=' + startIndex +  '&q=' + query;
        console.log(url);
        let response = await fetch(url);
        let json = await response.json()
        let data;
        if(loadMore) {
            data = [...this.state.books, ...json.items];
        } else {
            data = json.items;
        }

        this.setState({ books: data, isLoading: false })
    }

    loadMoreData() {
        this.setState( (prevState, props) => {
            console.log( "loadmore " + prevState.startIndex);
            return  { startIndex: prevState.startIndex + 41 }
        }, () => this.loadData(true));
    }

    render() {
        return (
            <View>
                <BookSearch onQuery={this.onQuery} />
                <BookList books={this.state.books} refreshing={this.state.isLoading} onRefresh={this.onRefresh} onLoadMore={this.loadMoreData} />
            </View>
        );
    }
}
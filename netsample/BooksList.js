import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

const BookList = ({ books, refreshing, onRefresh, onLoadMore }) => (
    <FlatList 
        data={books}
        renderItem={ ({item}) => <Text>{item.volumeInfo.title}</Text> }
        keyExtractor={ (item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.75}
    /> 
);

export default BookList;
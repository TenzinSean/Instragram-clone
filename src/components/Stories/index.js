import React from 'react';
import { View, FlatList } from 'react-native';
import Story from '../Story';

import styles from './styles';

const data = [
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Tenzin',
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Dolma',
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Passang',
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Scarlet',
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Chichi',
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Chokrab',
    },
    {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Passang',
    },
]

const Stories = () => (
    <FlatList
        data={data}
        keyExtractor={({name}) => name}
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
    >
    </FlatList>
)

export default Stories;
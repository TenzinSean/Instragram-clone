import React from 'react';
import { FlatList } from 'react-native';
import Post from '../../components/Post';
import Stories from '../../components/Stories';


const data = [
{
    user: {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Tenzin'
    },
    imageUri: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    caption: 'Beautifu city',
    likes: 123,
    postedAt: '3 minutes ago'
} ,
{
    user: {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Tenzin'
    },
    imageUri: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    caption: 'Beautifu city',
    likes: 123,
    postedAt: '3 minutes ago'
} ,
{
    user: {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Tenzin'
    },
    imageUri: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    caption: 'Beautifu city',
    likes: 123,
    postedAt: '3 minutes ago'
} ,

]


const Feed = () => (
    <FlatList
        data={data}
        renderItem={({item}) => <Post post={item} /> }
        ListHeaderComponent={Stories}
        />
)
export default Feed;
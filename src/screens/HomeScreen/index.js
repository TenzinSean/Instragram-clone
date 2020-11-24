import React from 'react';
import { Text } from 'react-native';
// import ProfilePicture from '../../components/profilePicture';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

import Feed from '../../components/Feed';
const post = {
    user: {
        imageUri: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
        name: 'Tenzin'
    },
    imageUri: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    caption: 'Beautifu city',
    likes: 123,
    postedAt: '3 minutes ago'
}


const HomeScreen = () => (
    <>
        <Feed />
    </>
)

export default HomeScreen;
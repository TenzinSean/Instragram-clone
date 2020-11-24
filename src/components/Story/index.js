import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import ProfilePicture from "../profilePicture";

const Story = ({imageUri, name}) => (
    <View>
        <ProfilePicture uri={imageUri} />
        <Text style={styles.name}>{name}</Text>
    </View>
)

export default Story;
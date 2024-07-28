import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ username, content }) => {
  return (
    <View style={styles.post}>
      <Text style={styles.username}>{username}</Text>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
  },
});

export default Post;


import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

export default () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

const PhotoActions = props => (
  <View style={styles.container}>
    <View style={styles.actions}>
      <TouchableOpacity onPressOut={props.handlePress}>
        <View style={styles.action}>
          <Ionicons
            name={props.isLiked ? "ios-heart" : "ios-heart-outline"}
            size={30}
            color={props.isLiked ? "#EB4B59" : "black"}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPressOut={() => props.navigation.navigate("Comments")}
      >
        <View style={styles.action}>
          <Ionicons name="ios-text-outline" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => props.navigation.navigate("Likes")}>
      <Text style={styles.likes}>
        {props.likeCount} {props.likeCount === 1 ? "like" : "likes"}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  actions: {
    flexDirection: "row"
  },
  action: {
    marginRight: 10
  },
  likes: {
    fontWeight: "600",
    fontSize: 14
  }
});

PhotoActions.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired
};

export default withNavigation(PhotoActions);

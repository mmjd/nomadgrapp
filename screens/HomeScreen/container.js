import React, { Component } from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import HomeScreen from "./presenter";
import NavButton from "../../components/NavButton";

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ height: 35 }}
        resizeMode="contain"
      />
    ),
    headerLeft: (
      <NavButton
        iconName="ios-camera-outline"
        onPress={() => navigation.navigate("AddPhotoModal")}
      />
    )
  });
  state = {
    isFetching: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        isFetching: false
      });
    }
  };
  componentDidMount = () => {
    const { feed } = this.props;
    if (feed) {
      this.setState({
        isFetching: false
      });
    }
  };
  render() {
    const { feed } = this.props;
    return (
      <HomeScreen
        {...this.state}
        onRefresh={this._refreshFeed}
        photoList={feed}
      />
    );
  }
  _refreshFeed = () => {
    const { getFeed } = this.props;
    this.setState({
      isFetching: true
    });
    getFeed();
  };
}

export default Container;

import React, { Component } from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";

// Components
import { Button } from "../../../components";

class MainScreen extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycles

  // Component Functions

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ justifyContent: "center", alignSelf: "center", flex: 1, }}>
        <Text>Main Screen</Text>
        <Button text="Go Back!" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default withNavigation(MainScreen);

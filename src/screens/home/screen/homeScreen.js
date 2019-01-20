import React, { Component } from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
// Constants

// Components
import { Button } from "../../../components";

class HomeScreen extends Component {
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
        <Text>Home Screen</Text>
        <Button onPress={()=> navigation.navigate("MainScreen")} text="Click Me!" />
      </View>
    );
  }
}

export default withNavigation(HomeScreen);

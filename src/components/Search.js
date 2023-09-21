import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { elevation } from "./common/styles";

export default function Search() {
  return (
    <View style={[Styles.container, Styles.elevation]}>
      <FontAwesome5 name="search" size={25} />
      <TextInput
        style={Styles.input}
        placeholder="Restaurants, food"
      ></TextInput>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    // shadowColor: "black",
    // shadowOffset: { width: 5, height: 5 },
    // elevation: 30,
    // shadowOpacity: 0.1,
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

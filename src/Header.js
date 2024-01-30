import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <View style={styles.headerIcon}>
          <TouchableOpacity>
            <Feather
              name="search"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="camera"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={21}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e806a",
    paddingTop: windowWidth * 0.2,
    paddingBottom: windowWidth * 0.02,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: windowWidth * 0.04,
  },
  headerText: {
    fontSize: windowWidth * 0.05,
    fontWeight: "500",
    color: "white",
  },
  headerIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: windowWidth * 0.05,
  },
});

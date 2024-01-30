import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import CallsData from "../fakeData/CallsData.js";
const windowWidth = Dimensions.get("window").width;

const Calls = () => {
  const [calls, setCalls] = useState(CallsData);

  return (
    <View style={styles.container}>
      <View style={styles.iconText}>
        <View style={styles.iconContainer}>
          <Ionicons name="link-sharp" size={35} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Arama bağlantısı oluştur</Text>
          <Text style={styles.descText}>
            WhatsApp aramanız için bağlatı paylaşın
          </Text>
        </View>
      </View>
      <View style={styles.middleW}>
        <Text style={styles.middleText}>En son</Text>
      </View>
      <View style={styles.flat}>
        <FlatList
          data={calls}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.statusAll}>
              <View style={styles.imagesContainer}>
                <Image source={item.photos} style={styles.images} />
              </View>
              <View style={styles.statHead}>
                <Text style={styles.statName}>{item.name}</Text>
                <View style={{flexDirection:'row'}}>
                  <MaterialIcons name="call-made" size={24} color='red' />
                <Text style={styles.statTime}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.cameraIcon}>
                <MaterialIcons
                  name={`video-call`}
                  size={34}
                  color={"#0e806a"}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Calls;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: windowWidth * 0.06,
  },
  iconText: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "#0e806a",
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: windowWidth * 1,
  },
  textContainer: {
    marginTop: windowWidth * 0.02,
    marginLeft: windowWidth * 0.06,
  },
  titleText: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
  descText: {
    fontSize: windowWidth * 0.035,
    fontWeight: "600",
    color: "#696969",
  },
  middleW: {
    paddingTop: windowWidth * 0.06,
  },
  middleText: {
    fontSize: windowWidth * 0.05,
    fontWeight: "700",
  },
  statusAll: {
    flexDirection: "row",
    marginTop: windowWidth * 0.02,
  },
  statHead: {
    paddingTop: windowWidth * 0.01,
    marginLeft:windowWidth*0.05
  },
  statName: {
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
  },
  statTime: {
    fontSize: windowWidth * 0.04,
    fontWeight: "400",
  },
  images: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    borderRadius: windowWidth * 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagesContainer: {
    padding: 3,
    borderWidth: 3,
    borderColor: "green",
    borderRadius: windowWidth * 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    position: "absolute",
    right: 1,
    marginTop: windowWidth * 0.03,
  },
  iconColor: {
    justifyContent:'center',
  },
});

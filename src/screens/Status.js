import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import statData from "../fakeData/StatusData";
const windowWidth = Dimensions.get("window").width;

const Status = () => {
  const [status, setStatus] = useState(statData);

  return (
    <View style={styles.container}>
      <View style={{ margin: windowWidth * 0.05 }}>
        <View style={styles.statusHead}>
          <Text style={styles.statusText}>Durum</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-vertical" size={34} />
          </TouchableOpacity>
        </View>
        <View style={styles.myCard}>
          <View style={styles.imagesContainer}>
            <Image source={require('../../assets/1.jpg')} style={styles.images} />
          </View>
          <View style={styles.myDesc}>
            <Text style={{ fontSize: windowWidth * 0.06, fontWeight: "600" }}>
              Durumum
            </Text>
            <Text style={{ fontSize: windowWidth * 0.036, fontWeight: "400" }}>
              Durum güncellemesi eklemek için dokunun
            </Text>
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.middleText}>Son güncellemeler</Text>
        </View>
        <View style={styles.flatStyle}>
          <FlatList
            data={status}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.statusAll}>
                <View style={styles.imagesContainer}>
                  <Image source={item.photos} style={styles.images} />
                </View>
                <View style={styles.statHead}>
                  <Text style={styles.statName}>{item.name}</Text>
                  <Text style={styles.statTime}>{item.createTime}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="pencil"
            size={24}
            color={"white"}
          />
        </View>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusText: {
    fontSize: windowWidth * 0.065,
    fontWeight: "600",
  },
  myCard: {
    flexDirection: "row",
    marginVertical: windowWidth * 0.05,
  },
  image: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    borderRadius: windowWidth * 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: windowWidth * 0.014,
  },
  myDesc: {
    paddingLeft: windowWidth * 0.05,
    paddingTop: windowWidth * 0.006,
  },
  middle: {
    paddingTop: windowWidth * 0.014,
  },
  middleText: {
    fontSize: windowWidth * 0.035,
    fontWeight: "600",
    color: "#696969",
  },
  flatStyle: {
    marginTop: windowWidth * 0.02,
  },
  statusAll: {
    flexDirection: "row",
    marginTop: windowWidth * 0.02,
  },
  statHead: {
    paddingLeft: windowWidth * 0.05,
    paddingTop: windowWidth * 0.01,
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
  iconContainer: {
    position: "absolute",
    right: windowWidth * 0.05,
    bottom: windowWidth * 0.05,
    backgroundColor: "green",
    borderRadius: windowWidth * 0.1,
    padding: windowWidth * 0.02,
    alignSelf: "flex-end",
  },
});

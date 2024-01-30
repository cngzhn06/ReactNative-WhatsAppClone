import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import DATA from "../fakeData/ChatData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const Chat = () => {
  const [chatData, setChatData] = useState(DATA);

  useEffect(() => {
    setChatData(DATA);
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.chat}>
            <Image source={item.photos} style={styles.image} />
            <View style={styles.chatCon}>
              <View style={styles.chatHead}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
              <View style={styles.chatMessage}>
                <Text style={styles.messageContent} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
                {item.totalUnread > 0 && (
                    <View style={styles.unreadContainer}>
                        <Text style={styles.unread}>
                            {item.totalUnread}
                        </Text>
                    </View>
                )}
              </View>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.Rightbutton}>
                    <MaterialCommunityIcons name="android-messages" size={30} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop:windowWidth*0.04
  },
  chat: {
    flexDirection: "row",
    marginHorizontal: windowWidth * 0.04,
    
  },
  image: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  chatCon: {
    flex: 5,
    borderBottomWidth: 0,
    marginLeft: windowWidth * 0.04,
    paddingBottom: windowWidth * 0.04,
    marginBottom: windowWidth * 0.01,
  },
  chatHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: windowWidth * 0.0008,
    marginTop: windowWidth * 0.000001,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatTime: {
    fontSize: 12,
    color: "#A0A09E",
  },
  chatMessage: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  messageContent: {
    fontSize:windowWidth*0.04,
    color:'#A0A09E',
    width:'90%'
  },
  unreadContainer: {
    height:windowWidth*0.048,
    width:windowWidth*0.06,
    borderRadius:windowWidth*0.048,
    backgroundColor:'#25D366',
    alignItems:'center',
    justifyContent:'center'
  },
  unread: {
    fontSize:windowWidth*0.03,
    color:'#fff',
    fontWeight:'600'
  },
  Rightbutton:{
    position:'absolute',
    backgroundColor:'#0e806a',
    bottom:windowWidth*0.015,
    right:windowWidth*0.04,
    width:windowWidth*0.1,
    height:windowWidth*0.1,
    borderRadius:windowWidth*0.25,
    alignItems:'center',
    justifyContent:'center'
  },
});

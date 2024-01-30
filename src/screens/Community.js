import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

const Community = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require("../../assets/com.png")} />
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Topluluklar sayesinde bağlantıda kalın
          </Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Topluluklar,üyelerin konulara göre ayrılmış gruplarda bir araya
            gelmelerini sağlar ve yönetici duyurularını almalarını
            kolaylaştırır. Eklendiğiniz tüm topluluklar burada gösterilir.
          </Text>
        </View>
        <View style={styles.exCom}>
          <TouchableOpacity>
            <Text style={styles.exText}>Örnek topluluklara bakın {`>`}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Topluluğunuzu oluşturun</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: windowWidth * 0.03,
  },
  image: {
    width: windowWidth,
    resizeMode: "contain",
    width: "100%",
  },
  title: {
    alignItems: "center",
  },
  titleText: {
    fontSize: windowWidth * 0.06,
    textAlign: "center",
    fontWeight: "700",
  },
  descContainer: {
    alignItems: "center",
    marginTop: windowWidth * 0.04,
  },
  descText: {
    textAlign: "center",
    fontSize: windowWidth * 0.041,
    fontWeight: "500",
  },
  exCom: {
    alignItems: "center",
    marginTop: windowWidth * 0.04,
  },
  exText: {
    color: "#3e826d",
    textAlign: "center",
    fontSize: windowWidth * 0.041,
    fontWeight: "500",
  },
  buttonContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:windowWidth*0.1,
  },
  button:{
    backgroundColor:'#0e826a',
    width:windowWidth*0.8,
    height:windowWidth*0.1,
    borderRadius:windowWidth*0.2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: windowWidth * 0.045,
    marginTop: 'auto', 
    marginBottom: 'auto', 
  },
  
});

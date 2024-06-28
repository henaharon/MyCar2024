import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const SelectService = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/images/roadside.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <Text style={styles.centerText}>שירותי דרך</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomePage')}>
            <Image
              source={require("../../assets/icons/x.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.text1}>איך אפשר לעזור לך?</Text>
            <Text style={styles.text2}>אנא בחר שירות</Text>
          </View>
          <View style={styles.flexWrapView}>
            <View style={styles.square}>
              <View style={styles.insideSquare}>
                <Image
                  source={require("../../assets/icons/IconsIndicatorLights.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>נורית אזהרה</Text>
              </View>
            </View>
            <View style={styles.square}>
              <View style={styles.insideSquare}>
                <Image
                  source={require("../../assets/icons/IconsWipers.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>החלפת מגבים</Text>
              </View>
            </View>
            <View style={styles.square}>
              <View style={styles.insideSquare}>
                <Image
                  source={require("../../assets/icons/IconsBrakes.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>בלמים</Text>
              </View>
            </View>
            <View style={styles.square}>
              <View style={styles.insideSquare}>
                <Image
                  source={require("../../assets/icons/IconsEngine.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>מנוע</Text>
              </View>
            </View>
            <View style={styles.square}>
              <TouchableOpacity
                style={styles.insideSquare}
                onPress={() => navigation.navigate('ServiceDetailsScreen')}
              >
                <Image
                  source={require("../../assets/icons/IconsBattery.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>מצבר</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.square}>
              <View style={styles.insideSquare}>
                <Image
                  source={require("../../assets/icons/IconsGear.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>תיבת הילוכים / גיר</Text>
              </View>
            </View>
            <View style={styles.lastSquare}>
              <View style={styles.insideSquare}>
                <Image
                  source={require("../../assets/icons/IconsGear.png")}
                  style={{ width: 40, height: 40 }}
                />
                <Text style={styles.squareText}>אחר / תקלה משביתה</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    marginLeft: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  centerText: {
    color: "white",
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
  body: {
    paddingLeft: windowWidth * 0.13,
    paddingRight: windowWidth * 0.13,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: windowHeight * 0.78,
    width: "100%",
  },
  text1: {
    fontWeight: "bold",
    paddingRight: 5,
    paddingTop: 15,
    textAlign: "right",
    fontSize: 20,
    color: "black",
  },
  text2: {
    paddingRight: 5,
    paddingBottom: 15,
    fontSize: 16,
    textAlign: "right",
  },
  flexWrapView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  square: {
    margin: 2,
    justifyContent: "center",
    marginBottom: 5,
    alignItems: "center",
    width: windowWidth * 0.36,
    height: windowHeight * 0.14,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
  lastSquare: {
    marginBottom: 5,
    alignItems: "center",
    height: windowHeight * 0.14,
    width: "100%",
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
  insideSquare: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    gap: 28,
  },
  squareText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});

export default SelectService;

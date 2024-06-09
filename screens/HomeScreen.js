import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Swiper from "react-native-swiper"
import PrimaryButton from "../component/Buttons/PrimaryButton"
import SecondaryButton from "../component/Buttons/SecondaryButton"
export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigation = useNavigation()

  const handleIndexChanged = (index) => {
    setCurrentIndex(index)
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#582AB7", "#011932"]}
        start={[0, 0]}
        end={[1, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          showsPagination={false}
          onIndexChanged={handleIndexChanged}
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/slide_1.png")}
              style={styles.image1}
            />
            <Text style={styles.textTop}>
              Enjoy best in the market exchange rates
            </Text>
            <Text style={styles.textBottom}>
              Multiple delivery options Multiple delivery options Multiple
              delivery options{" "}
            </Text>
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/slide_2.png")}
              style={styles.image2}
            />
            <Text style={styles.textTop}>
              Bank Transfer, Cah Pick up, swift financial service
            </Text>
            <Text style={styles.textBottom}>
              Multiple delivery options Multiple delivery options Multiple
              delivery options
            </Text>
          </View>
        </Swiper>
        <View style={styles.indicatorContainer}>
          <View
            style={[
              styles.indicator,
              { backgroundColor: currentIndex === 0 ? "#00EACB" : "#C0C0C0" },
            ]}
          />
          <View
            style={[
              styles.indicator,
              { backgroundColor: currentIndex === 1 ? "#00EACB" : "#C0C0C0" },
            ]}
          />
        </View>
        <View style={styles.btnCov}>
          <View style={styles.buttons}>
            <View style={{ width: "50%" }}>
              <SecondaryButton
                onpress={() => navigation.navigate("Login")}
                text="Login"
                color="#FFFFFF4D"
              />
            </View>
            <View style={{ width: "50%" }}>
              <PrimaryButton
                onpress={() => navigation.navigate("Signup")}
                text="Get Started"
                color="#00EACB"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    width: 295,
    height: 320,
  },
  image2: {
    width: 380,
    height: 350,
    marginLeft: -45,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFFFFF",
    fontFamily: "Jost",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTop: {
    fontSize: 24,
    width: "90%",
    marginTop: 40,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 29,
    color: "#fff",
    fontFamily: "Jost",
  },
  textBottom: {
    width: "90%",
    fontSize: 16,
    marginTop: 10,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 19.2,
    color: "#fff",
    fontFamily: "Jost",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  indicator: {
    width: 50,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    width: "90%",
    gap: 10,
  },
  btnCov: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
})

import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const Step1 = ({ nextPage, openFgtPwd, backPage }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.section}>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.description}>
              Input your details and start transacting
            </Text>
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Email Address"
              onChangeText={null}
              value=""
              label="Email Address"
              svg={null}
            />
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Password"
              onChangeText={null}
              value=""
              label="Password"
              svg={null}
            />
            <TouchableOpacity onPress={openFgtPwd}>
              <Text style={styles.fgtPwd}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <PrimaryButton
            onpress={() => navigation.navigate("Dashboard")}
            text="Login"
            color="#00EACB"
          />
        </View>
      </View>
    </View>
  )
}

export default Step1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 70,
    width: "90%",
    paddingHorizontal: 10, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 30, // Add margin bottom for spacing between sections
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10, // Add margin bottom for spacing between title and description

    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    marginBottom: 10, // Add margin bottom for spacing between description and input fields
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 20,
    textAlign: "left",
  },
  inputSection: {
    marginBottom: 20, // Add margin bottom for spacing between input fields
  },
  fgtPwd: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "left",
    color: "#fff",
  },
  backcontainer: {
    paddingVertical: 15,
  },
})

import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const Step4 = ({ nextPage, backPage }) => {
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
            <Text style={styles.title}>What’s Your Phone Number?</Text>
            <Text style={styles.description}>
              Please add a phone number that belongs to you.
            </Text>
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="+234 0000000000000"
              onChangeText={null}
              value=""
              label="Phone Number"
              svg={null}
            />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <PrimaryButton onpress={nextPage} text="Next" color="#00EACB" />
        </View>
      </View>
    </View>
  )
}

export default Step4
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 70,
    paddingHorizontal: 30, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 20, // Add margin bottom for spacing between sections
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10, // Add margin bottom for spacing between title and description

    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    marginBottom: 10, // Add margin bottom for spacing between description and input fields

    fontSize: 15,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
  },
  inputSection: {
    marginBottom: 20, // Add margin bottom for spacing between input fields
  },
  resendOpen: {
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    marginTop: 20,
  },
  rsend: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    color: "#00EACB",
  },
  open: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonSection: {},
  backcontainer: {
    paddingVertical: 15,
  },
})

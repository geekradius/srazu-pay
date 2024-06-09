import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const Step10 = ({ nextPage, backPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Email & Password</Text>
        <Text style={styles.description}>
          Create a SrazuPay profile with a few details. Your password must have
          at least 8 characters including letters and a number.
        </Text>
      </View>
      <View style={styles.inputSection}>
        <PrimaryInput
          placeholder="Email Address"
          onChangeText={null}
          value=""
          svg={null}
        />
      </View>
      <View style={styles.buttonSection}>
        <PrimaryButton onpress={nextPage} text="Next" color="#00EACB" />
      </View>
    </View>
  )
}

export default Step10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20, // Add padding horizontally
  },
  section: {
    marginBottom: 20, // Add margin bottom for spacing between sections
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10, // Add margin bottom for spacing between title and description
  },
  description: {
    fontSize: 16,
    marginBottom: 10, // Add margin bottom for spacing between description and input fields
  },
  inputSection: {
    marginBottom: 20, // Add margin bottom for spacing between input fields
    width: "100%", // Set width to 100%
  },
  buttonSection: {
    width: "100%", // Set width to 100%
  },
  backcontainer: {
    paddingVertical: 15,
  },
})

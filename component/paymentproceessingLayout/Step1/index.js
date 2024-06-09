import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const Step1 = ({ nextPage, backPage }) => {
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
            <Text style={styles.title}>Email & Password</Text>
            <Text style={styles.description}>
              Create a SrazuPay profile with a few details. Your password must
              have at least 8 characters including letters and a number.
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
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Confirm Password"
              onChangeText={null}
              label="Confirm Password"
              value=""
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

export default Step1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 70,
    paddingHorizontal: 20, // Add padding horizontally
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
  backcontainer: {
    paddingVertical: 15,
  },
})

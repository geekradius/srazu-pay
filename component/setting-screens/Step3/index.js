import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const StepThreeSettings = ({ nextPage, backPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
        <Text style={styles.backcontainerText}> Password</Text>
      </View>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="youremail@here.com"
              onChangeText={null}
              value=""
              label="Verification Code"
              svg={null}
            />
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="youremail@here.com"
              onChangeText={null}
              value=""
              label="Verification Code"
              svg={null}
            />
          </View>
        </View>

        <View style={styles.buttonSection}>
          <PrimaryButton
            onpress={nextPage}
            text="Save Changes"
            color="#00EACB"
          />
        </View>
      </View>
    </View>
  )
}

export default StepThreeSettings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    marginTop: 20,
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  backcontainerText: {
    width: "60%",
    fontFamily: "Jost",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "23.12px",
    color: "#fff",
  },
})

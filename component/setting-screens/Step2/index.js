import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const StepTwoSettings = ({ nextPage, backPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
        <Text style={styles.backcontainerText}> My details</Text>
      </View>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Johny doe"
              onChangeText={null}
              value=""
              label="Name"
              svg={null}
            />
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="08111982834784"
              onChangeText={null}
              label="Phone Number"
              value=""
              svg={null}
            />
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

export default StepTwoSettings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    marginTop: 20,
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
    marginBottom: 40, // Add margin bottom for spacing between input fields
  },
  backcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
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

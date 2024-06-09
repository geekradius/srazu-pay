import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import PrimaryInput from "../../Inputs/primaryInput"

const StepTwoWith = ({ nextPage, backPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.addBenContainer}>
        <View style={styles.addBenContainerInner}>
          <Text style={styles.addBenContainerText}>Total Rubble available</Text>
          <Text style={styles.addBenContainerCash}>₽ 24,685.50</Text>
        </View>
      </View>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Choose bank"
              onChangeText={null}
              value=""
              label="Select a bank"
              svg={null}
            />
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="012344656789"
              onChangeText={null}
              value=""
              label="Account Number"
              svg={null}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <PrimaryButton onpress={nextPage} text="Continue" color="#00EACB" />
      </View>
    </View>
  )
}

export default StepTwoWith
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 30,
    width: "100%",
    paddingHorizontal: 10, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
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
  addBenContainerText: {
    fontSize: "13px",
    fontWeight: "regular",
    lineHeight: "24px",
    textAlign: "center",
    color: "#fff",
  },
  addBenContainerCash: {
    fontSize: "32px",
    fontWeight: "regular",
    textAlign: "center",
    color: "#fff",
  },
  addBenContainer: {
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#FFFFFF4D",
    borderRadius: "10px",
  },
  addBenContainerInner: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "10px",
  },
})

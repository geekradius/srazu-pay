import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import SuccessfulSvg from "../../../assets/svgs/successfulSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"

const StepFiveWith = ({ nextPage, backPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.screenCointainer}>
        <View style={styles.backcontainer}>
          <TouchableOpacity onPress={backPage}>
            <BackSvg />
          </TouchableOpacity>
        </View>
        <View style={styles.successView}>
          <SuccessfulSvg />
          <Text style={styles.succesText}>
            ₽ 400.00 Sent to Oluwwaburna Khalifer
          </Text>
        </View>

        <View style={styles.buttonSection}>
          <View style={styles.btnCov}>
            <View style={styles.buttons}>
              <View style={{ width: "100%" }}>
                <PrimaryButton onpress={nextPage} text="Okay" color="#00EACB" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StepFiveWith
const styles = StyleSheet.create({
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "25%",
    gap: 30,
  },
  summaryFlex: {
    display: "flex",
    justifyContent: "space-between",

    gap: 30,
  },
  accountInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  copy: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },
  dateSummaryh6: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#FFFFFF",
  },

  btnCovh6: {
    fontSize: 14,
    fontWeight: "regular",
    lineHeight: 20,
    textAlign: "center",
    color: "#FFFFFFB2",
  },
  dateSummaryh5: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#FFFFFF",
    textAlign: "center",
  },
  dateSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  accountInfoh6: {
    fontSize: 14,
    fontWeight: "regular",
    lineHeight: 20,
    color: "#FFFFFF",
  },
  accountInfoh61: {
    fontSize: 14,
    fontWeight: "regular",
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "end",
  },
  accountInfoh1: {
    fontSize: 20,
    fontWeight: "bold",

    marginTop: "12%",
    lineHeight: 20,
    color: "#FFFFFF",
  },
  accountInfoh11: {
    fontSize: 20,
    fontWeight: "bold",

    color: "#00EACB",
  },
  container: {
    justifyContent: "center",
    paddingVertical: 20,
    width: "100%",
    paddingHorizontal: 0, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 20, // Add margin bottom for spacing between sections
  },
  title: {
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: 10, // Add margin bottom for spacing between title and description
    marginTop: "10%",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginBottom: 10, // Add margin bottom for spacing between description and input fields

    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    width: "100%",
    gap: 10,
  },
  btnCov: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  successView: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  succesText: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    width: "70%",
    color: "#FFFFFF",
  },
  screenCointainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
})

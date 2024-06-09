import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import CheckSvg from "../../../assets/svgs/checkSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"

const Step8 = ({ nextPage, tryAgain, backPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.resendOpen}>
            <CheckSvg />
            <View style={styles.resendText}>
              <Text style={styles.rsend}>Password Reset Successful</Text>
            </View>
            <View style={styles.resendText}>
              <Text style={styles.open}>
                Enjoy transacting on your SrazuPay account
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonSection}>
          <PrimaryButton onpress={nextPage} text="Next" color="#00EACB" />
        </View>
      </View>
    </View>
  )
}

export default Step8
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
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    fontSize: 15,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
  },
  inputSection: {
    marginBottom: 20,
  },
  resendOpen: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 120,
    width: "100%",
  },
  resendText: {
    width: "90%",
  },
  rsend: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    color: "#fff",
  },
  open: {
    fontSize: 15,
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  backcontainer: {
    paddingVertical: 15,
  },
})

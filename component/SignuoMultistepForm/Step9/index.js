import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import FailedSvg from "../../../assets/svgs/failedSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import SecondaryButton from "../../Buttons/SecondaryButton"

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
            <FailedSvg />
            <View style={styles.resendText}>
              <Text style={styles.rsend}>We're verifying your details</Text>
            </View>
            <View style={styles.resendText}>
              <Text style={styles.open}>
                We'll let you know as soon as we're done verifying them.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.btnCov}>
          <View style={styles.buttons}>
            <View style={{ width: "50%" }}>
              <SecondaryButton
                onpress={tryAgain}
                text="Cancel"
                color="#FFFFFF4D"
              />
            </View>
            <View style={{ width: "50%" }}>
              <PrimaryButton
                onpress={tryAgain}
                text="Try Again"
                color="#00EACB"
              />
            </View>
          </View>
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
    paddingHorizontal: 10,
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
  backcontainer: {
    paddingVertical: 15,
  },
})

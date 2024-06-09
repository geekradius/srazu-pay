import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import SelfieSvg from "../../../assets/svgs/slfiSvg"
import ValidId from "../../../assets/svgs/validId"
import PrimaryButton from "../../Buttons/PrimaryButton"

const Step6 = ({ nextPage, backPage }) => {
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
            <Text style={styles.title}>
              To finalise registration, upload the following document
            </Text>
          </View>
          <View style={styles.validSelfie}>
            <View style={styles.validSelfieLayout}>
              <SelfieSvg />
              <View style={styles.validSelfieCopy}>
                <Text style={styles.validSelfieTitle}>A Selfie</Text>
                <Text style={styles.validSelfieDesc}>
                  Upload a clear photo of your face taken in a well-lit space.
                </Text>
              </View>
            </View>
            <View style={styles.validSelfieLayout}>
              <ValidId />
              <View>
                <Text style={styles.validSelfieTitle}>A Valid ID</Text>
                <Text style={styles.validSelfieDesc}>
                  Upload a photo of your ID
                </Text>
              </View>
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

export default Step6
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 70,
    paddingHorizontal: 40, // Add padding horizontally
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

    fontSize: 34,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
  },
  validSelfie: {
    gap: 30,
  },
  validSelfieLayout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  validSelfieTitle: {
    fontFamily: "Jost",
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 18,
    textAlign: "left",
    color: "#FFFFFF",
  },
  validSelfieDesc: {
    fontFamily: "Jost",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
    color: "#FFFFFF",
  },
  validSelfieCopy: {
    width: "90%",
  },
  backcontainer: {
    paddingVertical: 15,
  },
})

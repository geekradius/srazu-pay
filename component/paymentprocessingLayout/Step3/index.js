import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import SuccessfulSvg from "../../../assets/svgs/successfulSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import SecondaryButton from "../../Buttons/SecondaryButton"
import GlassCVard from "../../glassCard"

const Step3 = ({ nextPage, backPage }) => {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View>
        <GlassCVard>
          <View style={styles.summaryFlex}>
            <View style={styles.dateSummary}>
              <SuccessfulSvg />
            </View>

            <View style={styles.accountInfo}>
              <View>
                <Text style={styles.accountInfoh6}>Amount</Text>
                <Text style={styles.accountInfoh1}>₦ 785,000.00</Text>
              </View>
              <View style={styles.account}>
                <Text style={styles.accountInfoh61}>Account</Text>
                <View style={styles.copy}>
                  <Text style={styles.accountInfoh1}>Oluwaburna Khalifa</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#DBDCE0",
              }}
            />
            <View style={styles.accountInfo}>
              <View>
                <Text style={styles.accountInfoh6}>Amount</Text>
              </View>
              <View>
                <Text style={styles.accountInfoh61}>23377494940</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#DBDCE0",
              }}
            />
            <View style={styles.accountInfo}>
              <View>
                <Text style={styles.accountInfoh6}>Amount</Text>
              </View>
              <View>
                <Text style={styles.accountInfoh61}>VODDHF--12239</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#DBDCE0",
              }}
            />
            <View style={styles.accountInfo}>
              <View>
                <Text style={styles.accountInfoh6}>Amount</Text>
              </View>
              <View>
                <Text style={styles.accountInfoh61}>
                  Mar 22, 2024 at 7:00 am
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#DBDCE0",
              }}
            />
          </View>
        </GlassCVard>
      </View>

      <View style={styles.buttonSection}>
        <View style={styles.btnCov}>
          <View style={styles.buttons}>
            <View style={{ width: "49%" }}>
              <SecondaryButton
                onpress={() => navigation.navigate("Login")}
                text="Save Reciept"
                color="#FFFFFF4D"
              />
            </View>
            <View style={{ width: "49%" }}>
              <PrimaryButton
                onpress={nextPage}
                text="Complete"
                color="#00EACB"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Step3
const styles = StyleSheet.create({
  stepcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: "10%",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "25%",
    gap: 30,
  },
  step: {
    width: "34%",
    height: 10,
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
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
    lineHeight: 20,

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
    lineHeight: 20,
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
  account: {
    display: "flex",
    alignItems: "flex-end",
  },
  accountInfoh1: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "12%",
    lineHeight: 20,
    color: "#FFFFFF",
  },
  container: {
    justifyContent: "center",
    paddingVertical: 30,
    width: "100%",
    paddingHorizontal: 10, // Add padding horizontally
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
})

import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import CopySvg from "../../../assets/svgs/copySvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import SecondaryButton from "../../Buttons/SecondaryButton"
import GlassCVard from "../../glassCard"

const StepThreeWallet = ({ nextPage, backPage }) => {
  const [activeStep, setActiveStep] = useState(1)

  const renderSteps = () => {
    const steps = []
    for (let i = 1; i <= 3; i++) {
      steps.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.step,
            { backgroundColor: i === activeStep ? "#00EACB" : "#FFFFFF4D" },
          ]}
          onPress={() => setActiveStep(i)}
        />
      )
    }
    return steps
  }
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.stepcontainer}>{renderSteps()}</View>
      <View>
        <GlassCVard>
          <View style={styles.summaryFlex}>
            <View style={styles.dateSummary}>
              <Text style={styles.dateSummaryh6}>Today, 13:40:00</Text>
              <Text style={styles.dateSummaryh5}>
                To complete payment, send ₦ 785,000.00 via Bank Transfer To
                9876543210, First Bank, Srazu Advertising
              </Text>
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
                <Text style={styles.accountInfoh1}>₦ 785,000.00</Text>
              </View>
              <View>
                <Text style={styles.accountInfoh61}>Account</Text>
                <View style={styles.copy}>
                  <CopySvg />
                  <Text style={styles.accountInfoh1}>9876543210</Text>
                </View>
              </View>
            </View>
          </View>
        </GlassCVard>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          Disclaimer - Third party payments are prohibited
        </Text>
        <Text style={styles.description}>Order Accepted - 00:45</Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.btnCov}>
          <Text style={styles.btnCovh6}>
            Ensure the payment is successful, before clicking on Payment
            Complete
          </Text>
          <View style={styles.buttons}>
            <View style={{ width: "45%" }}>
              <SecondaryButton
                onpress={() => navigation.navigate("Login")}
                text="Cancel"
                color="#FFFFFF4D"
              />
            </View>
            <View style={{ width: "55%" }}>
              <PrimaryButton
                onpress={nextPage}
                text="Payment Complete"
                color="#00EACB"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StepThreeWallet
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
  accountInfoh1: {
    fontSize: 20,
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

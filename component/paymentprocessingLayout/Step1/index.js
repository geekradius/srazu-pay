import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"
import BackSvg from "../../../assets/svgs/backSvg"
import CopySvg from "../../../assets/svgs/copySvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import SecondaryButton from "../../Buttons/SecondaryButton"
import GlassCVard from "../../glassCard"

const Step1 = ({
  nextPage,
  openFgtPwd,
  backPage,
  openComplete,
  openDecline,
  onHold,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const navigation = useNavigation()
  const onClose = () => {
    setIsVisible(false)
  }
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
              <Text style={styles.dateSummaryh6}>Today, 13:40:00</Text>
              <Text style={styles.dateSummaryh5}>
                Transfer the sum of ₽ 56,071.43 to Oluwaburna Khalifas Sber Bank
                account
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

      <View style={styles.buttonSection}>
        <View style={styles.btnCov}>
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
                onpress={() => setIsVisible((prev) => !prev)}
                text="Process Payment"
                color="#00EACB"
              />
            </View>
          </View>
        </View>
      </View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <View style={styles.modalcontainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#DBDCE0",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openComplete} style={styles.content}>
            <Text style={styles.modslCOntentText}>Complete Payment</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#DBDCE0",
            }}
          />
          <TouchableOpacity onPress={openDecline} style={styles.content}>
            <Text style={styles.modslCOntentText}>Decline payment</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#DBDCE0",
            }}
          />
          <TouchableOpacity onPress={onHold} style={styles.content}>
            <Text style={styles.modslCOntentText}>Put Payment On Hold</Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#DBDCE0",
            }}
          />
        </View>
      </Modal>
    </View>
  )
}

export default Step1

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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalcontainer: {
    backgroundColor: "#1D1F5C",
    height: "35%", // Adjust height as needed
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 60,
  },
  closeButton: {
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  modslCOntentText: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
})

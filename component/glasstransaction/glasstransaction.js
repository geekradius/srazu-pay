import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import CopySvg from "../../assets/svgs/copySvg"
import TransactionsSvg from "../../assets/svgs/transactionsSvg"
import PrimaryButton from "../Buttons/PrimaryButton"
import SecondaryButton from "../Buttons/SecondaryButton"
import GlassCVard from "../glassCard"

const Glasstransaction = () => {
  const navigation = useNavigation()
  return (
    <GlassCVard>
      <View style={styles.botomg}>
        <View style={styles.transactLeft}>
          <TransactionsSvg />
          <View style={styles.glassbotomText1}>
            <Text style={styles.glassbotomTextH6}>
              Transfer from Oluwaburna..
            </Text>
            <View style={styles.arrowDownH6}>
              <Text style={styles.glassbotomTextH1}>Gtbank - 0224700385</Text>
              <CopySvg />
            </View>
          </View>
        </View>
        <View style={styles.cpyBtm6}>
          <Text style={styles.glassbotomTextH1}>₽670,000</Text>
          <Text style={styles.glassbotomTextH1}>₽670,000</Text>
        </View>
      </View>

      <View style={styles.btnCov}>
        <View style={styles.buttons}>
          <View style={{ width: "50%" }}>
            <SecondaryButton onpress={null} text="Chat" color="#FFFFFF4D" />
          </View>
          <View style={{ width: "50%" }}>
            <PrimaryButton
              onpress={() => navigation.navigate("Paymentproceessing")}
              text="Confirm"
              color="#00EACB"
            />
          </View>
        </View>
      </View>
    </GlassCVard>
  )
}

export default Glasstransaction

const styles = StyleSheet.create({
  viewGlassCov: {
    marginBottom: "10%",
  },
  glassbotomTextH6: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
  },
  glassbotomTextH1: {
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
  },
  cpyBtm6: {
    display: "flex",
    alignItems: "center",
  },
  transactLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5%",
  },
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  backcontainer: {
    backgroundColor: "#1C1F5A",
  },
  userProf: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10%",
  },
  backcontainer: {
    paddingVertical: 15,
  },
  userNotifs: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userNotifss: {
    width: "50%",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    width: 40,
    height: 40,
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "23.12px",
    textAlign: "left",
    color: "#fff",
  },
  bg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  glassText1: {
    display: "flex",
    gap: "30%",
  },
  glassTextH6: {
    fontSize: "10px",
    fontWeight: "regular",

    textAlign: "left",
    color: "#fff",
  },
  glassTextH1: {
    fontSize: "24px",
    fontWeight: "bold",

    textAlign: "left",
    color: "#fff",
  },
  arrowDownH6: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexDirection: "row",
  },
  bgBtm: {
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(219, 220, 224, 0.5)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10%",
    borderRadius: "17px",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  glassBtmTextH6: {
    fontSize: "14px",
    fontWeight: "regular",
    lineHeight: "23px",
    textAlign: "center",
    color: "#fff",
  },
  glassBtmTextH1: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "23px",
    textAlign: "center",
    color: "#fff",
  },
  verticalLine: {
    borderRightColor: "rgba(219, 220, 224, 1)",
    borderRightWidth: 1,
    height: "100%", // Adjust height as needed
  },
  tabsContainer: {
    marginTop: "10%",
    flexDirection: "row",
    marginBottom: "5%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(21, 30, 79, 1)",
    height: 40,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  tabText: {
    color: "black", // Change text color to your preference
  },
  firstTab: {
    borderRightWidth: 1,
    borderColor: "rgba(21, 30, 79, 1)",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  lastTab: {
    borderRightWidth: 1,
    borderColor: "rgba(53, 53, 110, 1)",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  activeTab: {
    backgroundColor: "rgba(0, 234, 203, 1)",
  },
  activeTabText: {
    color: "white", // Change text color to your preference
  },
  tabText: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
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
  botomg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})

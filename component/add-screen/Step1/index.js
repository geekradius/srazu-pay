import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ArrowDown from "../../../assets/svgs/arrowDown"
import BackSvg from "../../../assets/svgs/backSvg"
import ConvertSvg from "../../../assets/svgs/convertSvg"
import TransferTimeline from "../../../assets/svgs/transferTimeline"
import PrimaryButton from "../../Buttons/PrimaryButton"
import GlassCVard from "../../glassCard"
import SecondaryGlass from "../../secondaryGlass/secondaryGlass"

const StepOneAdd = ({ nextPage, openFgtPwd, backPage }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity
          style={styles.backCont}
          onPress={() => navigation.navigate("Wallets")}
        >
          <BackSvg />
          <Text style={styles.backcontainerTsfHist}>Add to wallet</Text>
        </TouchableOpacity>
      </View>
      <View>
        <GlassCVard>
          <View style={styles.flexConvert}>
            <View>
              <SecondaryGlass>
                <View style={styles.bg}>
                  <View style={styles.glassText1}>
                    <Text style={styles.glassTextH6}>Recipient receives</Text>
                    <View style={styles.arrowDownH6}>
                      <Image
                        source={require("../../../assets/rubble.png")}
                        style={styles.image1}
                      />
                      <Text style={styles.glassTextH1}>RUB</Text>
                      <ArrowDown />
                    </View>
                  </View>

                  <Text style={styles.glassTextH1}>₽ 0.00</Text>
                </View>
              </SecondaryGlass>
            </View>
            <View style={styles.converView}>
              <ConvertSvg />
              <Text style={styles.convertText}>₽1.00 = ₦12.00</Text>
            </View>
            <View style={styles.viewDown}>
              <SecondaryGlass>
                <View style={styles.bg}>
                  <View style={styles.glassText1}>
                    <Text style={styles.glassTextH6}>You send exactly</Text>
                    <View style={styles.arrowDownH6}>
                      <Image
                        source={require("../../../assets/naira.png")}
                        style={styles.image1}
                      />
                      <Text style={styles.glassTextH1}>NGN</Text>
                      <ArrowDown />
                    </View>
                  </View>
                  <Text style={styles.glassTextH1}>₽ 0.00</Text>
                </View>
              </SecondaryGlass>
            </View>
          </View>
          <View style={styles.timeLineMid}>
            <TransferTimeline />
          </View>
          <View style={styles.sendBal}>
            <Text style={styles.sendBalSend}>Send 100% : ₽ 0.00</Text>
            <Text style={styles.sendBalBal}>
              Keep Balance in Wallet: ₽ 0.00 (Real Time APR 0.03% - 0.15%)
            </Text>
          </View>
        </GlassCVard>
        <View style={{ width: "100%", marginTop: 20 }}>
          <PrimaryButton
            onpress={() => nextPage()}
            text="Proceed"
            color="#00EACB"
          />
        </View>
      </View>
    </View>
  )
}

export default StepOneAdd

const styles = StyleSheet.create({
  backCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backcontainerTsfHist: {
    width: "65%",
    fontFamily: "Jost",
    fontSize: "18px",
    fontWeight: 700,

    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
  },
  container: {
    flex: 1,
    paddingVertical: 30,
    width: "100%",
    paddingHorizontal: 5,
  },
  containerInner: {
    flex: 1,
    gap: "20px",
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
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
    marginBottom: 20, // Add margin bottom for spacing between input fields
  },
  fgtPwd: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "left",
    color: "#fff",
  },
  backcontainer: {
    paddingVertical: 5,
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
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  buttonSection: {
    display: "flex",
    marginTop: "30%",
    alignItems: "center",
    gap: "20px",
  },
  buttonSectionzH2: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "24px",
    textAlign: "center",
    color: "#fff",
  },
  buttonSectionzH4: {
    fontSize: "14px",
    fontWeight: "regular",
    lineHeight: "24px",
    textAlign: "center",
    color: "#fff",
  },
  addBenContainerText: {
    fontSize: "13px",
    fontWeight: "regular",
    lineHeight: "24px",
    textAlign: "center",
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 0,
    width: "100%",
    gap: 10,
  },
  btnCov: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "10%",
  },
  timeLineMid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
    marginTop: 20,
  },
  sendBal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  sendBalSend: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "17px",
    textAlign: "center",
    color: "#fff",
  },
  sendBalBal: {
    fontSize: "10px",
    fontWeight: "bold",
    lineHeight: "17px",
    textAlign: "center",
    color: "#fff",
  },
  flexConvert: {
    display: "flex",
    gap: "30px",
  },
  converView: {
    display: "flex",
    gap: "10px",
    flexDirection: "row",
    alignItems: "center",
  },
  convertText: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "23.12px",
    textAlign: "left",
    color: "#fff",
  },
})

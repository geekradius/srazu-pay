import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import AddSvg from "../../assets/svgs/addSvg"
import ArrowDown from "../../assets/svgs/arrowDown"
import BackSvg from "../../assets/svgs/backSvg"
import ConvertSvg from "../../assets/svgs/convertSvg"
import MoreSvg from "../../assets/svgs/moreSvg"
import NotificationsSvg from "../../assets/svgs/notificationsSvg"
import TransferTimeline from "../../assets/svgs/transferTimeline"
import WithdrawSvg from "../../assets/svgs/withdrawSvg"
import PrimaryButton from "../../component/Buttons/PrimaryButton"
import SecondaryButton from "../../component/Buttons/SecondaryButton"
import GlassCVard from "../../component/glassCard"
import SecondaryGlass from "../../component/secondaryGlass/secondaryGlass"

const Wallets = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={null}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#582AB7", "#011932", "#582AB7", "#011932"]}
        start={[0, 0]}
        end={[1, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.userProf}>
        <View style={styles.userNotifss}>
          <Image
            source={require("../../assets/unsplash_ymY5oadXAZI.png")}
            style={styles.image1}
          />
          <Text style={styles.name}>Idara Demas (Admin)</Text>
        </View>
        <View style={styles.userNotifs}>
          <NotificationsSvg />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.viewDown}>
          <GlassCVard>
            <View style={styles.bg}>
              <View style={styles.glassText1}>
                <Text style={styles.glassTextH6}>Russian Ruble</Text>
                <View style={styles.arrowDownH6}>
                  <Text style={styles.glassTextH1}>₽ 24,685.50</Text>
                  <ArrowDown />
                </View>
              </View>
              <MoreSvg />
            </View>
            <View style={styles.btnCov}>
              <View style={styles.buttons}>
                <View style={{ width: "49%" }}>
                  <SecondaryButton
                    onpress={() => navigation.navigate("Addwallet")}
                    text="Add"
                    color="#FFFFFF4D"
                    svg={<AddSvg />}
                  />
                </View>
                <View style={{ width: "49%" }}>
                  <SecondaryButton
                    onpress={() => navigation.navigate("Withdraw")}
                    text="Withdraw"
                    color="#FFFFFF4D"
                    svg={<WithdrawSvg />}
                  />
                </View>
              </View>
            </View>
          </GlassCVard>
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
                          source={require("../../assets/rubble.png")}
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
                          source={require("../../assets/naira.png")}
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
            <View style={{ width: "100%" }}>
              <PrimaryButton
                onpress={() => navigation.navigate("Beneficiary")}
                text="Continue"
                color="#00EACB"
              />
            </View>
          </GlassCVard>
        </View>
      </ScrollView>
    </View>
  )
}

export default Wallets
const styles = StyleSheet.create({
  converView: {
    display: "flex",
    gap: "10px",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  convertText: {
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "23.12px",
    textAlign: "left",
    color: "#fff",
  },
  backcontainer: {
    backgroundColor: "#1C1F5A",
  },
  viewDown: {
    marginBottom: "10%",
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
    width: "10%",
    flexDirection: "row",
    alignItems: "end",
    justifyContent: "end",
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
})

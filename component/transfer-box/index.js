import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ConvertSvg from "../../assets/svgs/convertSvg"
import TransactionsSvg from "../../assets/svgs/transactionsSvg"
import GlassCVard from "../glassCard"

const TransferBox = () => {
  return (
    <GlassCVard>
      <View>
        <Text style={styles.convertDate}>Today, 13:40</Text>
        <View>
          <View style={styles.convertFlex}>
            <View style={styles.convertFlexInn}>
              <ConvertSvg />
              <View style={styles.convertFlexInnView}>
                <Text style={styles.convertFlexInnTxt}>Rube to Naira</Text>
                <View style={styles.convertFlexInnSuccss}>
                  <Text>Today, 13:40</Text>
                </View>
              </View>
            </View>
            <View style={styles.convertFlexInnView}>
              <Text style={styles.convertFlexInnTxt}>- ₦750,00.00 </Text>
              <Text style={styles.convertFlexInnTxt}>₽ 56,071.43</Text>
            </View>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.convertFlex}>
            <View style={styles.convertFlexInn}>
              <TransactionsSvg />
              <View style={styles.convertFlexInnView}>
                <Text style={styles.convertFlexInnTxt}>From Wallet</Text>
                <View style={styles.convertFlexInnSuccss}>
                  <Text>Today, 13:40</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.convertFlexInnTxt}>- ₦750,00.00 </Text>
            </View>
          </View>
        </View>
      </View>
    </GlassCVard>
  )
}

export default TransferBox
const styles = StyleSheet.create({
  convertFlexInnTxt: {
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
  },
  convertDate: {
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
    opacity: 0.7,
  },
  convertFlexInnSuccss: {
    backgroundColor: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: "30%",
  },
  horizontalLine: {
    borderBottomColor: "rgba(219, 220, 224, 1)",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10, // Optional: Adds space above and below the line
  },
  convertFlexInnView: {
    display: "flex",
    gap: 10,
  },
  convertFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  convertFlexInn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    justifyContent: "space-between",
  },
  containerInner: {
    flex: 1,
    gap: "20px",
  },
})

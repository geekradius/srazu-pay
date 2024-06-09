import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import SearchSvg from "../../../assets/svgs/searchSvg"
import SearchInput from "../../Inputs/searchInput"
import TransferBox from "../../transfer-box"

const StepOneWallet = ({ nextPage, openFgtPwd, backPage }) => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabPress = (index) => {
    setActiveTab(index)
    // Add your logic here to handle tab change
  }
  const [activeTabTwo, setActiveTabTwo] = useState(0)

  const handleTabTwoPress = (index) => {
    setActiveTabTwo(index)
    // Add your logic here to handle tab change
  }

  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <Text style={styles.backcontainerTsfHist}>Transaction Hisory</Text>
      </View>
      <View>
        <View style={styles.inputSection}>
          <SearchInput
            placeholder=""
            onChangeText=""
            value=""
            svg={<SearchSvg />}
            label=""
          />
        </View>
      </View>
      <View style={styles.containerInner}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              styles.firstTab,
              activeTabTwo === 0 && styles.activeTab,
            ]}
            onPress={() => handleTabTwoPress(0)}
          >
            <Text
              style={[
                styles.tabText,
                activeTabTwo === 0 && styles.activeTabText,
              ]}
            >
              Currency
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTabTwo === 2 && styles.activeTab]}
            onPress={() => handleTabTwoPress(2)}
          >
            <Text
              style={[
                styles.tabText,
                activeTabTwo === 2 && styles.activeTabText,
              ]}
            >
              Date
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              styles.lastTab,
              activeTabTwo === 3 && styles.activeTab,
            ]}
            onPress={() => handleTabTwoPress(3)}
          >
            <Text
              style={[
                styles.tabText,
                activeTabTwo === 3 && styles.activeTabText,
              ]}
            >
              Status
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.transferBoxFlex}>
            <TransferBox />

            <TransferBox />
            <TransferBox />
            <TransferBox />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default StepOneWallet

const styles = StyleSheet.create({
  backcontainerTsfHist: {
    fontFamily: "Jost",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "23px",
    textAlign: "left",
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 30,
    width: "100%",
    paddingHorizontal: 10, // Add padding horizontally
  },
  transferBoxFlex: {
    display: "flex",
    gap: 30,
  },
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
  section: {
    marginBottom: 30, // Add margin bottom for spacing between sections
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10, // Add margin bottom for spacing between title and description

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
    marginBottom: 5, // Add margin bottom for spacing between input fields
  },
  fgtPwd: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "left",
    color: "#fff",
  },
  backcontainer: {
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  tabsContainer: {
    marginTop: "10%",
    flexDirection: "row",
    marginBottom: "5%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(21, 30, 79, 1)",
    height: 50,
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
})

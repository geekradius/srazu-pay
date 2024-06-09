import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import ArrowDown from "../../assets/svgs/arrowDown"
import BackSvg from "../../assets/svgs/backSvg"
import MoreSvg from "../../assets/svgs/moreSvg"
import NotificationsSvg from "../../assets/svgs/notificationsSvg"
import SearchSvg from "../../assets/svgs/searchSvg"
import UserSvg from "../../assets/svgs/userSvg"
import SearchInput from "../../component/Inputs/searchInput"
import GlassCVard from "../../component/glassCard"
import Glasstransaction from "../../component/glasstransaction/glasstransaction"

const Dashboard = () => {
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
          <UserSvg />
          <NotificationsSvg />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.viewGlassCov}>
          <GlassCVard>
            <View style={styles.bg}>
              <View style={styles.glassText1}>
                <Text style={styles.glassTextH6}>
                  Total Business Balance (Vault)
                </Text>
                <View style={styles.arrowDownH6}>
                  <Text style={styles.glassTextH1}>₽670,000</Text>
                  <ArrowDown />
                </View>
              </View>
              <MoreSvg />
            </View>
            <View style={styles.bgBtm}>
              <View style={styles.glassBtmText1}>
                <Text style={styles.glassBtmTextH6}>Last Day PNL</Text>
                <Text style={styles.glassBtmTextH1}>+$100.00 </Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.glassBtmText1}>
                <Text style={styles.glassBtmTextH6}>30 Day Profit</Text>
                <Text style={styles.glassBtmTextH1}>+$450.61 </Text>
              </View>
            </View>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  styles.firstTab,
                  activeTab === 0 && styles.activeTab,
                ]}
                onPress={() => handleTabPress(0)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 0 && styles.activeTabText,
                  ]}
                >
                  R670K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 1 && styles.activeTab]}
                onPress={() => handleTabPress(1)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 1 && styles.activeTabText,
                  ]}
                >
                  N7.5M
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 2 && styles.activeTab]}
                onPress={() => handleTabPress(2)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 2 && styles.activeTabText,
                  ]}
                >
                  R100K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.tab,
                  styles.lastTab,
                  activeTab === 3 && styles.activeTab,
                ]}
                onPress={() => handleTabPress(3)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 3 && styles.activeTabText,
                  ]}
                >
                  P339K
                </Text>
              </TouchableOpacity>
            </View>
          </GlassCVard>
        </View>
        <View>
          <SearchInput
            placeholder={"Search"}
            onChangeText={null}
            value={null}
            svg={<SearchSvg />}
            label={null}
          />
        </View>
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
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTabTwo === 1 && styles.activeTab]}
            onPress={() => handleTabTwoPress(1)}
          >
            <Text
              style={[
                styles.tabText,
                activeTabTwo === 1 && styles.activeTabText,
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
        <View style={styles.viewGlassCov}>
          <Glasstransaction />
        </View>
        <View style={styles.viewGlassCov}>
          <Glasstransaction />
        </View>
        <View style={styles.viewGlassCov}>
          <Glasstransaction />
        </View>
      </ScrollView>
    </View>
  )
}

export default Dashboard
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
    paddingTop: 30,
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

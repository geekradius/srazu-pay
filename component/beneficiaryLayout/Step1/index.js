import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AddSvg from "../../../assets/svgs/addSvg"
import ArrowRightSvg from "../../../assets/svgs/arrowRightSvg"
import BackSvg from "../../../assets/svgs/backSvg"
import BeneficarySvg from "../../../assets/svgs/beneficarySvg"
import SearchSvg from "../../../assets/svgs/searchSvg"
import SearchInput from "../../Inputs/searchInput"

const Step1 = ({ nextPage, openFgtPwd, backPage }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <TouchableOpacity onPress={nextPage}>
          <View style={styles.addBenContainer}>
            <View style={styles.addBenContainerInner}>
              <AddSvg />
              <Text style={styles.addBenContainerText} t>
                New Beneficiary
              </Text>
            </View>
            <ArrowRightSvg />
          </View>
        </TouchableOpacity>
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
        <View style={styles.buttonSection}>
          <BeneficarySvg />
          <Text style={styles.buttonSectionzH2}>
            No beneficiaries at the moment
          </Text>
          <Text style={styles.buttonSectionzH4}>
            You don’t have any beneficiary. Once a transaction is complete, Your
            saved beneficiaries will be updated
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Step1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 30,
    width: "100%",
    paddingHorizontal: 10, // Add padding horizontally
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
    paddingVertical: 15,
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
})

import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"

const StepOneWith = ({ nextPage, openFgtPwd, backPage }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <View style={styles.addBenContainer}>
          <View style={styles.addBenContainerInner}>
            <Text style={styles.addBenContainerText}>
              Total Rubble available
            </Text>
            <Text style={styles.addBenContainerCash}>₽ 24,685.50</Text>
          </View>
        </View>

        <View style={styles.buttonSection}>
          <TextInput
            style={styles.input}
            placeholder="#2000"
            placeholderTextColor="#CACACA"
            onChangeText={null}
            value=""
          />
        </View>
      </View>
      <View style={styles.buttonSection}>
        <PrimaryButton onpress={nextPage} text="Continue" color="#00EACB" />
      </View>
    </View>
  )
}

export default StepOneWith

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
  input: {
    width: "80%",
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "regular",
    textAlign: "center",
    color: "#fff",
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
    width: "100%",
    alignItems: "center",
    gap: "10px",
  },
  buttonSection: {
    display: "flex",
    marginTop: "30%",
    justifyContent: "center",
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
  addBenContainerCash: {
    fontSize: "32px",
    fontWeight: "regular",
    textAlign: "center",
    color: "#fff",
  },
})

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ArrowRightSvg from "../../../assets/svgs/arrowRightSvg"
import Twopasswordsvg from "../../../assets/svgs/twotonepasswordsvg"
import Twotoneusersvg from "../../../assets/svgs/twotoneusersvg"
import PrimaryButton from "../../Buttons/PrimaryButton"

const StepOneSettings = ({ nextPage, backPage, openPassword, openDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.imageSection}>
            <Image
              source={require("../../../assets/unsplash_ymY5oadXAZI.png")}
              style={styles.image1}
            />
            <Text style={styles.userName}>Oluolo Agbjane</Text>
            <Text style={styles.userEmail}>email@email.com</Text>
          </View>

          <View style={styles.inputSection}>
            <TouchableOpacity onPress={openDetails}>
              <View style={styles.detailsView}>
                <View style={styles.openPage}>
                  <View style={styles.txtSvg}>
                    <Twotoneusersvg />
                    <Text style={styles.detailsViewText}> Details</Text>
                  </View>
                  <ArrowRightSvg />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputSection}>
            <TouchableOpacity onPress={openPassword}>
              <View style={styles.detailsView}>
                <View style={styles.openPage}>
                  <View style={styles.txtSvg}>
                    <Twopasswordsvg />
                    <Text style={styles.detailsViewText}> Password</Text>
                  </View>
                  <ArrowRightSvg />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <PrimaryButton
            onpress={nextPage}
            text="Save Changes"
            color="#00EACB"
          />
        </View>
      </View>
    </View>
  )
}

export default StepOneSettings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
    marginTop: 20,
    justifyContent: "space-between",
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

  backcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  backcontainerText: {
    width: "60%",
    fontFamily: "Jost",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "23.12px",
    color: "#fff",
  },
  imageSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 50,
  },
  detailsView: {
    borderWidth: "0.5px, 0px, 0.5px, 0px",
    borderStyle: "solid",
    borderColor: "#FFFFFF1A",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF1A",
  },
  image1: {
    width: 140,
    height: 140,
  },
  detailsViewText: {
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20.23px",
    textAlign: "left",
    color: "#fff",
  },
  userName: {
    fontFamily: "Jost",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "20.23px",
    textAlign: "left",
    color: "#fff",
    marginTop: 20,
  },
  userEmail: {
    fontFamily: "Jost",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20.23px",
    textAlign: "left",
    color: "#fff",
    marginTop: 10,
  },
  openPage: {
    dispplay: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  txtSvg: {
    dispplay: "flex",
    gap: "20px",
    justifyContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
})

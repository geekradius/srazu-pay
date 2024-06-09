import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BackSvg from "../../../assets/svgs/backSvg"
import PrimaryButton from "../../Buttons/PrimaryButton"
import SelectDropdown from "../../Inputs/PrimarySelect"
import CustomDatePicker from "../../Inputs/customdatepicker"
import PrimaryInput from "../../Inputs/primaryInput"

const Step1 = ({ nextPage, backPage }) => {
  const data = ["male", "female"]
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateSelect = (date) => {
    setSelectedDate(date)
  }
  return (
    <View style={styles.container}>
      <View style={styles.backcontainer}>
        <TouchableOpacity onPress={backPage}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.containerInner}>
        <View>
          <View style={styles.section}>
            <Text style={styles.title}>Tell Us A Bit About Yourself</Text>
            <Text style={styles.description}>
              Please, add your name as it appears on your official documents or
              means of identification.
            </Text>
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Anthony"
              onChangeText={null}
              value=""
              label="Legal First Name"
              svg={null}
            />
          </View>
          <View style={styles.inputSection}>
            <PrimaryInput
              placeholder="Anthony"
              onChangeText={null}
              value=""
              label="Legal Middle Name (optional) "
              svg={null}
            />
          </View>
          <View style={styles.inputSection}>
            <SelectDropdown onSelect={null} options={data} label="Gender" />
          </View>
          <View style={styles.dateInputSection}>
            <CustomDatePicker
              label="Date of birth"
              onDateChange={handleDateSelect}
            />
          </View>
        </View>
        <View style={styles.buttonSection}>
          <PrimaryButton onpress={nextPage} text="Next" color="#00EACB" />
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
    paddingVertical: 70,
    paddingHorizontal: 20, // Add padding horizontally
  },
  containerInner: {
    flex: 1,
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
  inputSection: {
    marginBottom: 20, // Add margin bottom for spacing between input fields
  },
  dateInputSection: {
    marginTop: 20, // Add margin bottom for spacing between input fields
    width: "100%",
    flex: 1,
    flexDirection: "column",
  },
  backcontainer: {
    paddingVertical: 15,
  },
})

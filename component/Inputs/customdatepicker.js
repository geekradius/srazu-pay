import DatePicker from "@react-native-community/datetimepicker"
import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

const CustomDatePicker = ({ onDateChange, label }) => {
  const [date, setDate] = useState(new Date())

  const handleDateChange = (newDate) => {
    setDate(newDate)
    onDateChange(newDate)
  }

  return (
    <View>
      <Text style={styles.containerLabel}>{label}</Text>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePicker}
          date={date}
          value={date}
          mode="date"
          placeholder="Select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: "flex-start",
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              paddingVertical: 15,
            },
            dateText: {
              color: "#fff", // Text color
            },
            // ... You can add more custom styles here
          }}
          onDateChange={handleDateChange}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 23,
  },
  containerLabel: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 18,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
  },
  datePicker: {
    width: "100%",
  },
})

export default CustomDatePicker

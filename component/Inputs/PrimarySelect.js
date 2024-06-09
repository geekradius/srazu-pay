import { AntDesign } from "@expo/vector-icons" // Import the icon library
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const SelectDropdown = ({ options, onSelect, label }) => {
  const [showOptions, setShowOptions] = useState(false)

  const handleSelectOption = (option) => {
    onSelect(option)
    setShowOptions(false) // Hide options after selection
  }

  return (
    <View>
      <View style={styles.containerLabel}>
        <Text style={styles.containerLabel}>{label}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowOptions(!showOptions)} // Toggle options visibility
        >
          <Text style={styles.selectedOption}>Select an option</Text>
          <AntDesign
            name={showOptions ? "caretup" : "caretdown"} // Change icon based on options visibility
            size={20}
            color="#00EACB"
          />
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() => handleSelectOption(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  containerLabel: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 18,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedOption: {
    color: "#333",
    fontSize: 16,
  },
  optionsContainer: {
    marginTop: 10,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
  },
  containerLabel: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 18,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
  },
})

export default SelectDropdown

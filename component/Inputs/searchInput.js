import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const SearchInput = ({ placeholder, onChangeText, value, svg, label }) => {
  return (
    <View>
      <Text style={styles.containerLabel}>{label}</Text>
      <View style={styles.container}>
        <View style={styles.svgContainer}>{svg}</View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#CACACA"
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10, // Adjusted borderRadius for React Native
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  svgContainer: {
    marginRight: 10, // Added margin to space between SVG and input
  },
  containerLabel: {
    fontSize: 14,
    fontWeight: "400", // Corrected fontWeight syntax
    lineHeight: 18,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 5, // Added margin to space label from input
  },
})

export default SearchInput

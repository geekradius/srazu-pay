import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const PrimaryInput = ({ placeholder, onChangeText, value, svg, label }) => {
  return (
    <View>
      <Text style={styles.containerLabel}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#CACACA"
          onChangeText={onChangeText}
          value={value}
        />
        {svg && <View style={styles.svgContainer}>{svg}</View>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingRight: 60,

    borderRadius: "10px 0px 0px 0px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#fff",
  },
  svgContainer: {
    marginLeft: 10,
  },
  containerLabel: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 18,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
  },
})

export default PrimaryInput

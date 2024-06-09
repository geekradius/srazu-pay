import React from "react"
import { StyleSheet, View } from "react-native"

const SecondaryGlass = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export default SecondaryGlass
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF4D",
    borderRadius: "15px",
  },
})

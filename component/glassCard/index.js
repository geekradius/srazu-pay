import React from "react"
import { StyleSheet, View } from "react-native"

const GlassCVard = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export default GlassCVard
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
  },
})

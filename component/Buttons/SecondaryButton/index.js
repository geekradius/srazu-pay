import { StyleSheet, Text, TouchableOpacity } from "react-native"

const SecondaryButton = ({ onpress, text, color, svg }) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[styles.button, { backgroundColor: color }]}
    >
      {svg ? svg : null}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export default SecondaryButton

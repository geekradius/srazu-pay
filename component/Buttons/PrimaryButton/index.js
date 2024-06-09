import { StyleSheet, Text, TouchableOpacity } from "react-native"

const PrimaryButton = ({ onpress, text, color }) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "rgba(13, 28, 67, 1)",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export default PrimaryButton

import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import StepOneSettings from "../../component/setting-screens/Step1"
import StepTwoSettings from "../../component/setting-screens/Step2"
import StepThreeSettings from "../../component/setting-screens/Step3"

const Settings = () => {
  const navigation = useNavigation()
  const [page, setPage] = useState(0)
  const conditional_component = () => {
    switch (page) {
      case 0:
        return (
          <StepOneSettings
            openDetails={() => setPage(1)}
            openPassword={() => setPage(2)}
            backPage={() => navigation.navigate("Home")}
          />
        )
      case 1:
        return (
          <StepTwoSettings nextPage={() => null} backPage={() => setPage(0)} />
        )
      case 2:
        return (
          <StepThreeSettings
            nextPage={() => null}
            backPage={() => setPage(0)}
          />
        )
      default:
        return (
          <StepOneSettings
            nextPage={() => null}
            backPage={() => setPage(page - 1)}
          />
        )
    }
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#582AB7", "#011932", "#582AB7", "#011932"]}
        start={[0, 0]}
        end={[1, 1]}
        style={StyleSheet.absoluteFill}
      />
      {conditional_component()}
    </View>
  )
}

export default Settings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backcontainer: {
    backgroundColor: "#1C1F5A",
  },
})

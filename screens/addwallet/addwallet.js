import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import {
  StepFiveAdd,
  StepFourAdd,
  StepOneAdd,
  StepThreeAdd,
} from "../../component/add-screen"

const Addwallet = () => {
  const [page, setPage] = useState(0)
  const navigation = useNavigation()
  const conditional_component = () => {
    switch (page) {
      case 0:
        return (
          <StepOneAdd
            nextPage={() => setPage(page + 1)}
            openFgtPwd={() => setPage(2)}
            backPage={() => navigation.navigate("Home")}
          />
        )
      case 1:
        return (
          <StepThreeAdd
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )
      case 2:
        return (
          <StepFourAdd
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )
      case 3:
        return (
          <StepFiveAdd
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )
      default:
        return (
          <StepOneAdd
            nextPage={() => setPage(page + 1)}
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

export default Addwallet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 25,
  },
})

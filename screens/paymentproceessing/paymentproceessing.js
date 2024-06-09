import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import {
  StepFive,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "../../component/paymentprocessingLayout"

const Paymentproceessing = () => {
  const [page, setPage] = useState(0)
  const navigation = useNavigation()
  const conditional_component = () => {
    switch (page) {
      case 0:
        return (
          <StepOne
            nextPage={() => setPage(page + 1)}
            openFgtPwd={() => setPage(2)}
            backPage={() => navigation.navigate("Home")}
            openComplete={() => setPage(2)}
            openDecline={() => setPage(1)}
            onHold={() => setPage(3)}
          />
        )
      case 1:
        return (
          <StepTwo
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )
      case 2:
        return (
          <StepThree
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )
      case 3:
        return (
          <StepFour
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )
      case 4:
        return (
          <StepFive
            nextPage={() => setPage(page + 1)}
            backPage={() => setPage(page - 1)}
          />
        )

      default:
        return (
          <StepOne
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

export default Paymentproceessing
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
})

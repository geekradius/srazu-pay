import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { StyleSheet, View } from "react-native"
import {
  StepFive,
  StepFour,
  StepOne,
  StepSix,
  StepThree,
  StepTwo,
} from "../../component/LoginMultiStep"

const Login = () => {
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
      case 5:
        return (
          <StepSix
            nextPage={() => setPage(0)}
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

export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  backcontainer: {
    backgroundColor: "#1C1F5A",
  },
})

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import BottomCenterSvg from "./assets/svgs/bottomCenterSvg"
import BottomMoreSvg from "./assets/svgs/bottomMoreSvg"
import BottomWalletSvg from "./assets/svgs/bottomWalletSvg"
import DashboardSvg from "./assets/svgs/dashboardSvg"
import TransfersSvg from "./assets/svgs/transfersSvg"
import AboutScreen from "./screens/AboutScreen"
import HomeScreen from "./screens/HomeScreen"
import Addwallet from "./screens/addwallet/addwallet"
import Login from "./screens/auth/login"
import Signup from "./screens/auth/signup"
import Beneficiary from "./screens/beneficiary/beneficiary"
import Dashboard from "./screens/dashboard"
import Paymentproceessing from "./screens/paymentproceessing/paymentproceessing"
import Settings from "./screens/settings/settings"
import Transfers from "./screens/transfers/transfers"
import Wallets from "./screens/wallets/wallets"
import Withdraw from "./screens/withdraw/withdraw"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  )
}
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main">
        {() => (
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Beneficiary" component={Beneficiary} />
      <Stack.Screen name="Paymentproceessing" component={Paymentproceessing} />
      <Stack.Screen name="Addwallet" component={Addwallet} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
    </Stack.Navigator>
  )
}
const AuthenticatedNavigation = () => {
  const navTheme = {
    colors: {
      background: "#171717",
    },
  }
  return (
    <Tab.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1D1F5C",
          height: 115,
          padding: 10,
          paddingLeft: 10,
          paddingTop: 20,
          paddingRight: 10,
          border: "none",
        },
      }}
      tabBarOptions={{
        activeBorderRadius: "20px",
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        activeBackgroundColor: "#FFFFFF33",
      }}
    >
      <Tab.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <DashboardSvg width={30} height={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Transfers"
        component={Transfers}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <TransfersSvg width={30} height={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <BottomCenterSvg width={30} height={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallets"
        component={Wallets}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <BottomWalletSvg width={30} height={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <BottomMoreSvg width={30} height={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    setIsLoggedIn(true)
  }, [])

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedNavigation /> : <MainStack />}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  tabBar: {
    backgroundColor: "rgba(29, 31, 92, 1)",
  },
})

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const { Navigator, Screen } = createBottomTabNavigator();

export const PATHS = {
  HOME: "Home Page",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleStyle: {
            textTransform: "uppercase",
          },
          tabBarStyle: {
            position: "absolute",
            bottom: 30,
            width: "90%",
            marginHorizontal: "5%",
            borderRadius: 10,
            height: 80,
            borderWidth: 1,
            borderColor: "#ccc",
          },
          tabBarItemStyle: {
            paddingVertical: 10,
          },
        }}
      >
        <Screen
          name={PATHS.HOME}
          component={StackNavigator}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  textTransform: "uppercase",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Home
              </Text>
            ),
            tabBarIcon: ({ color, focused, size }) => (
              <AntDesign name="home" size={size} />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED_TASKS}
          component={CompletedTasks}
          options={{
            headerBackTitle: "Back",
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "black" : color,
                  textTransform: "uppercase",
                  fontWeight: focused ? "bold" : "normal",
                }}
              >
                Completed Tasks
              </Text>
            ),
            tabBarIcon: ({ color, focused, size }) => (
              <FontAwesome5 name="check-circle" size={size} color={"#4CAF50"} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;

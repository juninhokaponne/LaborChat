import React, { useCallback, useEffect, useState } from "react";
import { OnBoarding } from "./src/screens/OnBoarding";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { View } from "react-native";
import { SplashScreenHome } from "./splashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/Home";
import { CustomHeader } from "./src/component/Header/";
import { StatusBar } from "react-native";
import { FriendsInvite } from "./src/screens/FriendsInvite";
import { InformationEdit } from "./src/screens/InformationEdit";
import { Profile } from "./src/screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "./assets/icons/home.svg";
import Preferences from "./assets/icons/Group.svg";
import Info from "./assets/icons/TimeCircle.svg";
import User from "./assets/icons/tabBarUser.svg";
import { PaperProvider } from "react-native-paper";
import { Preferences as PrefencePage } from "./src/screens/Preferences/";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <SplashScreenHome />;
  }

  const ProfileTabs = () => (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let IconComponent;

          if (route.name === "Profile") {
            IconComponent = User;
          } else if (route.name === "FriendsInvite") {
            IconComponent = Preferences;
          } else if (route.name === "InformationEdit") {
            IconComponent = Info;
          } else if (route.name === "Home") {
            IconComponent = HomeIcon;
          }

          return <IconComponent width={size} height={size} fill={color} />;
        },
        tabBarLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 88,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FriendsInvite"
        component={FriendsInvite}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="InformationEdit"
        component={InformationEdit}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} title="Health" />
              ),
            }}
          />
          <Stack.Screen
            name="FriendsInvite"
            component={FriendsInvite}
            options={{
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} title="Invite Friends" />
              ),
            }}
          />
          <Stack.Screen
            name="InformationEdit"
            component={InformationEdit}
            options={{
              header: ({ navigation }) => (
                <CustomHeader
                  navigation={navigation}
                  title="Edit Information"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileTabs}
            options={{
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} title="Profile" />
              ),
            }}
          />
          <Stack.Screen
            name="Preferences"
            component={PrefencePage}
            options={{
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} title="Preference" />
              ),
            }}
          />
        </Stack.Navigator>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
          onLayout={onLayoutRootView}
        ></View>
      </NavigationContainer>
    </PaperProvider>
  );
}

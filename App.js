import React, {useState} from "react";
import {SafeAreaView, View, Text, Button} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

import Ionicons from "@expo/vector-icons/Ionicons"

const Profile = ({navigation}) => {
  const [user, setUser] = useState("Serhat");
  return (
      <View>
        <Text>You have to sign in</Text>
        <Button
            title="SignIn"
            onPress={() => navigation.navigate("SignIn", {user})}
        />
        <Button
            title="SignUp"
            onPress={() => navigation.navigate("SignUp")}
        />
      </View>
  )
}
const SignIn = ({route}) => {
  return <Text>Sign In {route.params.user}</Text>
}

const SignUp = () => {
  return <Text>Sign Up</Text>
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="SignIn" component={SignIn}
                options={({route}) => ({title: `gelen user parametresi: ${route.params.user}`})}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{title: 'Sign UP'}}
            />
        </Stack.Navigator>
    )
}

const Home = () => {
    return <Text>Home</Text>
}

const MainTabs = () => {
    return <Tabs.Navigator>
        <Tabs.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: (props) => <Ionicons name="ios-home" {...props} />
            }}
        />
        <Tabs.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
                headerShown: false,
                title: "Profile", //headerShown false oldugu icin zaten bu gozukmeyecek
                tabBarIcon: (props) => <Ionicons name="ios-person" {...props} />

            }}
        />
    </Tabs.Navigator>
}

const About = () => {
    return <Text>About</Text>
}

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="MainTabs" component={MainTabs} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
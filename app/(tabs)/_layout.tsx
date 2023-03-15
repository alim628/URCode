import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="parag"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble" size="large" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="doslar"
        options={{
          title: "doslar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size="large" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="compas"
        options={{
          title: "compas",
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size="large" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="man"
        options={{
          title: "man",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size="large" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

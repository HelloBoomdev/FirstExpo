import { Tabs } from "expo-router";
import TabBarIcon from "@/components/navigation/TabBarIcon ";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", color: "white" },
        tabBarStyle: { backgroundColor: "#a6b2ff", height: 62, margin: 0, padding: 5 },
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "white",
    }}>
    <Tabs.Screen name="index" options={{//เลือกชื่อไฟล์
          title: "Home",//ข้อความที่แสดง
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} />//เลือกIcon
          ),
        }}
      />
    <Tabs.Screen name="contact" options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="phone" color={color} />
          ),
        }}
      />
    <Tabs.Screen name="(admin)" options={{
          title: "Admin",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

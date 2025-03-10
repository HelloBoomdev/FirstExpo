import { Stack } from "expo-router";

export default function Rootlayout() {
  return (
    <Stack screenOptions=
    {{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle:  {
            backgroundColor: "skyblue",

        },
        headerTintColor:"white"
    }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="(admin)" options={{headerShown: false}} />
        <Stack.Screen name="index" options={{title: "Home"}} />
        <Stack.Screen name="contact" options={{title: "Contact"}} />
        <Stack.Screen name="+not-found" options={{title: "Not Found"}} />
        <Stack.Screen name="textinputdemo" options={{title: "form", headerShown: true}} />
        <Stack.Screen name="switchdemo" options={{title: "switch", headerShown: true}} />
        <Stack.Screen name="flatlistdemo" options={{title: "flat", headerShown: true}} />
        <Stack.Screen name="profiledemo" options={{title: "register", headerShown: true}} />
    </Stack>
  )
}

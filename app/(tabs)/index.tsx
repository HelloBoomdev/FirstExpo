import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, Button, ScrollView, Alert, TouchableHighlight } from 'react-native';
import Login from '@/constants/Login ';
import About from '@/components/About ';
import { Link, useRouter } from 'expo-router';
import { name } from 'ajv/dist/compile/codegen/code';
//import Profile from '@/assets/images/profile2.png'

export default function Index() {
  const router = useRouter();
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cacel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView style={{ flex : 1 }}>
    <View style={Login.container}>
      <View style={Login.spacing} />
      <Image source={{ uri: 'https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png' }} style={Login.logo}/>
      <Text style={Login.title}>Welcome</Text>
      <TextInput style={Login.input} placeholder="Username"/>
      <TextInput style={Login.input} placeholder="Password" secureTextEntry/>
      <TouchableOpacity style={Login.button}>
        <Text style={Login.buttonText}>Login</Text>
      </TouchableOpacity>
      <About />
      <Link href='/contact'>Clik Here</Link>
      <Button title='Clik Test' onPress={()=>router.push("/contact?name=BOOM&major=IT")}/>
      <Button title='Clik Params' onPress={()=>router.push({pathname : "/contact", params : {
        name : "BOOM",
        major : "IT",
        email : "111@gmail.com",
        }})}/>
      <Button title='GO to User ID' onPress={()=>router.push("/user/123")}/>
      <Button title='GO to Profile' onPress={()=>router.push("/profile")}/>
      <Text>&nbsp;</Text>
      <Text style={{alignItems: "center"}}>Use Image</Text>
      <Image source={require('@/assets/images/profile1.png ')}
      style={{
        height: 120,
        width: 120,
        borderRadius: 100,
        marginHorizontal: "auto",
        margin: 10,
      }}
      resizeMode='cover'
      />
      <Text>&nbsp;</Text>
      <Text style={{alignItems: "center"}}>Use Image</Text>
      {/* <Image source={Profile}
      style={{
        height: 120,
        width: 120,
        borderRadius: 100,
        marginHorizontal: "auto",
      }}
      resizeMode='cover'
      /> */}
      <StatusBar style="auto" />
      <TouchableHighlight
          underlayColor="#d1d1d1"
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 15,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
          }}
          onPress={() => {
            showAlert();
          }}
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>
    </View>
    </ScrollView>
  );
}
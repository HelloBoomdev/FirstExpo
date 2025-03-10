import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useRouter } from 'expo-router';

export default function TextInputDemo() {

  // สร้างตัวแปร inputName, inputEmail, inputTel โดยใช้ useState()
  const [inputUsername, setInputUsername] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputFullname, setInputFullname] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputTel, setInputTel] = useState("")
  
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Simple Form</Text>

      <Text>Username</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputUsername}
        onChange={(e) => setInputUsername(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Fullname"
      />

      <Text>Password</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputPassword}
        onChange={(e) => setInputPassword(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Fullname"
      />

      <Text>Fullname</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputFullname}
        onChange={(e) => setInputFullname(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Fullname"
      />

      <Text>Email</Text>
      <TextInput
        keyboardType="email-address"
        defaultValue={inputEmail}
        onChange={(e) => setInputEmail(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Email"
      />

      <Text>Tel</Text>
      <TextInput
        keyboardType="phone-pad"
        defaultValue={inputTel}
        onChange={(e) => setInputTel(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Tel"
      />

      <Text></Text>
      <Button
        title="Submit"
        onPress={() => {
          console.log("Name:", inputFullname)
          console.log("Email:", inputEmail)
          console.log("Tel:", inputTel)
        }}
      />
      <Text>&nbsp;</Text>
      <Button 
            title='Register' 
            onPress={() => router.push({
              pathname: "/profiledemo", 
              params: {
                Username: `${inputUsername}`,
                Password: `${inputPassword}`,
                Fullname: `${inputFullname}`,
                Email: `${inputEmail}`,
                Tel: `${inputTel}`,
              } 
            })}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
})
  
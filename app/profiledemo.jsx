import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router';


export default function profiledemo() {
  const router = useRouter();
  const { Username, Password, Fullname, Email, Tel } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10}}>
      <Text>contact page</Text>
      <Text>Username : {Username}</Text>
      <Text>Password : {Password}</Text>
      <Text>Fullname : {Fullname}</Text>
      <Text>Email : {Email}</Text>
      <Text>Tel : {Tel}</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({})
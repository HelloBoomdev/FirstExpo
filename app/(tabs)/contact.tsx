import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Login from '@/constants/Login '
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function contact() {
  const router = useRouter();
  const { name, major, email } = useLocalSearchParams();
  return (
    <View style={Login.container}>
      <Text>contact page</Text>
      <Text>Name : {name}</Text>
      <Text>Major : {major}</Text>
      <Text>Email : {email}</Text>
      <Button title='Clik' onPress={()=>router.back("/Index")}/>
    </View>
  )
  
}

const styles = StyleSheet.create({})
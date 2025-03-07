import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStyle from './Style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World Native⚡🎮</Text>
      <Text style={styles.textlower}>#ITSKNTC</Text>
      <Text style={MyStyle.textTest}>Lorem ipsum dolor sit amet.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#304cff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: "bold",
  },
  textlower: {
    marginTop: 20,
    color: 'black',
    fontSize: 25,
    fontWeight: "bold",
  }
});

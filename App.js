
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='What are your goals' style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  padding: 50,
 },
 inputContainer:{
  display: "flex",
  flexDirection: 'row',
  justifyContent: "space-between",
  
 },
 textInput:{
  borderWidth: 1,
  borderColor: "#cccccc",
  width: "80%",
  marginRight: 8,
  padding: 8
 }
});

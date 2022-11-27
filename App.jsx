
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={{
        backgroundColor: "red",
        flex: 1
      }}>
        <Text>
        Square 1
        </Text>
        
      </View>
      <View style={{
        backgroundColor: "green",
        flex: 2
      }}>
        <Text>
        Square 2
        </Text>
        
      </View>
      <View style={{
        backgroundColor: "blue"
      }}>
        <Text>
        Square 3
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "grey",
  margin: 10,
  height: 300,
  width: "80%",
 }
});

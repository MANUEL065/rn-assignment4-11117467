import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Login from "./Components/Login";
import Home from "./Components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
         </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFD',
  },

});






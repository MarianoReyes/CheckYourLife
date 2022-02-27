import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

const image = { uri: "https://twenergy.com/wp-content/uploads/2020/09/tipos-de-agua-1280x720.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
          <Image
            style={{ width: 40, height: 40, marginBottom: 15 }}
            source={require("./assets/1756647.png")}
          />

          <Text>.........................................................................</Text>
          
          <Image
            style={{ width: 500, height: 150, marginBottom: 15 }}
            source={require("./assets/1280px-Reloj_digital_1200.svg.png")}
          />
          <Text>.........................................................................</Text>

              <Button
                  title="START"
              />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

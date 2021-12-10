import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, Button, Icon, Header } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { AppContext } from "../Context/Context";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default function FavoritosScreen({ navigation }) {
  const { favoritos, infoPaises } = useContext(AppContext);
  function cardsRender(data,index) {
    return(
      <Card key={index}>
        <Card.Title>{data.country}</Card.Title>
        <Card.Divider />
        <View>
          <Text>Casos totales: {data.cases}</Text>
          <Text>Nuevos casos del dia de hoy: {data.todayCases}</Text>
          <Text>Decesos totales: {data.deaths}</Text>
          <Text>Decesos del dia de hoy: {data.todayDeaths}</Text>
          <Text>Casos activos: {data.active}</Text>
        </View>
      </Card>
    );
  }

  return (
    <ScrollView>
      <SafeAreaProvider>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.openDrawer() }}
          centerComponent={{ text: 'Tus favoritos', style: { color: '#fff' } }}
        />
        <SafeAreaView>

          {infoPaises.map((data, index) => cardsRender(data, index))}
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  poster: {
    minWidth: 250,
    minHeight: 143,
    borderColor: "green",
    borderWidth: 1,
  },
});

import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { AppContext } from "../Context/Context";

export default function SearchCasosScreen({ navigation }) {
  const { favoritos, agregarFavorito, eliminarFavorito } =
    useContext(AppContext);

  var color = "black";
  const [Llamada, setLllamada] = useState([]);
  const [wait, setWait] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [PaisSelec, setPaisSelec] = useState("");
  const [DatosPais, setDatosPais] = useState([]);

  function checkCountry(pais) {
    if (favoritos.includes(pais)) {
        color = "red";
    } else {
        color = "black";
    }
  }
  function changeStatus(data) {
    if (favoritos.includes(data.country)) {
      eliminarFavorito(data);
      color = "black";
    } else {
      agregarFavorito(data);
      color = "red";
    }
  }

  async function fetchPaises() {
    try {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
      const json1 = await response.json();
      setLllamada(json1);
    } catch (err) {
      throw err;
    }
  }

  async function fetchDatosPais(pais) {
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${pais}?strict=true`
      );
      const json1 = await response.json();
      setDatosPais(json1);
      setWait(true);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    fetchPaises();
  }, []);

  return (
    <View style={styles.container3}>
      <View style={styles.container2}>
        {PaisSelec ? (
          <View style={styles.container2}>
            <Picker
              selectedValue={selectedLanguage}
              style={{ width: 200 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedLanguage(itemValue);
                fetchDatosPais(itemValue);
              }}
            >
              {Llamada.map((item, index) => {
                return (
                  <Picker.Item
                    value={item.country}
                    label={item.country}
                    key={index}
                  />
                );
              })}
            </Picker>
            {wait ? (
              <View style={styles.container2}>
                {checkCountry(DatosPais.country)}
                <Image
                  source={{ uri: DatosPais.countryInfo.flag }}
                  style={styles.poster}
                />
                <Text>Poblacion: {DatosPais.population}</Text>
                <Text>Casos totales: {DatosPais.cases}</Text>
                <Text>Casos del dia de hoy: {DatosPais.todayCases}</Text>
                <Text>Casos activos: {DatosPais.active}</Text>
                <Text>Casos criticos: {DatosPais.critical}</Text>
                <Text>Pruebas aplicadas: {DatosPais.tests}</Text>
                <Text>Decesos totales: {DatosPais.deaths}</Text>
                <Text>Decesos del dia de hoy: {DatosPais.todayDeaths}</Text>
                <Icon
                  raised
                  name="heart"
                  type="ionicon"
                  color={color}
                  onPress={() => changeStatus(DatosPais)}
                />
              </View>
            ) : (
              <Text>Nada</Text>
            )}
          </View>
        ) : (
          <View style={styles.container2}>
            <Picker
              selectedValue={selectedLanguage}
              style={{ width: 200 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedLanguage(itemValue);
                setPaisSelec(itemValue);
                fetchDatosPais(itemValue);
              }}
            >
              {Llamada.map((item, index) => {
                return (
                  <Picker.Item
                    value={item.country}
                    label={item.country}
                    key={index}
                  />
                );
              })}
            </Picker>
            <Text>Seleccion</Text>
          </View>
        )}
      </View>
    </View>
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

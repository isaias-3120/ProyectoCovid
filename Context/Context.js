import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [favoritos, setFavoritos] = useState([]);
  const [infoPaises,setInfo]=useState([]);
function agregarFavorito(data){
  if(favoritos.includes(data.country)){

  } else{
    favoritos.push(data.country)
    infoPaises.push(data)
    setInfo([...infoPaises])
    setFavoritos([...favoritos]);
  }
}

function eliminarFavorito(data) {
  var index = favoritos.indexOf(data.country);
  var index = infoPaises.indexOf(data);
  
  infoPaises.splice(index,1);
  setFavoritos([...infoPaises]);
}
  return (
    <AppContext.Provider
      value={{
        favoritos,infoPaises,agregarFavorito,eliminarFavorito
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

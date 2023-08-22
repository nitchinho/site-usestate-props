import "./App.css";
import { useState } from "react";
import Topo from "./componentes/Topo";
import CardAnimal from "./componentes/CardAnimal";
import CardInformacoes from "./componentes/CardInformacoes";

export default function App() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  return (
    <div className="App">
      <Topo tipoAnimal={tipoDoComponenteCard} setState={setTipoDoComponenteCard} />
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}
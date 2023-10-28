import { Outlet } from "react-router-dom";
import "./App.css";
import Cabecalho from "../components/Cabecalho/Cabecalho";
import Rodape from "../components/Rodape/Rodape";

export default function App() {
  return (
    <>
    <Cabecalho/>
    <main>
      <Outlet/>
    </main>
    <Rodape/>
    </>
  );
}

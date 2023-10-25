import { Outlet } from "react-router-dom";
import "./App.css";
import Cabecalho from "../components/Cabecalho/Cabecalho";

export default function App() {
  return (
    <>
    <Cabecalho/>
    <main>
      <Outlet/>
    </main>
    </>
  );
}

import { useContext, useState } from "react";
import Header from "./Components/Header/Header";
import { Context } from "./Contexts/TemaContext";

export default function App() {
  const { tema } = useContext(Context);

  const temaStyle = {
    backgroundColor: tema === "claro" ? "#fff" : "#273448",
    color: tema === "claro" ? "#333" : "#fff",
  };

  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div
        style={temaStyle}
        className="flex bg justify-center h-full items-center bg-slate-50"
      >
        <h2 className="text-3xl">Tema {tema}</h2>
      </div>
    </div>
  );
}

import { useContext } from "react";
import Container from "../Container/Container";
import { Context } from "../../Contexts/TemaContext";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

export default function Header() {
  const { tema, mudarTema } = useContext(Context);

  return (
    <header className="bg-slate-800 p-5">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl">Alterar Tema</h2>
          <button
            onClick={mudarTema}
            className="bg-slate-400 p-2 rounded font-semibold text-slate-800"
          >
            {tema === "claro" ? <FaMoon size={25} /> : <IoMdSunny size={25} />}
          </button>
        </div>
      </Container>
    </header>
  );
}

import { ReactNode, createContext, useState } from "react";

type TemaType = {
    tema: string;
    mudarTema: () => void;
};

const initialState: TemaType = {
    tema: "claro",
    mudarTema: () => {}
};

export const Context = createContext<TemaType>(initialState);

export const TemaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tema, setTema] = useState(initialState.tema);

    const mudarTema = () => {
        setTema(tema === "claro" ? "escuro" : "claro");
    };

    return (
        <Context.Provider value={{ tema, mudarTema }}>
            {children}
        </Context.Provider>
    );
};

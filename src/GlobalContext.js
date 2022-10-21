import { createContext, useState, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const planetRef = useRef();
  const bioRef = useRef();
  const projectRef = useRef();
  const invoiceRef = useRef();
  const npsRef = useRef();
  const [pages, setPages] = useState([]);
  const [visiblePages, setVisiblePages] = useState([]);
  const [selected, setSelected] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        visiblePages,
        setVisiblePages,
        planetRef,
        bioRef,
        projectRef,
        invoiceRef,
        npsRef,
        pages,
        setPages,
        selected,
        setSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;

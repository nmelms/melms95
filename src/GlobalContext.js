import { createContext, useState, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const planetRef = useRef();
  const carouselRef = useRef();
  const bioRef = useRef();
  const pokeRef = useRef();
  const burgerRef = useRef();
  const projectRef = useRef();
  const invoiceRef = useRef();
  const mtgRef = useRef();
  const mineRef = useRef();
  const npsRef = useRef();
  const [diffX, setDiffX] = useState();
  const [diffY, setDiffY] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState({ display: "flex" });
  const [fullScreen, setFullScreen] = useState("");

  const [pages, setPages] = useState([]);
  const [visiblePages, setVisiblePages] = useState([]);
  const [selected, setSelected] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        fullScreen,
        setFullScreen,
        styles,
        setStyles,
        setDiffX,
        setDiffY,
        diffY,
        diffX,
        isDragging,
        setIsDragging,
        visiblePages,
        setVisiblePages,
        planetRef,
        bioRef,
        pokeRef,
        carouselRef,
        burgerRef,
        projectRef,
        invoiceRef,
        mineRef,
        mtgRef,
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

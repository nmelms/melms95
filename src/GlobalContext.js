import { createContext, useState, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const planetRef = useRef();
  const bioRef = useRef();
  const projectRef = useRef();
  const invoiceRef = useRef();
  const npsRef = useRef();
  const [diffX, setDiffX] = useState();
  const [diffY, setDiffY] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState({ display: "flex" });
  const [fullScreen, setFullScreen] = useState("");

  const [pages, setPages] = useState([]);
  const [visiblePages, setVisiblePages] = useState([]);
  const [selected, setSelected] = useState("");

  const dragging = (e) => {
    const left = e.screenX - diffX;
    const top = e.screenY - diffY;

    if (isDragging && fullScreen !== "fullScreen") {
      setStyles({ left: left, top: top });
      console.log("draggin");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        fullScreen,
        setFullScreen,
        styles,
        setStyles,
        dragging,
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

import React, { useRef, useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import file from "../assets/file.png";
import screenShot from "../assets/coffeeCommerce.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDrag } from "@use-gesture/react";

export default function MtgProject({ pages, setPages }) {
  const { burgerRef, selected, setSelected } = useContext(GlobalContext);

  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [fullScreen, setFullScreen] = useState("");

  const [styles, setStyles] = useState({
    display: "block",
    left: windowPosition.x,
    top: windowPosition.y,
  });

  const bindWindowPos = useDrag((params) => {
    setWindowPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  });

  const handleClick = () => {
    setSelected("CoffeeCommerce");
  };
  const handleCloseClick = (event) => {
    const newArr = pages;
    const filtered = newArr.filter((item) => item !== "CoffeeCommerce");
    setPages(filtered);
  };
  const handleFullScreenClick = () => {
    fullScreen === "fullScreen"
      ? setFullScreen("")
      : setFullScreen("fullScreen");
  };

  const handleMinimizeClick = (e) => {
    e.stopPropagation();
    setSelected("");
    burgerRef.current.style.display = "none";
  };
  const miniDown = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onPointerDown={handleClick}
      style={
        fullScreen === "fullScreen"
          ? { left: "0", top: "0" }
          : { left: windowPosition.x, top: windowPosition.y, display: "block" }
      }
      id="CoffeeCommerce"
      ref={burgerRef}
      className={
        selected === "CoffeeCommerce"
          ? `npsProject top  ${fullScreen}`
          : "npsProject"
      }
    >
      <nav {...bindWindowPos()} className="windowNav">
        <div className="nameAndIcon">
          <img style={{ height: "18px" }} src={file} />
          <p>Coffee Commerce</p>
        </div>
        <div className="windowNavBtns">
          <button
            onClick={(event) => handleMinimizeClick(event)}
            onPointerDown={(e) => miniDown(e)}
            className="navBtn"
          >
            _
          </button>
          <button
            onClick={(event) => handleFullScreenClick(event)}
            className="navBtn"
          >
            O
          </button>
          <button
            data-testid="npsClose"
            onClick={(event) => handleCloseClick(event)}
            className="navBtn"
          >
            X
          </button>
        </div>
      </nav>
      <div className="projectBody">
        <h1>Coffee Commerce</h1>
        <img
          alt="screen shot of National Parks project"
          className="screenShot"
          src={screenShot}
        />
        <h2>About This Project</h2>
        <p>
          This is a fullstack ecommerce site created in Next.js and uses
          headless WooCommerce for content management. I've integrated Stripe
          for payment processing and use webhooks to keep the order status in
          WooCommerce up-to-date. Users with access have the ability to add and
          edit products, tweak pricing and stock, create sales, view new orders,
          and much more. Additionally, I've set up API routes to communicate
          with the server and implemented cookies, allowing users to maintain
          their cart data even if they navigate away from the page.
        </p>
        <div className="icons">
          <a target="_blank" href="https://github.com/Nmelms/coffee-commerce">
            <FontAwesomeIcon title="github icon" size="2x" icon={faGithub} />
          </a>
          <a target="_blank" href="https://coffeecommerce.nickmelms.dev">
            <FontAwesomeIcon
              title="live project link"
              size="2x"
              icon={faArrowUpRightFromSquare}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

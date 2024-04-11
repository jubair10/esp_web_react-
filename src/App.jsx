import { useEffect, useState } from "react";
import AnimBG from "./components/AnimBG";
import CardGrid from "./components/CardGrid";
import NavBar from "./components/NavBar";
import { startUp } from "./components/animationUtils";
import Modal from "./components/Modal";

function App() {
  const [ToggleModal, setToggleModal] = useState(false);
  return (
    <>
      {/* <AnimBG /> */}
      <Modal />
      <header>
        <NavBar />
      </header>
      <CardGrid />
    </>
  );
}

export default App;

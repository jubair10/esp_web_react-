import { useEffect, useState } from "react";
import AnimBG from "./components/AnimBG";
import CardGrid from "./components/CardGrid";
import NavBar from "./components/NavBar";
import { startUp } from "./components/animationUtils";
import Modal from "./components/Modal";
import axios, { Axios } from "axios";

function App() {
  const [modalAnimInit, setModalAnimInit] = useState({
    x: window.screenX / 2,
    y: window.screenY / 2,
  });
  const [ToggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    startUp();

    axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

  }, []);

  return (
    <>
      <AnimBG />
      {ToggleModal && (
        <Modal
          closeModal={setToggleModal}
          isModal={ToggleModal}
          modalAnimInit={modalAnimInit}
        />
      )}
      <header>
        <NavBar />
      </header>
      <CardGrid
        setToggleModal={setToggleModal}
        setModalAnimInit={setModalAnimInit}
      />
    </>
  );
}

export default App;

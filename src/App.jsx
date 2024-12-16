import { useState } from "react";
// import AnimBG from "./components/AnimBG";
import CardGrid from "./components/CardGrid";
import NavBar from "./components/NavBar";
// import { startUp } from "./components/animationUtils";
import Modal from "./components/Modal";
// import io from "socket.io-client";
// import axios, { Axios } from "axios";
import { SnackbarProvider} from "notistack";
import NotificationSystem from "./components/NotificationSystem";
import RealtimeUpdates from "./components/Updates";

// const socket = io("http://localhost:3000");



function App() {
  const [modalAnimInit, setModalAnimInit] = useState({
    x: 1046,
    y: 182,
  });
  const [ToggleModal, setToggleModal] = useState(false);
  const [ModalDataRef, setModalDataRef] = useState();

  const [data, setData] = useState({
    // temperature: 33.2,
    // humidity: 80,
    // fire: true,
    // gas: true,
    // sound_frequency: 100,
    // total_fire_ignited: 10,
    // total_gas_detected: 1,
  });

  return (
    <>
      {ToggleModal && (
        <Modal
          closeModal={setToggleModal}
          isModal={ToggleModal}
          modalAnimInit={modalAnimInit}
          ModalDataRef={ModalDataRef}
        />
      )}
      
      <header>
        <NavBar />
      </header>
      <CardGrid
        setToggleModal={setToggleModal}
        setModalAnimInit={setModalAnimInit}
        data={data}
        setModalDataRef={setModalDataRef}
      />

      <SnackbarProvider maxSnack={3}>
        <NotificationSystem data={data}/>
      </SnackbarProvider>

      <RealtimeUpdates setData={setData}/>


    </>
  );
}

export default App;

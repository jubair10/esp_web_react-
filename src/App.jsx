import { useRef, useState } from "react";
// import AnimBG from "./components/AnimBG";
import CardGrid from "./components/CardGrid";
import NavBar from "./components/NavBar";
// import { startUp } from "./components/animationUtils";
import Modal from "./components/Modal";
// import io from "socket.io-client";
// import axios, { Axios } from "axios";
import { SnackbarProvider } from "notistack";
import NotificationSystem from "./components/NotificationSystem";
import RealtimeUpdates from "./components/Updates";
import { motion } from "framer-motion";

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
  const [ImgData, setImgData] = useState(null);
  const ref = useRef(null);

  return (
    <div ref={ref}>
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

      { ImgData && (
      <div className="flex justify-center items-center gap-8 my-16 md:my-16 mx-20 lg:mx-52 xl:mx-60 g-[#123f4d]">
        <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.1 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
          className="flex flex-col gap-5 p-5 bg-[#123f4d8f] rounded-2xl glass justify-center relative"
        >
          <div className="h-full w-full absolute z-10">
          </div>
            <div className="text-center">
            <h2>
              Time: {new Date(ImgData.timestamp * 1000).toLocaleString().split(',')[1]}
            </h2>
            <h2>Date: {new Date(ImgData.timestamp * 1000).toLocaleString().split(',')[0]}</h2>
            </div>

            <div className="h- w-80 object-contain rounded-xl overflow-hidden">
              <img src={ImgData.url} alt="Current image" className="filter drop-shadow-2xl brightness-110 select-none"/>
            </div>
        </motion.div>
      </div>
      )
      }
      <SnackbarProvider maxSnack={3}>
        <NotificationSystem data={data} />
      </SnackbarProvider>

      <RealtimeUpdates setData={setData} setImgData={setImgData} />
    </div>
  );
}

export default App;

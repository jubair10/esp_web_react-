/* eslint-disable react/prop-types */
import { Expo, gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { magnet } from "./animationUtils";
import {
  FireSafetyGuide,
  GasLeakGuide,
  HumidityTips,
  SurvivalGuide,
} from "./Instructions";

const Modal = ({ closeModal, isModal, modalAnimInit, ModalDataRef }) => {
  const tl = useRef();
  const closeBtn = useRef();
  const closeBtnAnim = magnet(closeBtn, 1.05, 0.6);
  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.from(".modal", {
      scale: 0,
      duration: 0.6,
      x: modalAnimInit.x,
      y: modalAnimInit.y,
      ease: Expo.easeInOut,
    });
    console.log(modalAnimInit);
  }, [modalAnimInit]);

  useEffect(() => {
    if (isModal) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    console.log(ModalDataRef);
  }, [ModalDataRef, isModal]);

  return (
    <div className="modal-container h-screen w-screen backdrop-brightness-100 fixed  z-[100] flex justify-center items-center">
      <div
        ref={tl}
        className="modal lg:h-4/5 bg-zinc-900  h-4/6 w-2/3 md:w-3/5 rounded-3xl py-3 px-4 absolute"
      >
        <div className="modal-header flex items-center justify-around relative">
          <span
            ref={closeBtn}
            className="modal-close text-4xl text-[#000000] font-light -mr-16 -mt-14 invert"
            onClick={() => closeModal(!isModal)}
            onMouseEnter={closeBtnAnim}
          >
            <GrClose />
          </span>
        </div>
        <div className="modal-content h-5/6 overflow-auto elem-scrollBar">
          <div className="w-5/6  md:mx-4 rounded-lg p-4 overflow-y-auto">
            {ModalDataRef === "fire" ? (
              <FireSafetyGuide />
            ) : ModalDataRef === "gas" ? (
              <GasLeakGuide />
            ) : ModalDataRef === "humidity" ? (
              <HumidityTips />
            ) : (
              <SurvivalGuide />
            )}
          </div>
        </div>
        <div className="modal-footer mt-3 text-center text-xs text-white/60 font-medium absolute bottom-10 left-1/2">
          &copy;Jubair
        </div>
      </div>
    </div>
  );
};

export default Modal;

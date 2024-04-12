import { Expo, gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { handleMouseEnter, handleMouseLeave, magnet } from "./animationUtils";

const Modal = ({ closeModal, isModal, modalAnimInit }) => {
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
  }, [isModal]);

  return (
    <div className="modal-container h-screen w-screen backdrop-brightness-50 fixed z-[100] flex justify-center items-center ">
      <div
        ref={tl}
        className="modal bg-[#001219] h-4/6 w-3/5 rounded-3xl py-3 px-4 absolute"
      >
        <div className="modal-header flex items-center justify-around relative">
          <span className="text-[2.5em] font-semibold tracking-wider">
            Fire
          </span>
          <span
            ref={closeBtn}
            className="modal-close text-4xl text-[#000000] font-light -mr-16 -mt-14 invert"
            onClick={() => closeModal(!isModal)}
            onMouseEnter={closeBtnAnim}
          >
            <GrClose />
          </span>
        </div>
        <div className="modal-content h-3/4 overflow-auto elem-scrollBar">
          <div className="w-5/6 mx-auto rounded-lg shadow-md p-8 overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Fire Safety Guide</h1>
            <ol className="list-decimal list-inside">
              <li className="mb-4">
                Stay Calm: In case of a fire, try to stay calm. Panic can impair
                your judgment.
              </li>
              <li className="mb-4">
                Alert Others: If others are in the house, alert them
                immediately. Ensure everyone knows the quickest exit routes.
              </li>
              <li className="mb-4">
                Exit Safely: Leave the building as quickly as possible. Crawl
                low under smoke if necessary; smoke rises, so the cleanest air
                will be near the ground.
              </li>
              <li className="mb-4">
                Check Doors: Before opening any doors, use the back of your hand
                to touch the door and doorknob. If they're hot, don't open the
                door. Find another escape route.
              </li>
              <li className="mb-4">
                Use Exit Routes: Use stairwells or designated exit routes.
                Elevators may not be safe during a fire.
              </li>
              <li className="mb-4">
                Alert Authorities: Once outside, call emergency services
                immediately. Provide them with your address and inform them of
                any trapped individuals.
              </li>
              <li className="mb-4">
                Stay Outside: Do not re-enter the building until authorities
                declare it safe to do so.
              </li>
              <li className="mb-4">
                Account for Everyone: If someone is missing, inform the
                firefighters, but do not re-enter the building yourself.
              </li>
              <li className="mb-4">
                Have a Meeting Point: Designate a safe meeting point outside the
                house where everyone can gather.
              </li>
              <li className="mb-4">
                Don't Delay: Never underestimate the speed of a fire. Act
                quickly and decisively.
              </li>
            </ol>
          </div>
        </div>
        <div className="modal-footer pt-3 text-center text-xs text-white/60 font-medium">
          &copy;Jubair
        </div>
      </div>
    </div>
  );
};

export default Modal;

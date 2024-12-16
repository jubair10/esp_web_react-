/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { handleMouseEnter, handleMouseLeave, magnet } from "./animationUtils";

const CardBottom = ({
  setToggleModal,
  setModalAnimInit,
  setModalDataRef,
  id,
}) => {
  const btnLgRef = useRef();
  const btnRef = useRef();
  const handleMouseEnterImg = magnet(btnRef, 1.2, 0.5);
  return (
    <>
      <div className="mt-3 flex justify-between items-center ">
        <span
          ref={btnLgRef}
          className={`btn text-base font-medium text-white/80 bg-[#0f313173] rounded-3xl p-3 lg:p-2 backdrop-blur-3xl sm:text-lg lg:text-[.8em] lg:font-semibold xl:text-[0.8em]`}
          onClick={() => {
            setToggleModal(true);
            setModalDataRef(id);

            const { x, y } = btnRef.current.getBoundingClientRect();
          }}
          onMouseOver={(e) => {
            handleMouseEnter(btnLgRef, 1.1);
          }}
          onMouseLeave={() => {
            handleMouseLeave(btnLgRef);
          }}
        >
          {/* {id == "temperature"
            ? "Tempareture: 40°C"
            : id == "humidity"
            ? "60%"
            : "Learn More"} */}
            Learn More
        </span>
        <img
          ref={btnRef}
          src="images/arrow-90.png"
          alt="learn-more"
          className="btn-image btn h-9 w-9 mx-6 invert border-black rounded-full p-2 border-2"
          onClick={() => {
            setToggleModal(true);
            const { x, y } = btnRef.current.getBoundingClientRect();
            console.log(btnRef.current.getBoundingClientRect());
            setModalAnimInit({ x, y });
            setModalDataRef(id);
          }}
          onMouseEnter={handleMouseEnterImg}
        />
      </div>
    </>
  );
};

export default CardBottom;

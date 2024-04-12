import { Power3 } from "gsap";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { handleMouseEnter, handleMouseLeave, magnet } from "./animationUtils";

export const Card = ({ setToggleModal, setModalAnimInit }) => {
  const btnLgRef = useRef();
  const btnRef = useRef();
  const handleMouseEnterImg = magnet(btnRef, 1.2, 0.5);
  // const handleMouseEnterLg = magnet(btnLgRef, 1.08, 0.5);

  return (
    <>
      <div
        id="fire"
        className="card h-full w-fit rounded-2xl bg-[#123f4d] relative py-4"
      >
        <div className="flex items-center justify-between px-4">
          <span className="text-[2.5em] font-semibold">Fire</span>
          <img
            src="./images/fire.png"
            alt="fire-gif"
            className="saturate-150 h-16 w-16 absolute right-3 -top-9"
          />
        </div>
        <div className="px-4">
          <span className="desc text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            nulla fugiat numquam tempore molestiae iste itaque explicabo,
            consequatur ad temporibus libero porro fuga impedit voluptatibus in
            natus ipsum. Expedita accusantium hic temporibus explicabo, placeat
            ipsam molestiae quaerat odio, perferendis doloribus quasi assumenda
            sit dignissimos cum.
          </span>
          <div className="mt-3 flex justify-between items-center ">
            <span
              ref={btnLgRef}
              className="btn text-xl font-medium text-white/80 bg-[#0f313173] rounded-3xl p-3 backdrop-blur-3xl"
              onClick={() => setToggleModal(true)}
              onMouseOver={(e) => {
                handleMouseEnter(btnLgRef, 1.1);
                // console.log(e);
              }}
              onMouseLeave={() => {
                handleMouseLeave(btnLgRef);
              }}
              // onMouseEnter={handleMouseEnterLg}
            >
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
              }}
              onMouseEnter={handleMouseEnterImg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// export default Card;

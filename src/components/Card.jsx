/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { handleMouseEnter, handleMouseLeave, magnet } from "./animationUtils";
import { motion } from "framer-motion";
import CardBottom from "./CardBottom";

export const Card = ({
  setToggleModal,
  setModalAnimInit,
  setModalDataRef,
  id,
  desc,
  image,
  data,
}) => {
  const btnImgRef = useRef();

  const handleMouseEnterIcon = magnet(btnImgRef, 1.08, 0.5);

  const ref = useRef(null);

  return (
    <>
      <motion.div
        ref={ref}
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        id={id}
        className="card h-full w-fit rounded-2xl bg-[#123f4d] relative py-4 mt-10 sm:mt-0"
      >
        <div className="flex items-center justify-between px-4 ">
            <span className={`font-semibold`}>
              {id === "fire Detected" && data["total_fire_ignited"]
                ? `Fire Ignited: ${data["total_fire_ignited"]} Times`
                : id === "gas Detected" && data["total_gas_detected"]
                ? `Gas Smelled: ${data['total_gas_detected']} Times`
                : id === "temperature"
                ? `Temperature: ${data["temperature"]}°C`
                : id === "humidity"
                ? `Humidity: ${data["humidity"]}%`
                : capitalizeString(id)}
          </span>
          <img
            ref={btnImgRef}
            src={image}
            alt="fire-gif"
            className=" rounded-full h-16 w-16 absolute right-3 -top-9"
            onClick={() => setToggleModal(true)}
            onMouseEnter={handleMouseEnterIcon}
          />
        </div>
        <div className="px-4">
          <span className={`desc text-sm`}>{desc}</span>

          <CardBottom
            setToggleModal={setToggleModal}
            setModalAnimInit={setModalAnimInit}
            setModalDataRef={setModalDataRef}
            id={id}
          />
        </div>
      </motion.div>
    </>
  );
};

function capitalizeString(s) {
  // Split the string into words
  var words = s.split(" ");

  // Capitalize the first letter of each word
  var capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the capitalized words back into a single string
  var capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
}

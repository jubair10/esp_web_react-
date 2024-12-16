/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { Card } from "./Card";

const CardGrid = ({
  setToggleModal,
  setModalAnimInit,
  data,
  setModalDataRef,
}) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="gridTable h-4/6 sm:grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 sm:grid-cols-2 place-items-center gap-8 my-16 md:my-16 mx-20 lg:mx-52 xl:mx-60">
      {cardSchema.map((card) => {
        return (
          <Card
            setToggleModal={setToggleModal}
            setModalAnimInit={setModalAnimInit}
            setModalDataRef={setModalDataRef}
            key={card.id}
            id={card.id}
            desc={card.desc}
            image={card.image}
            data={data}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;

const cardSchema = [
  {
    id: "fire Detected",
    image: "./images/fire.png",
    desc: "Always prioritize fire safety. Learn about fire prevention and have a fire escape plan in place. Respect fire's power, but understand its uses for controlled benefits.",
  },
  {
    id: "gas Detected",
    image: "./images/gas.png",
    desc: "Understanding gas behavior is crucial for many professions. Whether it's cooking, using gas appliances, or working in an industry that utilizes gas, knowledge can ensure safety and efficiency.",
  },
  {
    id: "humidity",
    image: "./images/humidity.png",
    desc: "Monitor humidity levels in your environment. A healthy balance is essential for your comfort and can impact your health. Consider investing in a humidifier or dehumidifier to optimize your surroundings.",
  },
  {
    id: "temperature",
    image: "./images/temperature.png",
    desc: "Temperature awareness is key in many aspects of life. From understanding weather patterns to cooking perfectly, being mindful of temperature helps you navigate various situations effectively.",
  },
];

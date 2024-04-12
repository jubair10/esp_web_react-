import { Card } from "./Card";

const CardGrid = ({ setToggleModal, setModalAnimInit }) => {
  return (
    <div className="gridTable h-5/6 sm:grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 sm:grid-cols-2 place-items-center gap-8 my-16 md:my-16 mx-20 lg:mx-60">
      <Card
        setToggleModal={setToggleModal}
        setModalAnimInit={setModalAnimInit}
      />
    </div>
  );
};

export default CardGrid;

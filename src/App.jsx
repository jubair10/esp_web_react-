import { useEffect } from "react";
import AnimBG from "./components/AnimBG";
import CardGrid from "./components/CardGrid";
import NavBar from "./components/NavBar";
import { startUp } from "./components/animationUtils";

function App() {
  useEffect(() => {
    startUp();
  }, []);
  return (
    <>
      <AnimBG />
      <header>
        <NavBar />
      </header>
      <CardGrid />
    </>
  );
}

export default App;

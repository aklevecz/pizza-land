import { useEffect } from "react";
import "./App.css";
import { useThreeScene } from "./contexts/Three";

function App() {
  const { initScene } = useThreeScene();
  useEffect(() => {
    initScene();
  }, [initScene]);
  return <div className="App"></div>;
}

export default App;

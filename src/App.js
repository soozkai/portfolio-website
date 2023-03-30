import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
    </Routes>
  );
}

export default App;

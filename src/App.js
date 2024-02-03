import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index"
import About from "./Pages/About"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;

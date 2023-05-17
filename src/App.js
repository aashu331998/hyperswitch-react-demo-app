import MyCart from "./MyCart";
import Completion from "./components/Completion";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyCart />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </>
  );
};

export default App;

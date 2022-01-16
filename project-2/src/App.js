import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DropdownNav from "./Components/DropdownNav";
import Home from "./Components/Home";
import Bill from "./Components/Bill";
import Expense from "./Components/Expense";
import Other from "./Components/Other";

function App() {

  const [toggle, setToggle] = useState(false);

  const open = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth >= 768 && toggle === true) {
        setToggle(false)
      }
    }
    window.addEventListener("resize", hideMenu)
    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  });

  return (
    <>
      <Navbar open={open}/>
      <DropdownNav open={open} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </>
  );
}

export default App;

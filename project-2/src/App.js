import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DropdownNav from "./Components/DropdownNav";
import Home from "./Components/Home";
import Bill from "./Components/Bill";
import Expense from "./Components/Expense";
import Other from "./Components/Other";

function App() {
  return (
    <>
      <Navbar />
      <DropdownNav />
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

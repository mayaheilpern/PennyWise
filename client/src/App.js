import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import DropdownNav from "./Components/DropdownNav";
import Bill from "./Components/Bill";
import Expense from "./Components/Expense";
import Other from "./Components/Other";
import billAPI from "./services/bill";
import expenseAPI from "./services/expense";
import otherAPI from "./services/other";

function App() {
  const [toggle, setToggle] = useState(false);

  const open = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth >= 768 && toggle === true) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  const [billData, setBillData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [otherData, setOtherData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const res = await billAPI.get();
      setBillData(res.data.records);
    };
    request();
  }, []);

  useEffect(() => {
    const request = async () => {
      const res = await expenseAPI.get();
      setExpenseData(res.data.records);
    };
    request();
  }, []);

  useEffect(() => {
    const request = async () => {
      const res = await otherAPI.get();
      setOtherData(res.data.records);
    };
    request();
  }, []);

  return (
    <>
      <Navbar open={open} />
      <DropdownNav open={open} toggle={toggle} />
      <Routes>
        <Route
          path="/"
          element={
            <Bill
              billData={billData}
              expenseData={expenseData}
              otherData={otherData}
            />
          }
        />
        <Route
          path="/expense"
          element={
            <Expense
              billData={billData}
              expenseData={expenseData}
              otherData={otherData}
            />
          }
        />
        <Route
          path="/other"
          element={
            <Other
              billData={billData}
              expenseData={expenseData}
              otherData={otherData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

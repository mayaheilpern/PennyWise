import { useState } from 'react';
import api from "../services/expense";
import Add from './Add';
import Tables from "./Tables";
import PieChart from './PieChart';
import TotalChart from './TotalChart';

export default function Bill({billData, expenseData, otherData}) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {fields: { name, amount, date }}
    await api.post("/", fields);
    setShow(false)
    setName("");
    setAmount("");
    setDate();
  }

  let totalBill = billData.reduce((a, v) => a = a + v.fields.amount, 0);
  let totalExpense = expenseData.reduce((a, v) => a = a + v.fields.amount, 0);
  let totalOther = otherData.reduce((a, v) => a = a + v.fields.amount, 0);
  let total = totalBill + totalExpense + totalOther;

  return (
    <>
      <div className="flex justify-between px-5 py-4">
        <h1 className="text-sky-500 text-3xl">Expenses</h1>
        <button className="bg-sky-500 rounded px-2 text-white" onClick={() => setShow(!show)}>Add New Expense</button>
      </div>
      <Add
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
        date={date}
        setDate={setDate}
        handleSubmit={handleSubmit}
        show={show}
      />
      <div className="md:grid md:grid-cols-3">
        <Tables data={expenseData} total={totalExpense} />
        <div className="p-5">
          <div className="rounded-lg shadow-2xl">
            <PieChart className="items-center" data={expenseData} />
            <TotalChart totalBill={totalBill} totalExpense={totalExpense} totalOther={totalOther}/>
            <div className="p-4">
              <h3 className="text-center bg-sky-500 rounded py-1 text-white">{`Total $${total}`}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

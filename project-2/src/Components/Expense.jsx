import { useState, useEffect } from 'react';
import api from "../services/expense";
import Add from './Add';
import Tables from "./Tables";
import PieChart from './PieChart';

export default function Bill() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const res = await api.get();
      setData(res.data.records);
      setLoading(false);
    }
    request();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {fields: { name, amount, date }}
    await api.post("/", fields);
    setShow(false)
    setName("");
    setAmount("");
    setDate();
  }

  let totalExpense = data.reduce((a, v) => a = a + v.fields.amount, 0);

  return (
    <>
      <div className="flex justify-between px-5 py-4">
        <h1 className="text-sky-500 text-3xl">Expenses</h1>
        <button className="bg-sky-500 rounded px-2 text-white" onClick={() => setShow(true)}>Add New Bill</button>
        <Add
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          date={date}
          setDate={setDate}
          handleSubmit={handleSubmit}
          show={show}
          setShow={setShow}
        />
      </div>
      {loading ? (
        <span>Loading...</span>
        ) : (
          <div className="md:grid md:grid-cols-3">
            <Tables data={data} total={totalExpense}/>
            <PieChart className="items-center" data={data} title={"Expenses"} />
          </div>
        )
      }
    </>
  )
}

import { useState, useEffect } from 'react';
import api from "../services/bill";
import Add from './Add';
import Tables from "./Tables";

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

  let total = data.reduce((a, v) => a = a + v.fields.amount, 0);

  return (
    <div>
      <h1>Bills</h1>
      <button onClick={() => setShow(true)}>Add New Bill</button>
      <Add trigger={show}
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
      {loading ? (
        <span>Loading...</span>
        ) : (
          <>
            <Tables data={data} />
            <h3 className="text-center">{`Total $${total}`}</h3>
          </>
        )
      }
    </div>
  )
}

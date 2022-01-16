import { useState, useEffect } from 'react';
import api from "../services/bill";
import Tables from "./Tables";

export default function Bill() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const res = await api.get();
      setData(res.data.records);
      setLoading(false);
    }
    request();
  }, []);

  let total = data.reduce((a, v) => a = a + v.fields.amount, 0);

  return (
    <div>
      <h1>Bills</h1>
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

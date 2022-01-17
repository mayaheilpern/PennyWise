import { Link } from 'react-router-dom';

export default function({open, toggle}) {
  return (
    <div
      className={toggle ? "grid grid-rows-5 text-center items-center text-black" : "hidden"}
      onClick={open}
    >
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/bill" className="hover:text-gray-300">Bills</Link>
      <Link to="/expense" className="hover:text-gray-300">Expenses</Link>
      <Link to="/other" className="hover:text-gray-300">Other Charges</Link>
    </div>
  )
}

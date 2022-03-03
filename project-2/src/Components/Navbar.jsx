import { Link } from "react-router-dom";

export default function Navbar({ open }) {
  return (
    <nav className="text-black">
      <div className="p-5 mx-auto flex justify-between">
        <Link
          to="/"
          className="font-bold text-sky-500 flex md:text-4xl text-3xl"
        >
          <h1 className="pt-2 md:pl-2">Tracker</h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="pt-3">
            Home
          </Link>
          <Link to="/bill" className="pt-3">
            Bills
          </Link>
          <Link to="/expense" className="pt-3">
            Expenses
          </Link>
          <Link to="/other" className="pt-3">
            Other Charges
          </Link>
        </div>
        <div className="md:hidden flex cursor-pointer">
          <button onClick={open}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr />
    </nav>
  );
}

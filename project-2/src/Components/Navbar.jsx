import { Link } from "react-router-dom";

export default function Navbar({open}) {

  return (
    <nav className="text-blacj">
      <div className="px-8 py-5 mx-auto flex justify-between">
        <Link to="/" className="font-bold hover:text-gray-300">
          <h1>Logo</h1>
        </Link>
        <div className="hidden md:flex flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/bill" className="hover:text-gray-300">Bills</Link>
          <Link to="/expense" className="hover:text-gray-300">Expenses</Link>
          <Link to="/other" className="hover:text-gray-300">Other Charges</Link>
        </div>
        <div className="md:hidden flex cursor-pointer">
          <button className="hover:text-gray-300" onClick={open}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

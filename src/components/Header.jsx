import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="font-bold text-sm sm:text-xl flex flex-wrap ">
          <span className="text-slate-500">Zoran</span>
          <span className="text-slate-700">Estate</span>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center w-24 sm:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="background-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline text-slate-700 hover:underline">Signin</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

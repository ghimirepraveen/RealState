import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hearder() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sn sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Real</span>
          <span className="text-slate-700">State</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 ">
          <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className=" text-slate-700 hover:underline hover:cursor-pointer">
            <Link to="/sign-in">Sign in </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

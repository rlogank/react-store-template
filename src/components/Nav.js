import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <nav className="absolute top-0 w-full bg-[#191919] p-5 text-white">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between">
          <h1 className="text-xl font-bold">audiophile</h1>
          <div className="hidden gap-10 text-xs font-semibold uppercase tracking-wide lg:flex">
            <Link to="/" className="opacity-80 transition hover:opacity-100">
              Home
            </Link>
            <Link to="/" className="opacity-80 transition hover:opacity-100">
              Headphones
            </Link>
            <Link to="/" className="opacity-80 transition hover:opacity-100">
              Speakers
            </Link>
            <Link to="/" className="opacity-80 transition hover:opacity-100">
              Earphones
            </Link>
            <Link to="/" className="opacity-80 transition hover:opacity-100">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <FaShoppingCart />
            </div>
            <div className="flex lg:hidden">
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[68px]" />
    </>
  );
};

export default Nav;

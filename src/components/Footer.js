import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#191919] py-10 px-5 text-white">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row lg:gap-0">
          <h3 className="text-xl font-bold">audiophile</h3>
          <div className="flex gap-5 text-xs font-medium uppercase tracking-wider">
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
          </div>
        </div>

        <div className="mt-5 flex flex-col-reverse items-center justify-between gap-5 lg:flex-row lg:gap-0">
          <div className="text-[0.65rem] opacity-30">Copyright 2022. All rights reserved.</div>
          <div className="flex gap-5 text-xl">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

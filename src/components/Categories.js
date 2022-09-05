import akg from "../assets/akg.webp";
import krk from "../assets/krk.png";
import earbuds from "../assets/earbbuds.png";
import { FaChevronRight } from "react-icons/fa";

const Categories = () => {
  return (
    <section className="relative -z-20 overflow-hidden bg-[#f3f5f9] px-5 py-20 lg:py-28">
      <div className="relative mx-auto flex max-w-screen-lg flex-col justify-between gap-10 text-neutral-700 lg:flex-row">
        <div className="relative mx-auto mt-20 flex w-full max-w-lg flex-col items-center gap-2.5 rounded-2xl bg-white p-10 pt-24">
          <img
            className="absolute -top-20 h-40 w-40 object-contain lg:-top-32 lg:h-52 lg:w-52"
            src={akg}
            alt="AKG Headphones"
          />
          <h3 className="font-semibold uppercase">Headphones</h3>
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Shop <FaChevronRight className="text-[0.65rem] text-blue-500" />
          </div>
        </div>
        <div className="relative mx-auto mt-20 flex w-full max-w-lg flex-col items-center gap-2.5 rounded-2xl bg-white p-10 pt-24">
          <img
            className="absolute -top-20 h-40 w-40 object-contain lg:-top-32 lg:h-52 lg:w-52"
            src={krk}
            alt="KRK Speakers"
          />
          <h3 className="font-semibold uppercase">Speakers</h3>
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Shop <FaChevronRight className="text-[0.65rem] text-blue-500" />
          </div>
        </div>
        <div className="relative mx-auto mt-20 flex w-full max-w-lg flex-col items-center gap-2.5 rounded-2xl bg-white p-10 pt-24">
          <img
            className="absolute -top-20 h-40 w-40 object-contain lg:-top-32 lg:h-52 lg:w-52"
            src={earbuds}
            alt="Earbuds"
          />
          <h3 className="font-semibold uppercase">Earbuds</h3>
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Shop <FaChevronRight className="text-[0.65rem] text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

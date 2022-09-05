import krk from "../assets/krk.png";
import desk from "../assets/desk.webp";
import air from "../assets/airbuds.jpg";
import { FaChevronRight } from "react-icons/fa";

const ProductBanners = () => {
  return (
    <section className="py-20 px-5 lg:py-28">
      <section className="mx-auto flex w-full max-w-screen-lg flex-col gap-5 lg:gap-10">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 px-10 pb-16 text-white lg:h-96 lg:max-w-full lg:flex-row-reverse lg:rounded-2xl lg:pb-0">
          <img src={krk} alt="KRK Speakers" className="pb-12 lg:scale-90" />
          <div className="lg:w-1/2">
            <h3 className="mb-5 text-center text-4xl font-semibold uppercase lg:text-left">
              KRK Rokit 5 G4
            </h3>
            <p className="mx-auto text-center md:w-3/4 lg:mx-0 lg:w-full lg:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
              sound.
            </p>
            <button className="mx-auto mt-7 flex bg-black px-5 py-4 text-xs font-medium uppercase tracking-widest lg:mx-0">
              See Product
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg flex-col overflow-hidden rounded-2xl lg:max-w-full lg:flex-row lg:gap-10">
          <div className="flex lg:h-72 lg:w-1/2">
            <img
              src={air}
              alt="Air Buds"
              className="h-full w-full object-cover contrast-75 lg:rounded-2xl"
            />
          </div>
          <div className="absolute bottom-0 w-full items-center bg-gray-100 bg-opacity-0 p-5 backdrop-blur-2xl lg:relative lg:h-72 lg:w-1/2 lg:rounded-2xl lg:bg-opacity-100 lg:p-20">
            <h3 className="flex flex-wrap items-center gap-2.5 text-xl font-semibold uppercase tracking-wider text-white lg:mb-2.5 lg:text-3xl lg:text-neutral-700">
              Y2K Air Buds{" "}
              <span className="ml-auto flex items-center gap-1.5 text-[0.65rem] md:text-xs lg:hidden">
                See Product <FaChevronRight className="text-[0.60rem] lg:text-2xl" />
              </span>
            </h3>
            <button className="mx-auto mt-7 hidden border-2 border-black px-5 py-4 text-xs font-medium uppercase tracking-widest lg:mx-0 lg:flex">
              See Product
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[625px] w-full max-w-lg items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 text-white lg:h-96 lg:max-w-full lg:rounded-2xl">
          <img
            src={desk}
            alt="Speakers on a desk"
            className="absolute h-full w-full bg-center object-cover object-right lg:-top-40 lg:h-auto lg:object-center"
          />
          <div className="absolute z-10 h-full w-full bg-gradient-to-tl from-black to-transparent"></div>
          <div className="flex h-full w-full flex-col justify-end p-10">
            <h3 className="relative z-10 mb-5 ml-auto flex text-right text-4xl font-semibold uppercase">
              PreSonus ERIS BT 3.5
            </h3>

            <button className="z-20 ml-auto mt-2.5 bg-white px-5 py-4 text-xs font-medium uppercase tracking-widest text-black">
              See Product
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductBanners;

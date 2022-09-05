import headphones from "../assets/headphones.jpg";

const Hero = () => {
  return (
    <section className="min-h-[70vh] bg-[#191919] px-5 pb-40 text-white lg:pb-0">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col-reverse justify-center lg:flex-row lg:items-center">
        <div className="mx-auto lg:w-1/2">
          <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-[8px] text-white opacity-30 lg:text-left">
            New Product
          </h3>
          <h3 className="mb-5 text-center text-4xl font-semibold uppercase lg:text-left lg:text-6xl">
            XX99 Mark II Headphones
          </h3>
          <p className="mx-auto mb-10 w-4/5 text-center text-sm font-light opacity-60 lg:mx-0 lg:text-left">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <button className="mx-auto flex bg-blue-500 px-5 py-4 text-xs font-medium uppercase tracking-widest lg:mx-0 lg:mr-auto lg:justify-start">
            See Product
          </button>
        </div>

        <div className="mx-auto w-full max-w-sm lg:w-1/2 lg:max-w-full">
          <img src={headphones} alt="Headphones" className=" brightness-[120%] contrast-[90%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import grado from "../assets/grado.jpg";

const About = () => {
  return (
    <section className="relative flex flex-col-reverse overflow-hidden bg-[#f3f5f9] px-5 py-20 lg:flex-row lg:pb-0 lg:pt-0">
      <section className="mx-auto flex max-w-lg text-neutral-800 lg:max-w-screen-lg">
        <div className="flex flex-col justify-center gap-5 py-10 pr-10 lg:mt-0 lg:w-1/2 lg:py-40">
          <h3 className="text-4xl font-semibold uppercase">
            Bringing you the <span className="text-[#DDB49E]">best</span> audio gear
          </h3>
          <p className="text-sm font-light text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis, nisi veniam
            assumenda saepe id cum tempora eum dicta sequi ipsa minus. Nostrum libero quae sit
            quaerat molestias temporibus iure! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quo quae vitae fugit tempore sapiente. Hic consequatur quibusdam ratione
            dignissimos deserunt id quos magnam expedita. Architecto nisi eveniet nemo iusto esse!
          </p>
          <button className="mr-auto mt-2 flex border-2 border-black px-5 py-4 text-xs font-semibold uppercase">
            Contact Us
          </button>
        </div>
      </section>
      <div className="right-0 mx-auto h-[175px] w-full max-w-lg lg:absolute lg:h-full lg:w-1/2 lg:max-w-full">
        <img
          src={grado}
          alt="Grado Headphones"
          className="h-full w-full rounded-2xl object-cover object-center lg:rounded-none"
        />
      </div>
    </section>
  );
};

export default About;

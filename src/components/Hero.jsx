export default function Hero() {
  return (
    <section className="grid gap-5 my-4 ">
      <picture>
        <source media="(min-width: 850px)" srcSet="/image-web-3-desktop.jpg" />
        <img src="/image-web-3-mobile.jpg" alt="" className="w-full mb-4" />
      </picture>
      <div className="lg:grid lg:grid-cols-[auto_auto]">
        <h1 className="text-5xl text-cust-Very-dark-blue font-extrabold mb-4">
          The Bright Future of Web 3.0?
        </h1>
        <div>
          <p className="text-cust-Dark-grayish-blue text-base/7 font-light mb-4">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-cust-Soft-red text-cust-Very-dark-blue font-bold w-48 p-4 uppercase tracking-[0.2em] hover:bg-cust-Very-dark-blue hover:text-cust-Off-white transition duration-300 ease-in cursor-pointer">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}

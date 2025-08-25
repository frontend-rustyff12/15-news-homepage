export default function Hero() {
  return (
    <section className="flex flex-col gap-5 my-4">
      <div
        className="bg-[url('/image-web-3-mobile.jpg')] lg:bg-[url('/image-web-3-desktop.jpg')] w-full h-80 bg-cover bg-center"
        role="img"
        aria-label="Web  technology illustration"
      ></div>
      <h1 className="text-5xl text-cust-Very-dark-blue font-extrabold">
        The Bright Future of Web 3.0?
      </h1>

      <p className="text-cust-Dark-grayish-blue text-base/7 font-light">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>

      <button className="bg-cust-Soft-red text-cust-Very-dark-blue font-bold w-48 p-4 uppercase tracking-[0.2em] hover:bg-cust-Very-dark-blue hover:text-cust-Off-white transition duration-300 ease-in cursor-pointer">
        Read more
      </button>
    </section>
  );
}

export default function News() {
  const divClass =
    "flex flex-col gap-2 border-b-1 border-b-cust-Grayish-blue/75 pb-8";

  const h3Class = "text-cust-Off-white text-xl font-bold";

  const pClass = "text-cust-Off-white font-extralight";

  return (
    <section className="flex flex-col gap-8 bg-cust-Very-dark-blue px-5 py-8 my-10 md:my-4">
      <h2 className="text-cust-Soft-orange text-3xl font-bold">New</h2>

      <div className={divClass}>
        <h3 className={h3Class}>Hydrogen VS Electric Cars</h3>
        <p className={pClass}>
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>

      <div className={divClass}>
        <h3 className={h3Class}>The Downsides of AI Artistry</h3>
        <p className={pClass}>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="flex flex-col gap-2  ">
        <h3 className={h3Class}>Is VC Funding Drying Up?</h3>
        <p className={pClass}>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
}

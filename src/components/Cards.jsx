import { cardData } from "../data/data";
export default function Cards() {
  return (
    <section className="flex flex-col gap-8 mt-4 mb-8">
      {cardData.map((item, index) => (
        <article key={index} className="flex gap-6">
          <img className="w-28 h-full " src={item.img} alt={item.alt} />
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-cust-Soft-red">
              {item.num}
            </h3>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-cust-Dark-grayish-blue">{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

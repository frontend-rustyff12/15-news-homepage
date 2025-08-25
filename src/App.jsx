import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Cards from "./components/Cards";
function App() {
  return (
    <main className="bg-cust-Off-white flex justify-center">
      <div className="flex flex-col gap-4 px-5 py-8 font-inter  lg:py-16 lg:px-32  2xl:max-w-7xl">
        <Header />
        <div className="md:grid md:grid-cols-2 md:gap-8  lg:grid-cols-[2fr_1fr] ">
          <Hero />
          <News />
        </div>
        <Cards />
      </div>
    </main>
  );
}

export default App;

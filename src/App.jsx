import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Cards from "./components/Cards";
function App() {
  return (
    <main className="flex flex-col gap-8 px-5 py-8 font-inter bg-cust-Off-white">
      <Header />
      <Hero />
      <News />
      <Cards />
    </main>
  );
}

export default App;

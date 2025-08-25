import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Cards from "./components/Cards";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <main className="flex justify-center bg-cust-Off-white relative">
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 pointer-events-none" />
      )}
      <div className="flex flex-col gap-4 px-5 py-8 mb-6 font-inter md:mb-0 lg:py-16 lg:px-32  2xl:max-w-7xl">
        <Header toggleOpen={toggleOpen} isOpen={isOpen} />
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

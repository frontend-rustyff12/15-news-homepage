export default function Header({ isOpen, toggleOpen }) {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <header className="flex justify-between items-center">
      <img className="w-12 " src="/logo.svg" alt="W. logo" />
      <button
        className="absolute right-10 z-50 md:hidden"
        onClick={toggleOpen}
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <img className="w-12 h-8" src="/icon-menu.svg" alt="Menu hamburger" />
        ) : (
          <img
            className="w-12 h-8"
            src="/icon-menu-close.svg"
            alt="Menu hamburger"
          />
        )}
      </button>
      {/* Mobile */}
      <ul
        className={`${
          !isOpen
            ? "hidden"
            : "absolute right-0 top-0 flex flex-col gap-6 py-42 px-6 bg-cust-Off-white w-64 h-screen  md:hidden"
        } `}
      >
        {navItems.map((item, index) => (
          <li
            className="text-cust-Dark-grayish-blue text-xl hover:text-cust-Soft-red cursor-pointer"
            key={index}
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      {/* Tablet and Desktop */}
      <ul className="hidden md:flex md:gap-4 lg:gap-12">
        {navItems.map((item, index) => (
          <li
            className="text-cust-Dark-grayish-blue text-xl hover:text-cust-Soft-red cursor-pointer"
            key={index}
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

// md:flex md:gap-4 lg:gap-12

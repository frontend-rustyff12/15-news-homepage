export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <img className="w-12 " src="/logo.svg" alt="W. logo" />
      <button>
        <img src="/icon-menu.svg" alt="Menu hamburger" />
      </button>
    </header>
  );
}

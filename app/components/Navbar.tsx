import Link from "next/link";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center p-4 justify-between bg-white shadow-md">
        <MenuIcon />
        <Link href="/">BeBlum</Link>
        <div>
          <SearchIcon />
        </div>
      </nav>
    </header>
  );
}

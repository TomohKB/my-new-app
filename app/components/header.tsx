import Link from "next/link"

const Header =() => {
    return (
      <header className="bg-blue-400 text-white py-4">
        <Link href="/">
          <h1>My next.js App</h1>
        </Link>
      </header>
    );
};

export default Header;
import Link from "next/link";

const AppMenu = () => {
  return (
    <nav className="app-menu">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default AppMenu;

import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-1/2 md:w-1/4 max-w-sm flex justify-around">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
}

export default Header;
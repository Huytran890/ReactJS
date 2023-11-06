import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="space">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

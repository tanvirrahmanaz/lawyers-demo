import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Navbar = () => {
  return (
    <div className="bg-white shadow-md px-6 py-4">
      <div className="mx-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-green-700">Law.BD</span>
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="hidden md:flex gap-10 text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/blogs" className="hover:text-green-600">Blogs</Link>
          <Link to="/my-appointments" className="hover:text-green-600">My-Bookings</Link>
          <Link to="" className="hover:text-green-600">Contact us</Link>
        </div>

        {/* Right: Button */}
        <div className="flex-shrink-0">
          <Link to="/contact">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition">
              Contact Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

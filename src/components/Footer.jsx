import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo-footer.png'; // Update this if your logo file name differs

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Logo + Brand */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src={logo} alt="Law.BD Logo" className="w-8 h-8" />
          <h2 className="text-xl font-bold">Law.BD</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-8 mb-6 text-sm md:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/my-appointments" className="hover:underline">My-Bookings</Link>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://www.facebook.com/tanvirrahmanaz" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 hover:scale-110 transition" />
          </a>
          
          <a href="https://www.linkedin.com/in/tanvirrahmanaz/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-sky-500 hover:scale-110 transition" />
          </a>
          <a href="https://www.youtube.com/@TanvirRahman-o4j" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

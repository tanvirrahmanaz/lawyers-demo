import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <h1 className="text-6xl font-extrabold text-green-700 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;

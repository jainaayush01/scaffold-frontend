import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-900">
              MyApp
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
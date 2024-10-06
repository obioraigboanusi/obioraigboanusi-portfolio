import { Link } from 'react-router-dom';
import profileImg from '../assets/avarter.png';

function Navbar() {
  return (
    <nav>
      <div className="container py-2 flex justify-between">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={profileImg}
              alt="Obiora Igboanusi"
              className="h-10 w-10 rounded object-center"
            />
            <span className="font-semibold">Obiora Igboanusi</span>
          </Link>
        </div>
        <div>
          <button></button>
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

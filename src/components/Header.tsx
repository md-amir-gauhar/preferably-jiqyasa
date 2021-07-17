import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Preferably Jiqyasa
      </Link>
      <hr className="divider"/>
    </div>
  );
};

export default Header;

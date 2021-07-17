import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        <span>&#9001;</span>Preferably Jiqyasa{" "} <span>/&#9002;</span>
      </Link>
      <hr className="divider"/>
    </div>
  );
};

export default Header;

import './../styles/NavBar.css';
import { Link } from 'react-router-dom';


const Nav = () => (
    <div>
        <nav>
            <Link to="/" className="homelink">
                <h1 className="valorantgg">VALORANTGG</h1>
            </Link>
            <ul className="nav-links">
                <Link to='/agents' className="homelink">
                    <li>Agents</li>
                </Link>
                <Link to='/maps' className="homelink">
                    <li>Maps</li>
                </Link>
                <Link to='/leaderboard' className="homelink">
                    <li>Top 100 Leaderboard</li>
                </Link>
                <Link to='/skins' className="homelink">
                    <li>Skins</li>
                </Link>
            </ul>
        </nav>
    </div>
);

export default Nav;
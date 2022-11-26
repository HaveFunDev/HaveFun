import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src="/logo.png" />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/members">Members</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

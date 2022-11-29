import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	const [showNavMobile, setShowNavMobile] = useState(false);

	const handleShowMobile = () => {
		setShowNavMobile((prev) => !prev);
	};

	return (
		<div className={styles.navbar}>
			<img src="/logo.png" className={styles.logo} />
			<nav
				className={`${showNavMobile ? styles.mobile : ""} ${
					styles.navigation
				}`}>
				<ul
					onClick={() => {
						showNavMobile && handleShowMobile();
					}}>
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
			<button onClick={handleShowMobile} className={styles[`nav-button`]}>
				<img src="/nav-icon.png" alt="nav bar icon" />
			</button>
		</div>
	);
};

export default Navbar;

import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles["text-content"]}>
				<h2>Welcome!</h2>
				<p>Start having fun by creating awesome projects with others!</p>
				<a href="https://github.com/HaveFunDev" target="_blank">
					<button>Join</button>
				</a>
			</div>
			<div className="gif">
				<img src="../public/start.gif" alt="purple astronaut" />
			</div>
		</div>
	);
};

export default Home;

import styles from "./Home.module.scss";
import animations from "../../animations/animations.module.scss";
import Loader from "../../components/loader/Loader";
import { useState } from "react";

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	console.log(isLoaded);
	return (
		<div className={styles.container}>
			{!isLoaded ? (
				<Loader />
			) : (
				<div className={`${styles["text-content"]} ${animations.animate}`}>
					<h2>Welcome!</h2>
					<p>Start having fun creating awesome projects with others!</p>
					<a href="https://github.com/HaveFunDev" target="_blank">
						<button>Join</button>
					</a>
				</div>
			)}
			<img
				src="/start.gif"
				alt="purple astronaut"
				className={animations.animate}
				onLoad={() => setIsLoaded(true)}
				style={{
					animationDelay: "0.5s",
					animationTimingFunction: "linear",
					animationDuration: "0.5s",
				}}
			/>
		</div>
	);
};

export default Home;

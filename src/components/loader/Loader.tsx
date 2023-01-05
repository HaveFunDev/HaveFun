import styles from "./Loader.module.scss";
import animations from "../../animations/animations.module.scss";

const Loader = () => {
	return (
		<div className={`${styles.container} ${animations["animate-loader"]}`}>
			<div className={`${styles.square}`}></div>
			<div className={`${styles.square}`}></div>
		</div>
	);
};
export default Loader;

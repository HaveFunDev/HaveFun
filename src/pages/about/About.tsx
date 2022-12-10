import styles from "./About.module.scss";

const About = () => {
	return (
		<div className="container">
			<h2 className="page-title">
				<span className={styles.icon}>👾</span> ABOUT HAVEFUN{" "}
				<span className={styles.icon}>👾</span>
			</h2>
			<article className={styles["article-content"]}>
				<p className={styles["text-content"]}>
					The organization was created for fun. Learning new things is our main
					objective, so we can grow as developers! At the moment, we're just
					doing frontend development, but we're aiming high.
				</p>
				<p className={styles.title}>Team</p>
				<p className={styles["text-content"]}>
					We are currently looking for talented people to join our team. If you
					want to join us we would be more than happy!
				</p>
				<p className={styles.title}>How to reach us?</p>
				<p className={styles["text-content"]}>
					You can reach us if you need support or have a cool idea
				</p>
				<a href="mailto: havefundevelopment@gmail.com">
					<p className={styles["text-content"]}>havefundevelopment@gmail.com</p>
				</a>
				<div className={styles["email-overline"]} />
			</article>
		</div>
	);
};

export default About;

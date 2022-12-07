import styles from "./Profile.module.scss";

interface Props {
	name: string;
	image: string;
	url: string;
}

const Profile = (props: Props) => {
	return (
		<a href={props.url} target="_blank" className={styles.profile}>
			<div className={styles["profile-avatar"]}>
				<img
					src={props.image}
					alt="member profile"
					className={styles["profile-image"]}
				/>
			</div>
			<div className={styles["name-content"]}>
				<p className={styles.name}>{props.name}</p>
			</div>
		</a>
	);
};

export default Profile;

import styles from "./ProjectCard.module.scss";

type Props = {
	name: string;
	url: string;
};

const ProjectCard = (props: Props) => {
	return (
		<a href={props.url} target="_blank" className={styles.container}>
			<div className={styles.name}>
				<p>{props.name}</p>
			</div>
		</a>
	);
};

export default ProjectCard;

import { useLoaderData } from "react-router-dom";
import ProjectCard from "../../components/project-card/ProjectCard";
import { getData } from "../../util/api";
import styles from "./Projects.module.scss";

const Projects = () => {
	const loaderData: any = useLoaderData();
	const projectList = loaderData.map((project: any) => {
		if (project.name === ".github") return;
		return (
			<ProjectCard
				key={project.svn_url}
				name={project.name.toLocaleUpperCase()}
				url={project.svn_url}
			/>
		);
	});

	return (
		<div className="container">
			<h2 className="page-title">OUR PROJECTS</h2>
			<div className={styles["list-container"]}>{projectList}</div>
		</div>
	);
};

export default Projects;

export const loader = () =>
	getData("https://api.github.com/orgs/HaveFunDev/repos");

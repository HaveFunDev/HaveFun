import { useLoaderData } from "react-router-dom";
import Profile from "../../components/member-profile/Profile";
import { getData } from "../../util/api";
import styles from "./Members.module.scss";

const Members = () => {
	const loaderData: any = useLoaderData();
	console.log(loaderData);
	return (
		<div className="container">
			<h2 className="page-title">OUR MEMBERS</h2>
			<div className={styles["profile-container"]}>
				{loaderData.map((member: any) => (
					<Profile
						name={member.login}
						image={member.avatar_url}
						url={member.html_url}
					/>
				))}
			</div>
		</div>
	);
};

export default Members;

export const loader = () =>
	getData("https://api.github.com/orgs/HaveFunDev/members");

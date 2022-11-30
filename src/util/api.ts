
export const getProjects = async () => {
	const response = await fetch("https://api.github.com/orgs/HaveFunDev/repos");
	if (!response.ok) {
		throw { message: "failed to fetch projects!", status: 500 };
	}
	return response.json();
};

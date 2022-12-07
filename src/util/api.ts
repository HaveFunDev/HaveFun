
export const getData = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw { message: "failed to fetch projects!", status: 500 };
	}
	return response.json();
};

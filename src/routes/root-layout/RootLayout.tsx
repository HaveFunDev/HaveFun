import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;

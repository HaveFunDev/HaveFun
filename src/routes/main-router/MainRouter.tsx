import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import Members from "../../pages/members/Members";
import Projects, {
	loader as projectsLoader,
} from "../../pages/projects/Projects";
import RootLayout from "../root-layout/RootLayout";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} loader={projectsLoader} />
			<Route path="members" element={<Members />} />
			<Route path="about" element={<About />} />
		</Route>
	)
);

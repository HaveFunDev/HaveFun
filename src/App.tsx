import "./App.scss";
import {
	RouterProvider,
	createRoutesFromElements,
	Route,
	createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Projects, { loader as projectsLoader } from "./pages/projects/Projects";
import Members from "./pages/members/Members";
import About from "./pages/about/About";
import RootLayout from "./pages/root-layout/RootLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="projects" element={<Projects />} loader={projectsLoader} />
			<Route path="members" element={<Members />} />
			<Route path="about" element={<About />} />
		</Route>
	)
);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

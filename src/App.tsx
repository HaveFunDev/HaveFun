import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Members from "./pages/members/Members";
import About from "./pages/about/About";
import Navbar from "./components/navigation/Navbar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="members" element={<Members />} />
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

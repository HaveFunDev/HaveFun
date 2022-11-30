import { RouterProvider } from "react-router-dom";
import { router } from "./routes/main-router/MainRouter";

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

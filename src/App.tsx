import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Workout from "./components/Workout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

function Root() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

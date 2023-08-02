import Home from "./scenes/Home";
import Workout from "./scenes/Workout";
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
      </Route>
    )
  );
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500">
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

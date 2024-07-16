import AddTask from "./component/AddTask";
import ToDoScreen from "./screen/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />,
  },
  {
    path: "/add-task",
    element: <AddTask />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

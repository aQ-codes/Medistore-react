import { createBrowserRouter } from "react-router-dom";
import ListMedicine from "./components/ListMedicine";
import App from "./App";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import AddMedicine from "./components/AddMedicine";
import EditMedicine from "./components/EditMedicine";
import Login from "./components/auth/Login";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
    { path: 'home', element: <Home/> },
    { path: 'medicines', element: <ListMedicine/> },
    { path: 'medicines/add', element: <AddMedicine/> },
    { path: 'medicines/edit/:id', element: <EditMedicine/> },
  
]);

export default router;
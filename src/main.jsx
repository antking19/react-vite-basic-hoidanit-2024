import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./component/todo/todoApp.jsx";
import ProductsPage from "./pages/product.jsx";
import UsersPage from "./pages/user.jsx";
import SigninPage from "./pages/signin.jsx";
import SignoutPage from "./pages/signout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoApp />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/users",
                element: <UsersPage />,
            },
        ],
    },
    {
        path: "/signin",
        element: <SigninPage />,
    },
    {
        path: "/signout",
        element: <SignoutPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

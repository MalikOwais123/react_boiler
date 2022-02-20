import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import About from "../features/About/About";
import Home from "../features/Home/Home";

const Routing = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "about",
      element: <About />,
    },
    // {
    //   path: "blog/create",
    //   element: <CreateBlog />,
    //   children: [
    //     {
    //       path: "",
    //       element: <CreateBlog />,
    //     },
    //     {
    //       path: ":id",
    //       element: <EditBlog />,
    //     },
    //   ],
    // },
    {
      path: "*",
      element: <Navigate to={"/"} />, // This is the default route (you can use any other route that will show custom component)
    },
    // ...
  ]);
  return routes;
};
export default Routing;

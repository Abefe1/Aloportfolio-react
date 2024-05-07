import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WhatIDo from "./components/homeComponents/WhatIDo";
import Skills from "./components/homeComponents/Skills";
import Contact from "./components/homeComponents/Contact";
import ProjectsDiv from "./components/homeComponents/ProjectsDiv";



const router= createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },{
                path:"/about",
                element:<About/>
            },{
                path:"/projects",
                element:<Projects/>
            },{
                path:"/service",
                element:<WhatIDo/>
            },{
                path:"/skills",
                element:<Skills/>
            },{
                path:"/contact",
                element:<Contact/>
            },{
                path:"/projectDiv",
                element:<ProjectsDiv/>
            },{
                path:"*",
                element:"Page not found"
            }
        ]
    }
])

export default router
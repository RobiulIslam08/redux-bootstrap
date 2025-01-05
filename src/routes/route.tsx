import App from "@/App";
import Login from "@/pages/Login";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path:"/",
		element:<App></App>,
		children:[
			
			{
				index:true,
				element:<Task></Task>
			},
			{
				path:'user',
				element:<Users></Users>
			},
		]
	},
	{
		path:"/login",
		element:<Login></Login>
	},
])
export default routes
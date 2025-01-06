
import { Link } from "react-router-dom";
import logo from "../../assets/images.png";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
	return (
		<nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
			<div className="flex items-center">
			<img className="bg-green-700 w-10 h-10" src={logo} alt="Task Logo" />
			<span className="font-bold ml-2">Task Manger</span>
			</div>
			<div className="text-red-500 font-bold ">
				<Link className="mr-10 hover:underline" to="/">Task</Link>
				<Link className="hover:underline" to="/user">User</Link>
			</div>
			<div>
				<ModeToggle></ModeToggle>

			</div>

		</nav>
	);
};

export default Navbar;
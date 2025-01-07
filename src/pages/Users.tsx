import { Button } from "@/components/ui/button";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";


const Users = () => {
	const users = useAppSelector(selectUser);
	return (
		<div className="grid grid-cols-2 max-w-7xl mx-auto">
			{
				users.map(user => (
					<div key={user.id} className="border p-10 w-72 bg-slate-300 flex justify-between items-center">
						<p className="text-2xl font-semibold">{user.name}</p>
						<Button className="w-2"><Trash2></Trash2> </Button>
			
					</div>
				))
			}
		</div>
	);
};

export default Users;

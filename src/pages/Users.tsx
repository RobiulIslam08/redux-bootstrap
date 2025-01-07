import { AddUser } from "@/components/module/user/AddUserModal";
import { Button } from "@/components/ui/button";
import { removeUser, selectUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";


const Users = () => {
	const users = useAppSelector(selectUser);
	const dispatch = useAppDispatch()
	return (
		<div className="max-w-7xl mx-auto">
			<div className="mb-5 mr-0">
			<AddUser></AddUser>
			</div>
			<div className="grid grid-cols-2 max-w-7xl mx-auto">
			
			{
				users.map(user => (
					<div key={user.id} className="border p-10 w-72 bg-slate-300 flex justify-between items-center">
						<p className="text-2xl font-semibold">{user.name}</p>
						<Button onClick={()=>dispatch(removeUser(user?.id))} className="w-2"><Trash2></Trash2> </Button>
			
					</div>
				))
			}
		</div>
		</div>
		
	);
};

export default Users;

export interface ITask {
	id: string;
	title: string;
	description: string; // Note: Corrected the spelling of "description"
	dueDate: string; // ISO format for the date
	isCompleted: boolean; // Corrected spelling from "isComplited"
	priority: "high" | "medium" | "low"; // Assuming specific values for priority
	assignedTo:string | null;
  }
export interface IUser {
	name:string,
	id:string
}
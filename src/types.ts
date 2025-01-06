export interface ITask {
	id: number;
	title: string;
	description: string; // Note: Corrected the spelling of "description"
	dueDate: string; // ISO format for the date
	isCompleted: boolean; // Corrected spelling from "isComplited"
	priority: "High" | "Medium" | "Low"; // Assuming specific values for priority
  }
  
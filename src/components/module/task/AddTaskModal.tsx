import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
  
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
  const form = useForm();
  const onSubmit = (data: unknown) => {
	console.log(data)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
		<DialogDescription className="sr-only">Fill up this form</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        <Form {...form}>
         <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
		 <FormField
            control={form.control}
            name="title"
            render={({field}) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} value={field.value ||''}></Input>
                </FormControl>
              </FormItem>
            )}
          />
		 <FormField
            control={form.control}
            name="description"
            render={({field}) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} value={field.value ||''}></Textarea>
                </FormControl>
              </FormItem>
            )}
          />
		 <FormField
            control={form.control}
            name="dueData"
            render={({field}) => (
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} value={field.value ||''}></Textarea>
                </FormControl>
              </FormItem>
            )}
          />
		 <FormField
            control={form.control}
            name="priority"
            render={({field}) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
				<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

                </FormControl>
              </FormItem>
            )}
          />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
		 </form>
        </Form>

      </DialogContent>
    </Dialog>
  );
}

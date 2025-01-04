import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../hooks/useTasks";
import GoBack from "../components/GoBack";

export default function Edit() {
  const {id} = useParams()

  const {tasks} = useTasks()
  const task = tasks.find(task => task.id === id)

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <GoBack />
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Edit task - { task?.name }
        </h2>
        <TaskForm action="edit" task={task}/>
      </div>
    </section>
  )
}
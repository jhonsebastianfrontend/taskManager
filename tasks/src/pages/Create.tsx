import GoBack from "../components/GoBack";
import TaskForm from "../components/TaskForm";

export default function Create() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
      <GoBack />
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          New task 
        </h2>
        <TaskForm action="create" />
      </div>
    </section>
  )
}
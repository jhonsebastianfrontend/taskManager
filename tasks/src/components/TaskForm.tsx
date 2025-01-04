import { FormEvent, useState } from "react"
import { Task } from "../types"
import useForm from "../hooks/useForm"
import { useTasks } from "../hooks/useTasks"
import { useNavigate } from "react-router-dom"

type TaskFormProps = {
    action: 'edit' | 'create'
    task?: Task
}

export default function TaskForm({action, task}: TaskFormProps) {

    const {addTask, editTask, errorFetch} = useTasks()
    const { form, handleChange } = useForm(task)
    const [ error, setError ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(form.name === '' || form.description === '' || form.completedAt === ''){
            setError('Please, fill all inputs')
        }else{
            if(action === 'edit' && task){
                editTask(task.id, form)
            }else{
                addTask(form)
            }
        }
        if(errorFetch === ''){
            navigate('/')
        }else{
            setError(errorFetch)
        }
    }

    return (
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-center text-red-700"> { error } </h1>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Name"
                    name="name"
                    value={form?.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    className="w-full p-3 border rounded-lg"
                    rows={4}
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Complete at</label>
                <input className="w-full p-3 border rounded-lg" type="date"  min={new Date().toISOString().split("T")[0]} name="completedAt" id="date" value={form.completedAt} onChange={handleChange}/>
            </div>
            {
                error
            }
            <button type="submit" disabled={form.name === '' || form.description === '' || form.completedAt === ''} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed">
                {action === 'create' ? 'Create' : 'Edit' }
            </button>
        </form>
    )
}

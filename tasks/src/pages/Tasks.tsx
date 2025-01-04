import { useEffect, useState } from "react";
import { FiCheck, FiDelete, FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { MdOutlinePending } from "react-icons/md";
import { useTasks } from "../hooks/useTasks";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Tasks() {

  const { tasks, getTasks, deleteTask } = useTasks()
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 12;
  const navigate = useNavigate()

  useEffect(() => {
    getTasks()
  }, [])

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTasks.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="w-11/12 mx-auto py-10">
      <h1 className="text-center text-5xl text-slate-800"> TASK MANAGER </h1>
      {
        tasks.length > 0 ?
          (
            <>
              <div className="flex justify-end py-5">
  <input
    type="text"
    name="search"
    id="search"
    placeholder="Search tasks"
    onChange={handleSearchChange}
    className="px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
  />
</div>

<table className="table-auto w-full text-sm text-left text-gray-700">
  <thead className="bg-blue-800 text-white">
    <tr>
      <th className="py-3 px-4 font-semibold">#</th>
      <th className="py-3 px-4 font-semibold">Name</th>
      <th className="py-3 px-4 font-semibold">Description</th>
      <th className="py-3 px-4 font-semibold">State</th>
      <th className="py-3 px-4 font-semibold">Completed At</th>
      <th className="py-3 px-4"></th>
    </tr>
  </thead>
  <tbody>
    {currentItems.length > 0 ? (
      currentItems.map((task, index) => (
        <tr key={task.id} className="border-b hover:bg-blue-100 transition duration-300">
          <td className="py-2 px-4 text-gray-700">{index + 1}.</td>
          <td className="py-2 px-4 text-gray-700">{task.name}</td>
          <td className="py-2 px-4 text-gray-700">{task.description}</td>
          <td className="py-2 px-4 text-center">
            {task.state === 'completed' ? (
              <FiCheck className="text-green-500" />
            ) : (
              <MdOutlinePending className="text-yellow-500" />
            )}
          </td>
          <td className="py-2 px-4 text-gray-700 whitespace-nowrap">{task.completedAt}</td>
          <td className="py-2 px-4 flex justify-center gap-4">
            <button
              onClick={() => navigate(`/edit-task/${task.id}`)}
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FiEdit />
            </button>
            <button
              type="button"
              className="text-red-600 hover:text-red-800 transition duration-300"
              data-bs-toggle="modal"
              data-bs-target="#delete"
              onClick={() => deleteTask(task.id)}
            >
              <FiDelete />
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={-6} className="text-center text-3xl py-10 text-gray-500">
          No matches
        </td>
      </tr>
    )}
  </tbody>
</table>

<div className="my-6 flex justify-end items-center gap-4">
  <button
    id="back"
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="text-gray-500 hover:text-gray-700 disabled:text-gray-300 transition duration-300"
  >
    <GrPrevious className="text-lg" />
  </button>
  <span className="text-lg text-gray-700">
    Page {currentPage} of {totalPages}
  </span>
  <button
    id="next"
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="text-gray-500 hover:text-gray-700 disabled:text-gray-300 transition duration-300"
  >
    <GrNext className="text-lg" />
  </button>
</div>

            </>
          )
          :
          (
            <h1 className="text-center text-3xl py-10"> No data provided </h1>
          )
      }
    </section>
  )
}
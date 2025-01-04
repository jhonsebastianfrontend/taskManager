import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <header className="shadow-md relative w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className='flex flex-col justify-center items-center gap-2'>
          <GoTasklist />
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-2xl font-bold tracking-wide text-sky-500">TASK MANA<span className='text-white'>GER</span></h1>
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <nav className="space-x-6 hidden md:flex">
            <NavLink to={'/'} className={({ isActive }) =>
              `text-slate-900 hover:text-yellow-900 ${isActive ? 'text-yellow-500' : ''}`
            }>Tasks</NavLink>
            <NavLink to={'/create-task'} className={({ isActive }) =>
              `text-slate-900 hover:text-yellow-900 ${isActive ? 'text-yellow-500' : ''}`
            }>Create Task </NavLink>
          </nav>
        <div className="flex space-x-4 text-slate-900">
          <FaFacebook className="cursor-pointer hover:text-yellow-400" />
          <FaInstagram className="cursor-pointer hover:text-yellow-400" />
          <FaTwitter className="cursor-pointer hover:text-yellow-400" />
        </div>
      </div>
    </div>
    </header >
  );
};
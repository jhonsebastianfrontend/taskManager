import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="relative font-sans bg-stone-300 min-h-screen">
      <Menu />
      <Outlet />
    </div>
  )
}
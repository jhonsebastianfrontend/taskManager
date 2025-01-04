import { useContext } from "react";
import { TaskContext, TaskContextType } from "../context/TaskContext";

export function useTasks(): TaskContextType {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error("useTasks should inner TaskProvider");
    }
    return context;
  }
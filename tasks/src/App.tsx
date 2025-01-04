import { TaskProvider } from './context/TaskContext'
import Routing from './routing/Routing'

export default function App() {
  return (
    <TaskProvider>
      <Routing />
    </TaskProvider>
  )
}

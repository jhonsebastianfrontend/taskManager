import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Error404 from '../pages/Error404';
import Edit from '../pages/Edit';
import Tasks from '../pages/Tasks';
import Create from '../pages/Create';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element= { <Layout /> } >
              <Route index element = { <Tasks /> } />
              <Route path='/tasks' element = { <Tasks /> } />
              <Route path='/create-task' element = { <Create /> } />
              <Route path="edit-task/:id" element = { <Edit /> } />
          </Route>
          <Route path="*" element = { <Error404/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;
import ContextProvider from '../context/Context.jsx'
import { ROOT } from '../routes/rout'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
function App() {
  const roter = createBrowserRouter(ROOT)
  return (
    <>

      <ContextProvider>
        <RouterProvider router={roter} />
      </ContextProvider >
    </>
  )
}

export default App

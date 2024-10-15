import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import Browse from './components/Browse';
import { RouterProvider } from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ]);

  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;

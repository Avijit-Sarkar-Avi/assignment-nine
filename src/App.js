import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Chart from './Component/Chart/Chart';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import Quiz from './Component/Quiz/Quiz';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: '/home',
          element: <Home></Home>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: '/chart',
          element: <Chart></Chart>
        },
        {
          path: '/cart/:id',
          element: <Quiz></Quiz>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

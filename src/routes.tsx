import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home'
import { PostDetailsPage } from './pages/post-details'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/posts/:number',
    element: <PostDetailsPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
])

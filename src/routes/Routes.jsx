import {createBrowserRouter} from 'react-router-dom'
import Root from "../layouts/Root";
import Login from '../pages/Login';
import Home from '../components/Home';
import Register from './../components/Register';
import ErrorPage from '../pages/ErrorPage';
import PostDetails from '../pages/PostDetails';
import AddPost from '../pages/AddPost';
import ManageMyPostPage from '../pages/ManageMyPostPage';
import Update from '../pages/Update';
import PrivateRoute from '../components/PrivateRoute';
import PostReq from '../pages/PostReq';
import AllPosts from '../pages/AllPosts';



const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children:[
         {
            path: "/",
            element: <Home />,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/needpost`)
          },
     
        {
          path: "/login",
          element: <Login />,
        },
        {
         path: "/register",
         element: <Register />,
       },
       {
        path: "/needposts/:id",
        element: <PrivateRoute>
          <PostDetails />
        </PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/needposts/${params.id}`)
      },
      {
        path: "/addpost",
        element: <PrivateRoute>
          <AddPost />
        </PrivateRoute>,
      },
      {
        path: "/mypost",
        element: <PrivateRoute>
          <ManageMyPostPage />
        </PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/needposts/${params.id}`)
      },
      {
        path: "/postreq",
        element: <PrivateRoute>
          <PostReq />
        </PrivateRoute>,
      },
      {
        path: "/allposts",
        element: <AllPosts />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/needpost`)
      },
      ]
      
      }

])

export default router
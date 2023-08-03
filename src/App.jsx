import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/login"
import Post from "./pages/Post"
import Register from "./pages/Register"
import Single from "./pages/Single"
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.scss"

const Layout = () =>{
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/write",
          element: <Post />,
      }
    ]
  },
  {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
        },
  
]);
function App() {
  return <div className="app">
    <div className="container">
       <RouterProvider router={router} />
    </div>
    
  </div>;
}


export default App;
